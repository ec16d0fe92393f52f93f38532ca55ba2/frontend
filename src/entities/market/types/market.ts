export type SkinCurrency = 'xp' | 'gem';
export type MarketCategory = 'trees' | 'decor' | 'boosts';

export interface GrowthStage {
    emoji: string;
    label: string;
}

export interface MarketItem {
    id: string;
    name: string;
    description: string;
    cost: number;
    currency: SkinCurrency;
    owned: boolean;
    active: boolean;
    color: string;
    emoji: string;
    category: MarketCategory;
    isNew?: boolean;
    stages: GrowthStage[];
}
