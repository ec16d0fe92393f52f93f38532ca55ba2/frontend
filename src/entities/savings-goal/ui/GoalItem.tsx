import { ChevronRight } from 'lucide-react';

import { Icon, Text, ProgressBar } from '@shared/ui';

import type { SavingsGoal } from '../types/savingsGoal';

interface GoalItemProps {
    goal: SavingsGoal;
}

export const GoalItem = ({ goal }: GoalItemProps) => {
    const percent = Math.round((goal.current / goal.target) * 100);

    return (
        <div className="flex items-center gap-3 p-4 rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)]">
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-xl shrink-0">
                {goal.icon}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                    <Text size="sm" style={{ fontWeight: 600 }}>{goal.title}</Text>
                    <Icon as={ChevronRight} size={16} color="var(--color-text-muted)" />
                </div>
                <div className="flex items-center justify-between mt-0.5">
                    <Text size="xs" variant="secondary">
                        {goal.current.toLocaleString('ru-RU')} ₽ / {goal.target.toLocaleString('ru-RU')} ₽
                    </Text>
                    <Text size="xs" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                        {percent}%
                    </Text>
                </div>
                <ProgressBar value={percent} className="mt-1.5" />
            </div>
        </div>
    );
};
