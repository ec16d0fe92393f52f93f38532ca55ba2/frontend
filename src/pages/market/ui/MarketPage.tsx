import { MarketGrid } from '@widgets/market-grid';

import { MarketHeader } from './MarketHeader';
import { FilterChips } from './FilterChips';

export const MarketPage = () => (
    <div className="flex flex-col gap-4 animate-fade-in-up">
        <MarketHeader />
        <FilterChips />
        <MarketGrid />
    </div>
);
