import { TreeHero } from '@widgets/tree-hero';
import { SavingsGoals } from '@widgets/savings-goals';

import { Button, Card, Text } from '@shared/ui';
import { MOCK_TREE, MOCK_GOALS, MOCK_MONTHLY_PLAN, MOCK_TREE_LEAVES, MOCK_LEAVES_TO_NEXT } from '@shared/mocks';

const treeSavingsLevel = {
    ...MOCK_TREE,
    level: 3,
    label: 'Растёт',
    xp: MOCK_TREE_LEAVES,
    xpToNext: MOCK_TREE_LEAVES + MOCK_LEAVES_TO_NEXT,
    xpTotal: MOCK_TREE_LEAVES,
};

export const ProgressPage = () => {
    return (
        <div className="flex flex-col gap-5">
            {/* Header */}
            <div>
                <div className="flex items-center gap-2">
                    <span className="text-xl">🌱</span>
                    <Text style={{ fontWeight: 700, fontSize: '1.1rem' }}>Цели сбережений</Text>
                </div>
                <Text size="xs" variant="secondary">Каждая достигнутая цель растит ваше дерево.</Text>
            </div>

            {/* Tree with leaves */}
            <Card shadow padding="md">
                <TreeHero tree={treeSavingsLevel} />
                <div className="mt-2 flex items-baseline gap-1">
                    <Text style={{ fontWeight: 800, fontSize: '1.4rem' }}>{MOCK_TREE_LEAVES}</Text>
                    <span className="text-base">🌿</span>
                    <Text size="xs" variant="secondary">Всего листьев</Text>
                    <Text size="xs" variant="secondary" className="ml-auto">
                        Ещё {MOCK_LEAVES_TO_NEXT} до след. уровня
                    </Text>
                </div>
            </Card>

            {/* Savings goals */}
            <SavingsGoals goals={MOCK_GOALS} monthlyPlan={MOCK_MONTHLY_PLAN} />

            {/* CTA */}
            <Button variant="primary" size="lg" className="w-full">
                🌿 Сохранить больше
            </Button>
        </div>
    );
};
