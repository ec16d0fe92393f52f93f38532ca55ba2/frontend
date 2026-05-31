import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@shared/types/store';

interface BalanceState {
    total: number;
    income: number;
    expenses: number;
    saved: number;
}

const initialState: BalanceState = {
    total: 24360,
    income: 65000,
    expenses: 40640,
    saved: 24000,
};

export const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        setBalance: (_state, action: PayloadAction<BalanceState>) => action.payload,
    },
});

export const { setBalance } = balanceSlice.actions;
export const selectBalance = (state: RootState) => state.balance;
