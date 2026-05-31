import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@shared/types/store';

import type { Transaction } from '../types';

interface TransactionsState {
    items: Transaction[];
}

const initialState: TransactionsState = {
    items: [
        { id: '1', title: 'Продукты', amount: -1200, category: 'food', date: 'Сегодня, 14:30', type: 'expense' },
        { id: '2', title: 'Зарплата', amount: 65000, category: 'salary', date: 'Вчера, 09:00', type: 'income' },
        { id: '3', title: 'Кафе', amount: -450, category: 'cafe', date: 'Вчера, 12:15', type: 'expense' },
        { id: '4', title: 'Транспорт', amount: -150, category: 'transport', date: 'Вчера, 08:30', type: 'expense' },
        { id: '5', title: 'Фриланс', amount: 12000, category: 'freelance', date: '28 мая', type: 'income' },
    ],
};

export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        setTransactions: (state, action: PayloadAction<Transaction[]>) => {
            state.items = action.payload;
        },
        addTransaction: (state, action: PayloadAction<Transaction>) => {
            state.items.unshift(action.payload);
        },
    },
});

export const { setTransactions, addTransaction } = transactionsSlice.actions;
export const selectTransactions = (state: RootState) => state.transactions.items;
