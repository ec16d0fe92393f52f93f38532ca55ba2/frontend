import mainApi from '@shared/api/mainApi';

import { setBalance } from '../model/balanceSlice';

export interface Balance {
    total: number;
    income: number;
    expenses: number;
    saved: number;
}

export const balanceApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getBalance: build.query<Balance, void>({
            query: () => '/balance',
            providesTags: ['Balance'],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setBalance(data));
            },
        }),
    }),
});

export const { useGetBalanceQuery } = balanceApi;
