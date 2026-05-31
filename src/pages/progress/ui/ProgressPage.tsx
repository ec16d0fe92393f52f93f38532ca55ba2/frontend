import { TreeHero } from '@widgets/tree-hero';
import { SavingsGoals } from '@widgets/savings-goals';

import { useGetBudgetQuery, useGetBudgetGoalsQuery } from '@entities/budget';
import { useGetUserTreeQuery } from '@entities/tree';

import { Button, Card, Text } from '@shared/ui';

export const ProgressPage = () => {
    const { data: budget } = useGetBudgetQuery();
    const { data: savingsGoals = [] } = useGetBudgetGoalsQuery();
    const { data: tree } = useGetUserTreeQuery();

    const treeLeaves = budget?.treeLeaves ?? 0;
    const leavesToNext = budget?.leavesToNext ?? 0;
    const monthlyPlan = budget?.monthlyPlan ?? { target: 0, projected: 0 };

    const treeSavingsLevel = tree ? {
        ...tree,
        label: 'Растёт',
        xp: treeLeaves,
        xpToNext: treeLeaves + leavesToNext,
        xpTotal: treeLeaves,
    } : {
        level: 1,
        label: 'Растёт',
        xp: treeLeaves,
        xpToNext: treeLeaves + leavesToNext,
        xpTotal: treeLeaves,
        growthPoints: 0,
        financialScore: 0,
    };

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
                    <Text style={{ fontWeight: 800, fontSize: '1.4rem' }}>{treeLeaves}</Text>
                    <span className="text-base">🌿</span>
                    <Text size="xs" variant="secondary">Всего листьев</Text>
                    <Text size="xs" variant="secondary" className="ml-auto">
                        Ещё {leavesToNext} до след. уровня
                    </Text>
                </div>
            </Card>

            {/* Savings goals */}
            <SavingsGoals goals={savingsGoals} monthlyPlan={monthlyPlan} />

            {/* CTA */}
            <Button variant="primary" size="lg" className="w-full">
                🌿 Сохранить больше
            </Button>
        </div>
    );
};
