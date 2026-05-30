export const MOCK_LESSONS = [
    {
        id: '1',
        number: 1,
        title: 'Основы денег',
        description: 'Понять деньги и своё отношение к ним.',
        xp: 50,
        duration: 5,
        status: 'completed' as const,
    },
    {
        id: '2',
        number: 2,
        title: 'Бюджет 101',
        description: 'Создайте бюджет, который работает на вас.',
        xp: 75,
        duration: 8,
        status: 'completed' as const,
    },
    {
        id: '3',
        number: 3,
        title: 'Умные сбережения',
        description: 'Создайте резервный фонд и копите с умом.',
        xp: 75,
        duration: 7,
        status: 'in-progress' as const,
    },
    {
        id: '4',
        number: 4,
        title: 'Основы инвестиций',
        description: 'Заставьте деньги работать на вас.',
        xp: 100,
        duration: 10,
        status: 'locked' as const,
    },
    {
        id: '5',
        number: 5,
        title: 'Кредит и долги',
        description: 'Управляйте кредитами и долгами грамотно.',
        xp: 75,
        duration: 9,
        status: 'locked' as const,
    },
    {
        id: '6',
        number: 6,
        title: 'Налоги просто',
        description: 'Разберитесь в налогах уверенно.',
        xp: 50,
        duration: 6,
        status: 'locked' as const,
    },
];

export const MOCK_LESSONS_TOTAL = 25;
export const MOCK_LESSONS_COMPLETED = 12;
