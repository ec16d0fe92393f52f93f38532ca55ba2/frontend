export const MOCK_GOAL = {
    title: 'Поездка к морю',
    current: 24000,
    target: 80000,
    deadline: 'Сентябрь 2025',
};

export type MilestoneStatus = 'completed' | 'current' | 'locked';

export interface MilestoneSubtask {
    id: string;
    text: string;
    done: boolean;
}

export interface Milestone {
    id: string;
    title: string;
    description: string;
    date: string;
    xp: number;
    status: MilestoneStatus;
    subtasks?: MilestoneSubtask[];
}

export const MOCK_MILESTONES: Milestone[] = [
    {
        id: '1',
        title: 'Первые 5 000 ₽',
        description: 'Начало накоплений',
        date: 'Январь',
        xp: 20,
        status: 'completed',
    },
    {
        id: '2',
        title: 'Снижение расходов',
        description: 'Экономить 3 000 ₽/мес',
        date: 'Февраль',
        xp: 25,
        status: 'completed',
        subtasks: [
            { id: 's1', text: 'Перевести 500 ₽ на счёт', done: true },
            { id: 's2', text: 'Пропустить кофе сегодня', done: false },
            { id: 's3', text: 'Продать ненужную вещь', done: false },
        ],
    },
    {
        id: '3',
        title: 'Активный заработок',
        description: 'Дополнительный доход',
        date: 'Март — Май',
        xp: 30,
        status: 'current',
        subtasks: [
            { id: 's1', text: 'Перевести 500 ₽ на счёт', done: true },
            { id: 's2', text: 'Пропустить кофе сегодня', done: false },
            { id: 's3', text: 'Продать ненужную вещь', done: false },
        ],
    },
    {
        id: '4',
        title: 'Умные инвестиции',
        description: '20 000 ₽ в рост',
        date: 'Июнь — Август',
        xp: 40,
        status: 'locked',
        subtasks: [
            { id: 's1', text: 'Перевести 500 ₽ на счёт', done: true },
            { id: 's2', text: 'Пропустить кофе сегодня', done: false },
            { id: 's3', text: 'Продать ненужную вещь', done: false },
        ],
    },
    {
        id: '5',
        title: 'Поездка к морю! 🌊',
        description: '80 000 ₽ цели',
        date: 'Сентябрь',
        xp: 50,
        status: 'locked',
    },
];
