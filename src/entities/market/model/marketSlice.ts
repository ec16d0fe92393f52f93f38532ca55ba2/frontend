import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@shared/types/store';

import type { MarketItem } from '../types';

interface MarketPlayer {
    xp: number;
    gems: number;
}

interface MarketState {
    items: MarketItem[];
    player: MarketPlayer;
}

const initialState: MarketState = {
    player: { xp: 0, gems: 0 },
    items: [],
};

export const marketSlice = createSlice({
    name: 'market',
    initialState,
    reducers: {
        setMarketItems: (state, action: PayloadAction<MarketItem[]>) => {
            state.items = action.payload;
        },
        setMarketPlayer: (state, action: PayloadAction<MarketPlayer>) => {
            state.player = action.payload;
        },
        equipItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.map((item) => ({ ...item, active: item.id === action.payload }));
        },
        buyItem: (state, action: PayloadAction<string>) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item && !item.owned) {
                item.owned = true;
                if (item.currency === 'xp') state.player.xp -= item.cost;
                else state.player.gems -= item.cost;
            }
        },
    },
});

export const { setMarketItems, setMarketPlayer, equipItem, buyItem } = marketSlice.actions;
export const selectMarketItems = (state: RootState) => state.market.items;
export const selectMarketPlayer = (state: RootState) => state.market.player;
