export type SkinCurrency = 'xp' | 'gem';

export interface TreeSkin {
    id: string;
    name: string;
    cost: number;
    currency: SkinCurrency;
    owned: boolean;
    active: boolean;
    color: string;
    emoji: string;
}

export const MOCK_SKINS: TreeSkin[] = [
    { id: 'classic', name: 'Классик', cost: 0, currency: 'xp', owned: true, active: true, color: '#89B776', emoji: '🌳' },
    { id: 'sakura', name: 'Сакура', cost: 200, currency: 'xp', owned: false, active: false, color: '#e8a0b0', emoji: '🌸' },
    { id: 'gold', name: 'Золото', cost: 149, currency: 'gem', owned: false, active: false, color: '#e8b830', emoji: '✨' },
    { id: 'cosmic', name: 'Космос', cost: 299, currency: 'gem', owned: false, active: false, color: '#7060c0', emoji: '🔮' },
    { id: 'summer', name: 'Лето', cost: 100, currency: 'xp', owned: false, active: false, color: '#60b840', emoji: '☀️' },
    { id: 'snow', name: 'Снег', cost: 150, currency: 'xp', owned: false, active: false, color: '#80b0d0', emoji: '❄️' },
    { id: 'tropical', name: 'Тропики', cost: 250, currency: 'xp', owned: false, active: false, color: '#40b8a0', emoji: '🌴' },
];

export const MOCK_PLAYER = {
    xp: 742,
    gems: 3,
};
