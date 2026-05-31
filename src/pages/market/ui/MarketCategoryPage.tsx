import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { SkinCard } from '@widgets/market-grid';

import { selectMarketItems } from '@entities/market';

import { CATEGORIES, MARKET_FILTERS, type MarketCategory, type MarketFilter, type MarketItem } from '@shared/mocks';
import { Icon } from '@shared/ui';
import { useAppSelector } from '@shared/hooks';

function applyFilter(items: MarketItem[], filter: MarketFilter): MarketItem[] {
    if (filter === 'За XP') return items.filter((i) => i.currency === 'xp');
    if (filter === 'Premium') return items.filter((i) => i.currency === 'gem');
    if (filter === 'Новые') return items.filter((i) => i.isNew);
    return items;
}

export const MarketCategoryPage = () => {
    const { id } = useParams<{ id: MarketCategory }>();
    const navigate = useNavigate();
    const [filter, setFilter] = useState<MarketFilter>('Все');

    const allItems = useAppSelector(selectMarketItems);
    const cat = CATEGORIES.find((c) => c.id === id);
    const categoryItems = allItems.filter((i) => i.category === id);
    const items = applyFilter(categoryItems, filter);

    return (
        <div className="flex flex-col gap-4 animate-fade-in-up">
            {/* Header */}
            <div className="flex items-center gap-3">
                <button type="button" onClick={() => navigate(-1)} className="btn-press">
                    <Icon as={ArrowLeft} size={20} color="var(--color-text-primary)" />
                </button>
                <div className="text-[20px] font-bold" style={{ color: 'var(--color-text-primary)' }}>
                    {cat ? `${cat.emoji} ${cat.label}` : 'Категория'}
                </div>
            </div>

            {/* Filter chips */}
            <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                {MARKET_FILTERS.map((f) => (
                    <button
                        key={f}
                        type="button"
                        onClick={() => setFilter(f)}
                        className="text-[12px] font-medium px-4 py-2 rounded-full border shrink-0 transition-colors"
                        style={{
                            background: filter === f ? 'var(--color-primary)' : 'var(--color-surface)',
                            color: filter === f ? '#fff' : 'var(--color-text-secondary)',
                            borderColor: filter === f ? 'var(--color-primary)' : 'var(--color-border)',
                        }}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Grid */}
            {items.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                    {items.map((item) => <SkinCard key={item.id} item={item} />)}
                </div>
            ) : (
                <div className="text-center text-[13px] mt-10" style={{ color: 'var(--color-text-muted)' }}>
                    Ничего не найдено
                </div>
            )}
        </div>
    );
};
