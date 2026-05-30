import { MOCK_PLAYER } from '@shared/mocks';

export const MarketHeader = () => (
    <div className="flex items-center justify-between">
        <div className="text-[20px] font-bold" style={{ color: 'var(--color-text-primary)' }}>Магазин скинов</div>
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full px-3 py-1.5"
                style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                <span className="text-[12px] font-bold">{MOCK_PLAYER.xp} XP</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full px-3 py-1.5"
                style={{ background: '#fdf3c0', color: 'var(--color-gold)' }}>
                <span className="text-[12px] font-bold">{MOCK_PLAYER.gems} 💎</span>
            </div>
        </div>
    </div>
);
