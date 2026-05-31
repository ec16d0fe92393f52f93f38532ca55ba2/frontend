import mainApi from '@shared/api/mainApi';

import { setTransactions } from '../model/transactionsSlice';
import type { Transaction, TransactionType } from '../types';

interface TransactionFilters {
    type?: TransactionType;
    limit?: number;
    date?: string;
}

interface TransactionCreate {
    title: string;
    amount: number;
    category: string;
    type: TransactionType;
    date?: string;
}

export const transactionApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getTransactions: build.query<Transaction[], TransactionFilters | void>({
            query: (filters) => ({
                url: '/transactions',
                params: filters ?? {},
            }),
            providesTags: ['Transaction'],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setTransactions(data));
            },
        }),
        createTransaction: build.mutation<Transaction, TransactionCreate>({
            query: (body) => ({
                url: '/transactions',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Transaction', 'Balance'],
        }),
        deleteTransaction: build.mutation<void, string>({
            query: (txId) => ({
                url: `/transactions/${txId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Transaction', 'Balance'],
        }),
    }),
});

export const {
    useGetTransactionsQuery,
    useCreateTransactionMutation,
    useDeleteTransactionMutation,
} = transactionApi;
