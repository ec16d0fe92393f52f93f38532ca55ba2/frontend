import { Link } from 'react-router-dom';

import { selectMarketItems, type MarketItem } from '@entities/market';

import { CATEGORIES, type MarketFilter } from '@shared/mocks';
import { useAppSelector } from '@shared/hooks';

import { SkinCard } from './SkinCard';

interface MarketGridProps {
    filter: MarketFilter;
}

function applyFilter(items: MarketItem[], filter: MarketFilter): MarketItem[] {
    if (filter === 'За XP') return items.filter((i) => i.currency === 'xp');
    if (filter === 'Premium') return items.filter((i) => i.currency === 'gem');
    if (filter === 'Новые') return items.filter((i) => i.isNew);
    return items;
}

export const MarketGrid = ({ filter }: MarketGridProps) => {
    const allItems = useAppSelector(selectMarketItems);

    if (filter !== 'Все') {
        const items = applyFilter(allItems, filter);
        return (
            <div className="grid grid-cols-2 gap-3">
                {items.map((item) => <SkinCard key={item.id} item={item} />)}
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5">
            {CATEGORIES.map((cat) => {
                const items = allItems.filter((i) => i.category === cat.id).slice(0, 4);
                return (
                    <div key={cat.id}>
                        <div className="flex items-center justify-between mb-3">
                            <div className="text-[13px] font-bold" style={{ color: 'var(--color-text-primary)' }}>
                                {cat.emoji} {cat.label}
                            </div>
                            <Link
                                to={`/market/category/${cat.id}`}
                                className="text-[12px] font-medium"
                                style={{ color: 'var(--color-primary)' }}
                            >
                                Все →
                            </Link>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
                            {items.map((item) => (
                                <div key={item.id} className="w-[130px] shrink-0">
                                    <SkinCard item={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
