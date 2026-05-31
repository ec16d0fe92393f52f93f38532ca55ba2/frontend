import { useCallback, useEffect, useRef, useState } from 'react';

import type { ChatMessage } from '@shared/mocks';

const WS_BASE = import.meta.env.VITE_SERVER_URL
    ?.replace(/^http/, 'ws')
    ?.replace(/\/$/, '');

const BACKOFF_MS = [1000, 2000, 4000, 8000, 16000, 30000];

let msgId = 0;
const nextId = () => `local-${++msgId}`;

interface WsMessage {
    id: number;
    text: string;
    ai_generated: boolean;
    nickname: string;
    user_uuid: string;
}

export type ChatStatus = 'connecting' | 'open' | 'closed' | 'error';

interface UseChatReturn {
    messages: ChatMessage[];
    status: ChatStatus;
    isTyping: boolean;
    send: (text: string) => void;
}

function parseWsMessage(raw: string): WsMessage | null {
    try {
        return JSON.parse(raw) as WsMessage;
    } catch {
        return null;
    }
}

function toChatMessage(msg: WsMessage): ChatMessage {
    return {
        id: String(msg.id),
        from: msg.ai_generated ? 'bot' : 'user',
        text: msg.text,
    };
}

export const useChat = (): UseChatReturn => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [status, setStatus] = useState<ChatStatus>('connecting');
    const [isTyping, setIsTyping] = useState(false);

    const wsRef = useRef<WebSocket | null>(null);
    const retryTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const attemptRef = useRef(0);
    const unmountedRef = useRef(false);

    const connect = useCallback(() => {
        if (unmountedRef.current) return;
        if (!WS_BASE) {
            console.warn('[useChat] VITE_SERVER_URL is not set — WebSocket disabled');
            setStatus('error');
            return;
        }

        const token = localStorage.getItem('accessToken') ?? '';
        const ws = new WebSocket(`${WS_BASE}/chatbot/ws?token=${token}`);
        wsRef.current = ws;
        setStatus('connecting');

        ws.onopen = () => {
            if (unmountedRef.current) { ws.close(); return; }
            setStatus('open');
            attemptRef.current = 0;
        };

        ws.onmessage = (event: MessageEvent) => {
            let parsed: unknown;
            try {
                parsed = JSON.parse(event.data);
            } catch {
                // plain text — try to extract embedded JSON (e.g. "Ответ на: {...}")
                let text: string = event.data as string;
                const jsonStart = text.indexOf('{');
                if (jsonStart !== -1) {
                    try {
                        const embedded = JSON.parse(text.slice(jsonStart)) as { text?: string };
                        if (embedded.text) {
                            text = text.slice(0, jsonStart).trim() + ' ' + embedded.text;
                        }
                    } catch { /* keep original */ }
                }
                setMessages((prev) => [...prev, { id: nextId(), from: 'bot', text }]);
                setIsTyping(false);
                return;
            }

            // History batch on connect: array of JSON strings
            if (Array.isArray(parsed)) {
                const history = (parsed as string[])
                    .map(parseWsMessage)
                    .filter((m): m is WsMessage => m !== null)
                    .map(toChatMessage);
                setMessages(history);
                return;
            }

            // Single new message
            const msg = parsed as WsMessage;
            if (msg.ai_generated) {
                setMessages((prev) => [...prev, toChatMessage(msg)]);
                setIsTyping(false);
            }
            // ai_generated: false — user's own echo, already added optimistically
        };

        ws.onclose = () => {
            if (unmountedRef.current) return;
            setStatus('closed');
            const delay = BACKOFF_MS[Math.min(attemptRef.current, BACKOFF_MS.length - 1)];
            attemptRef.current += 1;
            retryTimer.current = setTimeout(connect, delay);
        };

        ws.onerror = () => {
            if (unmountedRef.current) return;
            setStatus('error');
        };
    }, []);

    useEffect(() => {
        unmountedRef.current = false;
        connect();
        return () => {
            unmountedRef.current = true;
            if (retryTimer.current !== null) clearTimeout(retryTimer.current);
            wsRef.current?.close();
        };
    }, [connect]);

    const send = useCallback((text: string) => {
        if (!text.trim() || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
        setMessages((prev) => [...prev, { id: nextId(), from: 'user', text }]);
        wsRef.current.send(text);
        setIsTyping(true);
    }, []);

    return { messages, status, isTyping, send };
};
