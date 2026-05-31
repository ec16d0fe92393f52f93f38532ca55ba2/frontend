import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@shared/types/store';

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

interface TreeState {
    tree: TreeLevel;
    skills: SkillEntry[];
    xpHistory: XpHistoryEntry[];
}

const initialState: TreeState = {
    tree: {
        level: 3,
        label: 'Активно растёт',
        xp: 1080,
        xpToNext: 420,
        xpTotal: 1500,
        growthPoints: 12,
        financialScore: 72,
    },
    skills: [
        { label: 'Сбережения', value: 8, color: 'primary' },
        { label: 'Расходы', value: 6, color: 'primary' },
        { label: 'Инвестиции', value: 4, color: 'warning' },
        { label: 'Дисциплина', value: 9, color: 'primary' },
    ],
    xpHistory: [
        { month: 'Дек', value: 120 },
        { month: 'Янв', value: 280 },
        { month: 'Фев', value: 410 },
        { month: 'Мар', value: 520 },
        { month: 'Апр', value: 650 },
        { month: 'Май', value: 742 },
    ],
};

export const treeSlice = createSlice({
    name: 'tree',
    initialState,
    reducers: {
        setTree: (state, action: PayloadAction<TreeLevel>) => {
            state.tree = action.payload;
        },
        setSkills: (state, action: PayloadAction<SkillEntry[]>) => {
            state.skills = action.payload;
        },
        setXpHistory: (state, action: PayloadAction<XpHistoryEntry[]>) => {
            state.xpHistory = action.payload;
        },
    },
});

export const { setTree, setSkills, setXpHistory } = treeSlice.actions;
export const selectTree = (state: RootState) => state.tree.tree;
export const selectSkills = (state: RootState) => state.tree.skills;
export const selectXpHistory = (state: RootState) => state.tree.xpHistory;
