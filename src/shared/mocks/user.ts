export const MOCK_USER = {
    firstName: 'Алекс',
    lastName: 'Морган',
    login: 'alex_morgan',
    email: 'alex@example.com',
    appName: 'Voronka',
};

export const MOCK_TREE = {
    level: 3,
    label: 'Активно растёт',
    xp: 1080,
    xpToNext: 420,
    xpTotal: 1500,
    growthPoints: 12,
    financialScore: 72,
};

export const MOCK_BALANCE = {
    total: 24360,
    income: 65000,
    expenses: 40640,
    saved: 24000,
};

export const MOCK_SKILLS = [
    { label: 'Сбережения', value: 8, color: 'primary' as const },
    { label: 'Расходы', value: 6, color: 'primary' as const },
    { label: 'Инвестиции', value: 4, color: 'warning' as const },
    { label: 'Дисциплина', value: 9, color: 'primary' as const },
];

export const MOCK_XP_HISTORY = [
    { month: 'Дек', value: 120 },
    { month: 'Янв', value: 280 },
    { month: 'Фев', value: 410 },
    { month: 'Мар', value: 520 },
    { month: 'Апр', value: 650 },
    { month: 'Май', value: 742 },
];
