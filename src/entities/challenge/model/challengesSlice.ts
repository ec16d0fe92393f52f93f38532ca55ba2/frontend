import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@shared/types/store';

import type { Challenge, Achievement } from '../types';

interface ChallengesState {
    daily: Challenge[];
    weekly: Challenge;
    achievements: Achievement[];
    streakDays: number;
    resetHours: number;
    resetMinutes: number;
}

const initialState: ChallengesState = {
    streakDays: 14,
    resetHours: 14,
    resetMinutes: 18,
    daily: [
        { id: '1', title: 'Записать расходы', description: 'Отследите любой расход сегодня', progress: 1, total: 1, reward: 10, status: 'completed' },
        { id: '2', title: 'Завершить урок', description: 'Пройдите любой урок', progress: 1, total: 1, reward: 15, status: 'completed' },
        { id: '3', title: 'Сохранить 200 ₽', description: 'Добавьте 200 ₽ в сбережения', progress: 0, total: 200, reward: 20, status: 'pending' },
    ],
    weekly: {
        id: 'w1',
        title: 'Умный накопитель',
        description: 'Сохраните 1 000 ₽ за неделю',
        progress: 600,
        total: 1000,
        reward: 50,
        status: 'pending',
    },
    achievements: [
        { id: 'a1', title: 'Первые шаги', description: 'Пройдите первый урок', unlocked: true },
        { id: 'a2', title: 'Учёный', description: '5 уроков', unlocked: true },
        { id: 'a3', title: 'Копилка', description: '100 ₽ сохранено', unlocked: true },
        { id: 'a4', title: 'Постоянство', description: '7 дней подряд', unlocked: false },
    ],
};

export const challengesSlice = createSlice({
    name: 'challenges',
    initialState,
    reducers: {
        setChallenges: (_state, action: PayloadAction<ChallengesState>) => action.payload,
        setDailyChallenges: (state, action: PayloadAction<Challenge[]>) => {
            state.daily = action.payload;
        },
        setWeeklyChallenge: (state, action: PayloadAction<Challenge>) => {
            state.weekly = action.payload;
        },
        setAchievements: (state, action: PayloadAction<Achievement[]>) => {
            state.achievements = action.payload;
        },
        setStreakInfo: (state, action: PayloadAction<{ streakDays: number; resetHours: number; resetMinutes: number }>) => {
            state.streakDays = action.payload.streakDays;
            state.resetHours = action.payload.resetHours;
            state.resetMinutes = action.payload.resetMinutes;
        },
    },
});

export const { setChallenges, setDailyChallenges, setWeeklyChallenge, setAchievements, setStreakInfo } = challengesSlice.actions;
export const selectChallenges = (state: RootState) => state.challenges;
