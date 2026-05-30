import { GoalItem } from '@entities/savings-goal';
import type { SavingsGoal, MonthlyPlan } from '@entities/savings-goal';

import { Card, Text, ProgressBar } from '@shared/ui';

interface SavingsGoalsProps {
    goals: SavingsGoal[];
    monthlyPlan: MonthlyPlan;
}

export const SavingsGoals = ({ goals, monthlyPlan }: SavingsGoalsProps) => {
    const monthPercent = Math.round((monthlyPlan.projected / monthlyPlan.target) * 100);

    return (
        <div className="flex flex-col gap-4">
            {/* Goals list */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <Text style={{ fontWeight: 700 }}>Ваши цели</Text>
                    <Text size="xs" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Управлять</Text>
                </div>
                <div className="flex flex-col gap-2">
                    {goals.map((goal) => (
                        <GoalItem key={goal.id} goal={goal} />
                    ))}
                </div>
            </div>

            {/* Monthly savings plan */}
            <Card shadow>
                <Text style={{ fontWeight: 700 }} className="mb-3">Месячный план сбережений</Text>
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-xl shrink-0">
                        📅
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between">
                            <div>
                                <Text size="xs" variant="secondary">Цель</Text>
                                <Text style={{ fontWeight: 700, color: 'var(--color-primary)' }}>
                                    {monthlyPlan.target.toLocaleString('ru-RU')} ₽
                                </Text>
                            </div>
                            <div className="text-right">
                                <Text size="xs" variant="secondary">Прогноз</Text>
                                <Text style={{ fontWeight: 700 }}>
                                    {monthlyPlan.projected.toLocaleString('ru-RU')} ₽
                                </Text>
                            </div>
                        </div>
                        <ProgressBar value={monthPercent} className="mt-2" />
                        <Text size="xs" variant="secondary" className="mt-1">
                            {monthPercent}% от месячной цели
                        </Text>
                    </div>
                </div>
            </Card>
        </div>
    );
};
