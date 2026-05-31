import { useEffect, useRef, useState, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

import { Icon } from '@shared/ui';

import { useChat } from '../model/useChat';

import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';

const STATUS_LABEL: Record<string, string> = {
    connecting: 'Подключение к советнику...',
    closed: 'Нет соединения. Переподключаемся...',
    error: 'Нет соединения. Переподключаемся...',
};

export const ChatWindow = () => {
    const { messages, status, isTyping, send } = useChat();
    const isConnected = status === 'open';
    const [input, setInput] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        const text = input.trim();
        if (!text) return;
        send(text);
        setInput('');
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex flex-col h-full">
            {/* Connection status */}
            {!isConnected && (
                <div className="text-center text-[11px] py-1.5 mb-2 rounded-[10px]"
                    style={{ background: 'var(--color-expense-light)', color: 'var(--color-expense)' }}>
                    {STATUS_LABEL[status] ?? 'Подключение к советнику...'}
                </div>
            )}

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 flex flex-col gap-4 overflow-y-auto pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {messages.length === 0 && isConnected && (
                    <div className="text-center text-[13px] mt-8" style={{ color: 'var(--color-text-muted)' }}>
                        Напишите что-нибудь, чтобы начать
                    </div>
                )}
                {messages.map((msg) => (
                    <ChatMessage key={msg.id} message={msg} />
                ))}
                {isTyping && <TypingIndicator />}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 pt-3 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Напишите сообщение..."
                    className="flex-1 rounded-[20px] px-4 py-2.5 text-[14px] outline-none border"
                    style={{
                        background: 'var(--color-surface-alt)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text-primary)',
                    }}
                />
                <button
                    type="button"
                    onClick={handleSend}
                    disabled={!isConnected || !input.trim()}
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 btn-press transition-opacity"
                    style={{
                        background: isConnected && input.trim() ? 'var(--color-primary)' : 'var(--color-border)',
                    }}
                >
                    <Icon as={Send} size={16} color="#fff" />
                </button>
            </div>
        </div>
    );
};
