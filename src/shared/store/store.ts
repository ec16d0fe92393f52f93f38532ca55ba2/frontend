import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { userSlice } from '@entities/user';
import { balanceSlice } from '@entities/balance';
import { transactionsSlice } from '@entities/transaction';
import { treeSlice } from '@entities/tree';
import { goalSlice } from '@entities/goal';
import { lessonsSlice } from '@entities/lesson';
import { challengesSlice } from '@entities/challenge';
import { marketSlice } from '@entities/market';
import { budgetSlice } from '@entities/budget';

import mainApi from '@shared/api/mainApi';

const rootReducer = combineReducers({
    [mainApi.reducerPath]: mainApi.reducer,
    user: userSlice.reducer,
    balance: balanceSlice.reducer,
    transactions: transactionsSlice.reducer,
    tree: treeSlice.reducer,
    goal: goalSlice.reducer,
    lessons: lessonsSlice.reducer,
    challenges: challengesSlice.reducer,
    market: marketSlice.reducer,
    budget: budgetSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
