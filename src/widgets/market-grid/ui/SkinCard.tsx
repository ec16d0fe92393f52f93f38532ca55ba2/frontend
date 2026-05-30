import type { TreeSkin } from '@shared/mocks';

interface SkinCardProps {
    skin: TreeSkin;
    onSelect?: (id: string) => void;
}

export const SkinCard = ({ skin, onSelect }: SkinCardProps) => {
    const isGem = skin.currency === 'gem';
    const costLabel = skin.owned ? (skin.active ? 'Надето' : 'Одеть') : isGem ? `${skin.cost} 💎` : `${skin.cost} XP`;
    const costBg = skin.owned ? 'var(--color-primary-light)' : isGem ? '#fdf3c0' : 'var(--color-primary-light)';
    const costColor = skin.owned ? 'var(--color-primary)' : isGem ? 'var(--color-gold)' : 'var(--color-primary)';

    return (
        <div className="card-interactive rounded-[18px] overflow-hidden border relative"
            style={{ background: `${skin.color}18`, borderColor: `${skin.color}40` }}>
            {!skin.owned && isGem && (
                <div className="absolute top-2 right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ background: 'var(--color-gold)', color: '#fff' }}>Premium</div>
            )}
            <div className="h-[100px] flex items-center justify-center text-[48px]">{skin.emoji}</div>
            <div className="p-[10px_12px]">
                <div className="text-[13px] font-bold mb-1.5" style={{ color: 'var(--color-text-primary)' }}>{skin.name}</div>
                <button type="button" onClick={() => onSelect?.(skin.id)}
                    className="w-full text-[11px] font-semibold py-1.5 rounded-[10px]"
                    style={{ background: costBg, color: costColor }}>
                    {costLabel}
                </button>
            </div>
        </div>
    );
};
