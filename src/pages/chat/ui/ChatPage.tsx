import { ChatWindow } from '@widgets/chat-window';

export const ChatPage = () => (
    <div className="flex flex-col h-[calc(100vh-140px)] animate-fade-in-up">
        <div className="text-[20px] font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Советник</div>
        <ChatWindow />
    </div>
);
