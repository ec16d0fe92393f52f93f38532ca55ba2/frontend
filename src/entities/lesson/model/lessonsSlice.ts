import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@shared/types/store';

import type { Lesson } from '../types';

interface LessonsState {
    items: Lesson[];
    completed: number;
    total: number;
}

const initialState: LessonsState = {
    completed: 2,
    total: 5,
    items: [
        { id: '1', number: 1, title: 'Что такое деньги', subtitle: 'Основы · 5 мин', description: 'Понять деньги и своё отношение к ним.', xp: 20, duration: 5, status: 'completed' },
        { id: '2', number: 2, title: 'Доходы и расходы', subtitle: 'Бюджет · 7 мин', description: 'Создайте бюджет, который работает на вас.', xp: 25, duration: 7, status: 'completed' },
        { id: '3', number: 3, title: 'Как работает бюджет', subtitle: 'Правило 50/30/20 на практике', description: 'Создайте резервный фонд и копите с умом.', xp: 30, duration: 10, status: 'in-progress', progress: 35 },
        { id: '4', number: 4, title: 'Инвестиции для начинающих', subtitle: 'Заперто · 12 мин', description: 'Заставьте деньги работать на вас.', xp: 40, duration: 12, status: 'locked' },
        { id: '5', number: 5, title: 'Финансовая свобода', subtitle: 'Заперто · 15 мин', description: 'Управляйте кредитами и долгами грамотно.', xp: 50, duration: 15, status: 'locked' },
    ],
};

export const lessonsSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {
        setLessons: (state, action: PayloadAction<Lesson[]>) => {
            state.items = action.payload;
        },
    },
});

export const { setLessons } = lessonsSlice.actions;
export const selectLessons = (state: RootState) => state.lessons;
