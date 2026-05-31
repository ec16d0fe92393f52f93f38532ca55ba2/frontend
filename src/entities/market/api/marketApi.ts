import mainApi from '@shared/api/mainApi';

import type { MarketItem } from '../types';
import { setMarketItems, setMarketPlayer } from '../model/marketSlice';

interface Currency {
    xp: number;
    gems: number;
}

export const marketApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getMarketItems: build.query<MarketItem[], string | void>({
            query: (category) => ({
                url: '/market/items',
                params: category ? { category } : {},
            }),
            providesTags: ['Market'],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setMarketItems(data));
            },
        }),
        getPlayerCurrency: build.query<Currency, void>({
            query: () => '/user/currency',
            providesTags: ['Market'],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setMarketPlayer(data));
            },
        }),
        buyItem: build.mutation<void, string>({
            query: (itemId) => ({
                url: `/market/items/${itemId}/buy`,
                method: 'POST',
            }),
            invalidatesTags: ['Market'],
        }),
        equipItem: build.mutation<void, string>({
            query: (itemId) => ({
                url: `/market/items/${itemId}/equip`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Market'],
        }),
    }),
});

export const {
    useGetMarketItemsQuery,
    useGetPlayerCurrencyQuery,
    useBuyItemMutation,
    useEquipItemMutation,
} = marketApi;
