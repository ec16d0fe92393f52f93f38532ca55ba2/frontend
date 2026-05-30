export type ChatSender = 'bot' | 'user';

export interface ChatChip {
    id: string;
    label: string;
}

export interface ChatMessage {
    id: string;
    from: ChatSender;
    text: string;
    chips?: ChatChip[];
}

export const MOCK_CHAT: ChatMessage[] = [
    {
        id: '1',
        from: 'bot',
        text: 'Привет! Я твой финансовый советник 🌿 Помогу составить план накоплений и достичь твоей мечты.',
    },
    {
        id: '2',
        from: 'bot',
        text: 'Расскажи, какая у тебя главная финансовая цель прямо сейчас?',
        chips: [
            { id: 'c1', label: 'Накопить на отпуск' },
            { id: 'c2', label: 'Погасить долги' },
            { id: 'c3', label: 'Создать подушку' },
        ],
    },
    {
        id: '3',
        from: 'user',
        text: 'Накопить на отпуск',
    },
    {
        id: '4',
        from: 'bot',
        text: 'Отличный выбор! Я уже анализирую твои расходы и готовлю персональный план. Сколько хочешь накопить?',
        chips: [
            { id: 'c4', label: '50 000 ₽' },
            { id: 'c5', label: '80 000 ₽' },
            { id: 'c6', label: '120 000 ₽' },
        ],
    },
    {
        id: '5',
        from: 'user',
        text: '80 000 ₽',
    },
    {
        id: '6',
        from: 'bot',
        text: 'Готово! Твой план: откладывай ~27 000 ₽/месяц и к сентябрю достигнешь цели 🎯',
    },
];
