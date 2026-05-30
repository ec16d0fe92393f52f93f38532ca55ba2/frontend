import type { TreeLevel } from '@entities/tree';
import { XpBar } from '@entities/tree';

interface XpCardProps {
    tree: TreeLevel;
}

export const XpCard = ({ tree }: XpCardProps) => (
    <div className="rounded-[18px] p-[14px_16px] border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
        <div className="flex justify-between items-center mb-[10px]">
            <div className="flex items-center gap-[10px]">
                <div className="w-[38px] h-[38px] flex items-center justify-center relative shrink-0">
                    <svg width="38" height="38" viewBox="0 0 38 38">
                        <polygon points="19,2 34,10.5 34,27.5 19,36 4,27.5 4,10.5" fill="#89B776" />
                    </svg>
                    <svg style={{ position: 'absolute' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                        <path d="M12 22V14" /><path d="M12 14C12 10 8 7 4 8c0 4 2 7 8 6" /><path d="M12 14C12 10 16 7 20 8c0 4-2 7-8 6" />
                    </svg>
                </div>
                <div>
                    <div className="font-bold text-[14px]" style={{ color: 'var(--color-text-primary)' }}>
                        Дерево уровень {tree.level}
                    </div>
                    <div className="text-[12px] font-medium" style={{ color: 'var(--color-primary)' }}>{tree.label}</div>
                </div>
            </div>
            <div className="text-right">
                <div className="font-bold text-[16px]" style={{ color: 'var(--color-text-primary)' }}>
                    {tree.xpToNext} XP
                </div>
                <div className="text-[11px]" style={{ color: 'var(--color-text-faint)' }}>до след. уровня</div>
            </div>
        </div>
        <XpBar tree={tree} />
    </div>
);
