import mainApi from '@shared/api/mainApi';

import { setTree, setSkills, setXpHistory } from '../model/treeSlice';
import type { TreeLevel } from '../types';

interface SkillEntry {
    label: string;
    value: number;
    color: 'primary' | 'warning';
}

interface XpHistoryEntry {
    month: string;
    value: number;
}

export interface Currency {
    xp: number;
    gems: number;
}

export interface Streak {
    streakDays: number;
    resetHours: number;
    resetMinutes: number;
}

export const treeApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getUserTree: build.query<TreeLevel, void>({
            query: () => '/user/tree',
            providesTags: ['Tree'],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setTree(data));
            },
        }),
        getUserSkills: build.query<SkillEntry[], void>({
            query: () => '/user/skills',
            providesTags: ['Tree'],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setSkills(data));
            },
        }),
        getXpHistory: build.query<XpHistoryEntry[], number | void>({
            query: (months = 6) => ({ url: '/user/xp/history', params: { months } }),
            providesTags: ['Tree'],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setXpHistory(data));
            },
        }),
        getUserStreak: build.query<Streak, void>({
            query: () => '/user/streak',
            providesTags: ['Tree'],
        }),
        getUserCurrency: build.query<Currency, void>({
            query: () => '/user/currency',
            providesTags: ['Tree'],
        }),
    }),
});

export const {
    useGetUserTreeQuery,
    useGetUserSkillsQuery,
    useGetXpHistoryQuery,
    useGetUserStreakQuery,
    useGetUserCurrencyQuery,
} = treeApi;
