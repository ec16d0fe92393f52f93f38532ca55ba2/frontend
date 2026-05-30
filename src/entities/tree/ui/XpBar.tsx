import { ProgressBar, Text } from '@shared/ui';

import type { TreeLevel } from '../types/tree';

interface XpBarProps {
    tree: TreeLevel;
}

export const XpBar = ({ tree }: XpBarProps) => {
    const percent = Math.round((tree.xp / tree.xpToNext) * 100);

    return (
        <div className="flex flex-col gap-1.5">
            <ProgressBar value={percent} />
            <div className="flex justify-between">
                <Text size="sm" variant="secondary">
                    {tree.xp.toLocaleString('ru-RU')} / {tree.xpToNext.toLocaleString('ru-RU')} XP
                </Text>
                <Text size="sm" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                    {percent}%
                </Text>
            </div>
        </div>
    );
};
