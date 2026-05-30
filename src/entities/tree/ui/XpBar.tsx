import type { TreeLevel } from '../types/tree';

interface XpBarProps {
    tree: TreeLevel;
}

export const XpBar = ({ tree }: XpBarProps) => {
    const percent = Math.round((tree.xp / tree.xpTotal) * 100);

    return (
        <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-[11px]" style={{ color: 'var(--color-text-faint)' }}>
                <span>{tree.xp.toLocaleString('ru-RU')} XP</span>
                <span>{tree.xpTotal.toLocaleString('ru-RU')} XP</span>
            </div>
            <div className="rounded-[6px] h-[7px] overflow-hidden" style={{ background: '#e4f0dc' }}>
                <div
                    className="h-full rounded-[6px] transition-all duration-300"
                    style={{ width: `${percent}%`, background: 'var(--color-primary)' }}
                />
            </div>
        </div>
    );
};
