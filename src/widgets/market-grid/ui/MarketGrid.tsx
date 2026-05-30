import { MOCK_SKINS } from '@shared/mocks';

import { SkinCard } from './SkinCard';

export const MarketGrid = () => {
    const popular = MOCK_SKINS.slice(0, 4);
    const all = MOCK_SKINS;

    return (
        <div className="flex flex-col gap-5">
            {/* Popular horizontal scroll */}
            <div>
                <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>Популярные</div>
                <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
                    {popular.map((skin) => (
                        <div key={skin.id} className="w-[120px] shrink-0">
                            <SkinCard skin={skin} />
                        </div>
                    ))}
                </div>
            </div>

            {/* All skins grid */}
            <div>
                <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>Все скины</div>
                <div className="grid grid-cols-2 gap-3">
                    {all.map((skin) => (
                        <SkinCard key={skin.id} skin={skin} />
                    ))}
                </div>
            </div>
        </div>
    );
};
