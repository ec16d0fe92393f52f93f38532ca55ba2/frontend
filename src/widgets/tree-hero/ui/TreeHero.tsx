import { TreeDisplay, XpBar } from '@entities/tree';
import type { TreeLevel } from '@entities/tree';

import { Text } from '@shared/ui';

interface TreeHeroProps {
    tree: TreeLevel;
    title?: string;
}

export const TreeHero = ({ tree, title = 'Ваше денежное дерево' }: TreeHeroProps) => {
    return (
        <div className="relative">
            <div className="flex items-center justify-between mb-1">
                <div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-base">🌱</span>
                        <Text style={{ fontWeight: 700, fontSize: '1.1rem' }}>{title}</Text>
                    </div>
                    <Text size="sm" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                        Уровень {tree.level} · {tree.label}
                    </Text>
                </div>

                <div
                    className="flex flex-col items-center justify-center w-16 h-16 rounded-[var(--radius-md)] text-center"
                    style={{ background: 'var(--color-primary-light)' }}
                >
                    <span className="text-base">🌿</span>
                    <Text style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary)' }}>
                        {tree.growthPoints}
                    </Text>
                    <Text size="xs" variant="secondary">Очков</Text>
                </div>
            </div>

            <TreeDisplay />

            <div className="mt-2 flex items-center gap-3">
                <div>
                    <Text size="xs" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                        Уровень {tree.level}
                    </Text>
                    <Text size="sm" style={{ fontWeight: 700 }}>
                        {tree.xpTotal.toLocaleString('ru-RU')} XP
                    </Text>
                    <Text size="xs" variant="secondary">до Уровня {tree.level + 1}</Text>
                </div>
                <div className="flex-1">
                    <XpBar tree={tree} />
                </div>
            </div>
        </div>
    );
};
