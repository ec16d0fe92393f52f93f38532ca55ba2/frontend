export type TransactionType = 'income' | 'expense';

export interface Transaction {
    id: string;
    title: string;
    amount: number;
    category: string;
    date: string;
    type: TransactionType;
}

export const MOCK_TRANSACTIONS: Transaction[] = [
    { id: '1', title: 'Продукты', amount: -1200, category: 'food', date: 'Сегодня, 14:30', type: 'expense' },
    { id: '2', title: 'Зарплата', amount: 65000, category: 'salary', date: 'Вчера, 09:00', type: 'income' },
    { id: '3', title: 'Кафе', amount: -450, category: 'cafe', date: 'Вчера, 12:15', type: 'expense' },
    { id: '4', title: 'Транспорт', amount: -150, category: 'transport', date: 'Вчера, 08:30', type: 'expense' },
    { id: '5', title: 'Фриланс', amount: 12000, category: 'freelance', date: '28 мая', type: 'income' },
];

export const MOCK_CATEGORIES_EXPENSE = [
    { id: 'food', label: 'Продукты', emoji: '🛒' },
    { id: 'cafe', label: 'Кафе', emoji: '☕' },
    { id: 'transport', label: 'Транспорт', emoji: '🚇' },
    { id: 'housing', label: 'Жильё', emoji: '🏠' },
    { id: 'health', label: 'Здоровье', emoji: '💊' },
    { id: 'entertainment', label: 'Развлечения', emoji: '🎬' },
    { id: 'subscriptions', label: 'Подписки', emoji: '📱' },
    { id: 'other', label: 'Ещё', emoji: '➕' },
];

export const MOCK_CATEGORIES_INCOME = [
    { id: 'salary', label: 'Зарплата', emoji: '💼' },
    { id: 'freelance', label: 'Фриланс', emoji: '💻' },
    { id: 'gift', label: 'Подарок', emoji: '🎁' },
    { id: 'interest', label: 'Проценты', emoji: '📈' },
    { id: 'refund', label: 'Возврат', emoji: '🔄' },
    { id: 'investment', label: 'Инвестиции', emoji: '💰' },
    { id: 'rental', label: 'Аренда', emoji: '🏘' },
    { id: 'other', label: 'Ещё', emoji: '➕' },
];
