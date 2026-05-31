import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@shared/types/store';

interface SavingsGoal {
    id: string;
    title: string;
    description: string;
    icon: string;
    current: number;
    target: number;
}

interface BudgetState {
    monthlyLimit: number;
    monthlyPlan: { target: number; projected: number };
    goals: SavingsGoal[];
    treeLeaves: number;
    leavesToNext: number;
}

const initialState: BudgetState = {
    monthlyLimit: 7500,
    monthlyPlan: { target: 7500, projected: 5000 },
    treeLeaves: 310,
    leavesToNext: 190,
    goals: [
        { id: '1', title: 'Резервный фонд', description: 'Финансовая безопасность прежде всего', icon: '🛡️', current: 1200, target: 2000 },
        { id: '2', title: 'Новый ноутбук', description: 'Работай умнее', icon: '💻', current: 650, target: 1500 },
        { id: '3', title: 'Фонд путешествий', description: 'Приключения ждут', icon: '✈️', current: 1800, target: 3000 },
    ],
};

export const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        setMonthlyLimit: (state, action: PayloadAction<number>) => {
            state.monthlyLimit = action.payload;
            state.monthlyPlan = { ...state.monthlyPlan, target: action.payload };
        },
    },
});

export const { setMonthlyLimit } = budgetSlice.actions;
export const selectBudget = (state: RootState) => state.budget;
export const selectMonthlyLimit = (state: RootState) => state.budget.monthlyLimit;
