import { toast } from 'react-toastify';

import { useBuyItemMutation, useEquipItemMutation, type MarketItem } from '@entities/market';

interface SkinCardProps {
    item: MarketItem;
}

export const SkinCard = ({ item }: SkinCardProps) => {
    const [buyItem, { isLoading: isBuying }] = useBuyItemMutation();
    const [equipItem, { isLoading: isEquipping }] = useEquipItemMutation();

    const isGem = item.currency === 'gem';
    const isEquipped = item.owned && item.active;
    const isDisabled = isEquipped || isBuying || isEquipping;
    const costLabel = item.owned
        ? (item.active ? 'Надето' : 'Одеть')
        : isGem ? `${item.cost} 💎` : `${item.cost} XP`;
    const costBg = item.owned ? 'var(--color-primary-light)' : isGem ? '#fdf3c0' : 'var(--color-primary-light)';
    const costColor = item.owned ? 'var(--color-primary)' : isGem ? 'var(--color-gold)' : 'var(--color-primary)';

    const handlePress = async () => {
        if (isDisabled) return;
        try {
            if (item.owned && !item.active) {
                await equipItem(item.id).unwrap();
                toast.success(`${item.name} надет`);
            } else if (!item.owned) {
                await buyItem(item.id).unwrap();
                toast.success(`${item.name} куплен`);
            }
        } catch {
            toast.error('Ошибка');
        }
    };

    return (
        <div
            className="card-interactive rounded-[18px] overflow-hidden border relative flex flex-col"
            style={{ background: `${item.color}18`, borderColor: `${item.color}40` }}
        >
            {item.isNew && (
                <div className="absolute top-2 left-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ background: 'var(--color-primary)', color: '#fff' }}>
                    Новое
                </div>
            )}
            {!item.owned && isGem && (
                <div className="absolute top-2 right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ background: 'var(--color-gold)', color: '#fff' }}>
                    Premium
                </div>
            )}

            <div className="h-[88px] flex items-center justify-center text-[42px]">{item.emoji}</div>

            {item.stages.length > 0 && (
                <div className="flex items-center justify-center gap-[3px] pb-1.5">
                    {item.stages.map((s, i) => (
                        <span key={s.label} className="flex items-center gap-[2px]">
                            <span className="text-[12px]">{s.emoji}</span>
                            {i < item.stages.length - 1 && (
                                <span className="text-[9px]" style={{ color: 'var(--color-text-muted)' }}>›</span>
                            )}
                        </span>
                    ))}
                </div>
            )}

            <div className="p-[6px_12px_12px] flex flex-col gap-1">
                <div className="text-[13px] font-bold" style={{ color: 'var(--color-text-primary)' }}>{item.name}</div>
                <div className="text-[10px]" style={{ color: 'var(--color-text-muted)' }}>{item.description}</div>
                <button
                    type="button"
                    onClick={() => void handlePress()}
                    disabled={isDisabled}
                    className="w-full text-[11px] font-semibold py-1.5 rounded-[10px] mt-1"
                    style={{ background: costBg, color: costColor, opacity: isEquipped ? 0.7 : 1 }}
                >
                    {costLabel}
                </button>
            </div>
        </div>
    );
};
