import type { ChatMessage as ChatMsg } from '@shared/mocks';

interface ChatMessageProps {
    message: ChatMsg;
    onChipClick?: (label: string) => void;
}

export const ChatMessage = ({ message, onChipClick }: ChatMessageProps) => {
    const isBot = message.from === 'bot';

    return (
        <div className={`flex gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}>
            {isBot && (
                <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-sm"
                    style={{ background: 'var(--color-primary)' }}>
                    🌿
                </div>
            )}
            <div className="max-w-[75%] min-w-0 flex flex-col gap-2">
                <div className="rounded-[16px] px-3 py-2.5 text-[13px] leading-[1.5] break-words whitespace-pre-wrap"
                    style={{
                        background: isBot ? 'var(--color-surface-alt)' : 'var(--color-primary)',
                        color: isBot ? 'var(--color-text-primary)' : '#fff',
                        borderRadius: isBot ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                        wordBreak: 'break-word',
                        overflowWrap: 'anywhere',
                    }}>
                    {message.text}
                </div>
                {message.chips && (
                    <div className="flex flex-wrap gap-2">
                        {message.chips.map((chip) => (
                            <button key={chip.id} type="button" onClick={() => onChipClick?.(chip.label)}
                                className="text-[12px] font-medium px-3 py-1.5 rounded-full border transition-colors"
                                style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)', background: 'var(--color-surface)' }}>
                                {chip.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
