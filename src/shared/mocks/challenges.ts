export const MOCK_DAILY_CHALLENGES = [
    {
        id: '1',
        title: 'Записать расходы',
        description: 'Отследите любой расход сегодня',
        progress: 1,
        total: 1,
        reward: 10,
        status: 'completed' as const,
    },
    {
        id: '2',
        title: 'Завершить урок',
        description: 'Пройдите любой урок',
        progress: 1,
        total: 1,
        reward: 15,
        status: 'completed' as const,
    },
    {
        id: '3',
        title: 'Сохранить 200 ₽',
        description: 'Добавьте 200 ₽ в сбережения',
        progress: 0,
        total: 200,
        reward: 20,
        status: 'pending' as const,
    },
];

export const MOCK_WEEKLY_CHALLENGE = {
    id: 'w1',
    title: 'Умный накопитель',
    description: 'Сохраните 1 000 ₽ за неделю',
    progress: 600,
    total: 1000,
    reward: 50,
    status: 'pending' as const,
};

export const MOCK_ACHIEVEMENTS = [
    { id: 'a1', title: 'Первые шаги', description: 'Пройдите первый урок', unlocked: true },
    { id: 'a2', title: 'Учёный', description: '5 уроков', unlocked: true },
    { id: 'a3', title: 'Копилка', description: '100 ₽ сохранено', unlocked: true },
    { id: 'a4', title: 'Постоянство', description: '7 дней подряд', unlocked: false },
];

export const RESET_HOURS = 14;
export const RESET_MINUTES = 18;
export const STREAK_DAYS = 14;
