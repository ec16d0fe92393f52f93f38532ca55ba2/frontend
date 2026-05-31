import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@shared/types/store';
import type { MarketItem } from '@shared/mocks';

interface MarketPlayer {
    xp: number;
    gems: number;
}

interface MarketState {
    items: MarketItem[];
    player: MarketPlayer;
}

const initialState: MarketState = {
    player: { xp: 742, gems: 3 },
    items: [
        { id: 'oak', name: 'Дуб', description: 'Могучий и стойкий', cost: 0, currency: 'xp', owned: true, active: true, color: '#89B776', emoji: '🌳', category: 'trees', stages: [{ emoji: '🌱', label: 'Росток' }, { emoji: '🌿', label: 'Саженец' }, { emoji: '🌳', label: 'Дуб' }] },
        { id: 'sakura', name: 'Сакура', description: 'Нежная и цветущая', cost: 200, currency: 'xp', owned: false, active: false, isNew: true, color: '#e8a0b0', emoji: '🌸', category: 'trees', stages: [{ emoji: '🌱', label: 'Росток' }, { emoji: '🌸', label: 'Цветение' }, { emoji: '🌺', label: 'В цвету' }] },
        { id: 'pine', name: 'Ель', description: 'Вечнозелёная хвойная', cost: 150, currency: 'xp', owned: false, active: false, color: '#3a8c50', emoji: '🎄', category: 'trees', stages: [{ emoji: '🌱', label: 'Росток' }, { emoji: '🌲', label: 'Молодая' }, { emoji: '🎄', label: 'Ель' }] },
        { id: 'palm', name: 'Пальма', description: 'Тропическая экзотика', cost: 250, currency: 'xp', owned: false, active: false, color: '#40b8a0', emoji: '🌴', category: 'trees', stages: [{ emoji: '🌱', label: 'Росток' }, { emoji: '🌿', label: 'Ствол' }, { emoji: '🌴', label: 'Пальма' }] },
        { id: 'bamboo', name: 'Бамбук', description: 'Быстро растущий', cost: 180, currency: 'xp', owned: false, active: false, color: '#7bc47f', emoji: '🎋', category: 'trees', stages: [{ emoji: '🌱', label: 'Росток' }, { emoji: '🎋', label: 'Стебли' }, { emoji: '🎋', label: 'Роща' }] },
        { id: 'cactus', name: 'Кактус', description: 'Стойкий пустынник', cost: 120, currency: 'xp', owned: false, active: false, color: '#5aab5a', emoji: '🌵', category: 'trees', stages: [{ emoji: '🌱', label: 'Семя' }, { emoji: '🌵', label: 'Кактус' }, { emoji: '🌵', label: 'Цветёт' }] },
        { id: 'birch', name: 'Берёза', description: 'Стройная и светлая', cost: 100, currency: 'xp', owned: false, active: false, color: '#b8d8a0', emoji: '🌿', category: 'trees', stages: [{ emoji: '🌱', label: 'Росток' }, { emoji: '🌿', label: 'Тонкая' }, { emoji: '🌳', label: 'Берёза' }] },
        { id: 'cosmic', name: 'Космос', description: 'Мистическое дерево', cost: 299, currency: 'gem', owned: false, active: false, color: '#7060c0', emoji: '🔮', category: 'trees', stages: [{ emoji: '✨', label: 'Искра' }, { emoji: '💫', label: 'Свечение' }, { emoji: '🔮', label: 'Космос' }] },
        { id: 'gold_tree', name: 'Золото', description: 'Богатство и удача', cost: 149, currency: 'gem', owned: false, active: false, color: '#e8b830', emoji: '✨', category: 'trees', stages: [{ emoji: '🌱', label: 'Росток' }, { emoji: '🌿', label: 'Листья' }, { emoji: '✨', label: 'Золото' }] },
        { id: 'stones', name: 'Камни', description: 'Каменный бордюр', cost: 80, currency: 'xp', owned: false, active: false, color: '#a0a0a0', emoji: '🪨', category: 'decor', stages: [] },
        { id: 'flowers', name: 'Цветы', description: 'Клумба вокруг', cost: 100, currency: 'xp', owned: false, active: false, isNew: true, color: '#e070a0', emoji: '🌺', category: 'decor', stages: [] },
        { id: 'fence', name: 'Забор', description: 'Деревянный забор', cost: 120, currency: 'xp', owned: false, active: false, color: '#c09060', emoji: '🪵', category: 'decor', stages: [] },
        { id: 'lantern', name: 'Фонарь', description: 'Уютное освещение', cost: 90, currency: 'xp', owned: false, active: false, isNew: true, color: '#f0c060', emoji: '🏮', category: 'decor', stages: [] },
        { id: 'pond', name: 'Прудик', description: 'Маленький водоём', cost: 160, currency: 'xp', owned: false, active: false, color: '#4090d0', emoji: '💧', category: 'decor', stages: [] },
        { id: 'xp2', name: '2× XP', description: 'Двойной XP 24ч', cost: 50, currency: 'gem', owned: false, active: false, color: '#60c0e0', emoji: '⚡', category: 'boosts', stages: [] },
        { id: 'shield', name: 'Щит', description: 'Защита стрика', cost: 30, currency: 'gem', owned: false, active: false, color: '#8060c0', emoji: '🛡️', category: 'boosts', stages: [] },
        { id: 'autowater', name: 'Автополив', description: 'Пассивный полив', cost: 80, currency: 'xp', owned: false, active: false, color: '#40a0d0', emoji: '💦', category: 'boosts', stages: [] },
    ],
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
