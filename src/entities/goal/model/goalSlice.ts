import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@shared/types/store';

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

export interface Goal {
    title: string;
    current: number;
    target: number;
    deadline: string;
}

interface GoalState {
    goal: Goal;
    milestones: Milestone[];
}

const initialState: GoalState = {
    goal: {
        title: 'Поездка к морю',
        current: 24000,
        target: 80000,
        deadline: 'Сентябрь 2025',
    },
    milestones: [
        { id: '1', title: 'Первые 5 000 ₽', description: 'Начало накоплений', date: 'Январь', xp: 20, status: 'completed' },
        {
            id: '2', title: 'Снижение расходов', description: 'Экономить 3 000 ₽/мес', date: 'Февраль', xp: 25, status: 'completed',
            subtasks: [
                { id: 's1', text: 'Перевести 500 ₽ на счёт', done: true },
                { id: 's2', text: 'Пропустить кофе сегодня', done: false },
                { id: 's3', text: 'Продать ненужную вещь', done: false },
            ],
        },
        {
            id: '3', title: 'Активный заработок', description: 'Дополнительный доход', date: 'Март — Май', xp: 30, status: 'current',
            subtasks: [
                { id: 's1', text: 'Перевести 500 ₽ на счёт', done: true },
                { id: 's2', text: 'Пропустить кофе сегодня', done: false },
                { id: 's3', text: 'Продать ненужную вещь', done: false },
            ],
        },
        { id: '4', title: 'Автоматические переводы', description: 'Автосохранение 10% дохода', date: 'Июнь', xp: 35, status: 'locked' },
        { id: '5', title: 'Резервный фонд', description: '3 месяца расходов', date: 'Июль', xp: 40, status: 'locked' },
        { id: '6', title: 'Умные инвестиции', description: '20 000 ₽ в рост', date: 'Август', xp: 45, status: 'locked' },
        { id: '7', title: 'Инвестиционный портфель', description: 'Диверсификация активов', date: 'Сентябрь', xp: 50, status: 'locked' },
        { id: '8', title: 'Пассивный доход', description: 'Первые проценты', date: 'Октябрь', xp: 55, status: 'locked' },
        { id: '9', title: 'Финансовая подушка', description: '6 месяцев расходов', date: 'Ноябрь', xp: 60, status: 'locked' },
        { id: '10', title: 'Поездка к морю! 🌊', description: '80 000 ₽ — цель достигнута', date: 'Декабрь', xp: 100, status: 'locked' },
    ],
};

export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        setGoal: (state, action: PayloadAction<Goal>) => {
            state.goal = action.payload;
        },
        toggleSubtask: (state, action: PayloadAction<{ milestoneId: string; subtaskId: string }>) => {
            const { milestoneId, subtaskId } = action.payload;
            const milestone = state.milestones.find((m) => m.id === milestoneId);
            if (milestone?.subtasks) {
                const subtask = milestone.subtasks.find((t) => t.id === subtaskId);
                if (subtask) subtask.done = !subtask.done;
            }
        },
        setMilestoneCompletedUpTo: (state, action: PayloadAction<string>) => {
            const idx = state.milestones.findIndex((m) => m.id === action.payload);
            if (idx === -1) return;
            const isAlreadyCompleted = state.milestones[idx].status === 'completed';

            state.milestones.forEach((m, i) => {
                if (isAlreadyCompleted) {
                    if (i < idx)   m.status = 'completed';
                    if (i === idx) m.status = 'current';
                    if (i > idx)   m.status = 'locked';
                } else {
                    if (i <= idx)      m.status = 'completed';
                    if (i === idx + 1) m.status = 'current';
                    if (i > idx + 1)   m.status = 'locked';
                }
            });
        },
    },
});

export const { setGoal, toggleSubtask, setMilestoneCompletedUpTo } = goalSlice.actions;
export const selectGoal = (state: RootState) => state.goal.goal;
export const selectMilestones = (state: RootState) => state.goal.milestones;
export const selectCompletedMilestoneCount = (state: RootState) =>
    state.goal.milestones.filter((m) => m.status === 'completed').length;
