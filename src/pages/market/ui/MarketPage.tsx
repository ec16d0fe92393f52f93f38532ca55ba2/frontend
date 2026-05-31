import { useState } from 'react';

import { MarketGrid } from '@widgets/market-grid';

import { type MarketFilter } from '@shared/mocks';

import { MarketHeader } from './MarketHeader';
import { FilterChips } from './FilterChips';

export const MarketPage = () => {
    const [filter, setFilter] = useState<MarketFilter>('Все');

    return (
        <div className="flex flex-col gap-4 animate-fade-in-up">
            <MarketHeader />
            <FilterChips value={filter} onChange={setFilter} />
            <MarketGrid filter={filter} />
        </div>
    );
};
