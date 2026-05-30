import { ChallengeItem } from '@entities/challenge';
import type { Challenge } from '@entities/challenge';

import { Card, Text, ProgressBar } from '@shared/ui';

interface ChallengesSectionProps {
    daily: Challenge[];
    weekly: Challenge;
    resetHours: number;
    resetMinutes: number;
}

export const ChallengesSection = ({ daily, weekly, resetHours, resetMinutes }: ChallengesSectionProps) => {
    return (
        <div className="flex flex-col gap-4">
            {/* Daily challenges */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <span className="text-base">📅</span>
                        <Text style={{ fontWeight: 700 }}>Ежедневные задания</Text>
                    </div>
                    <Text size="xs" variant="muted">
                        Сброс через {resetHours}ч {resetMinutes}м
                    </Text>
                </div>
                <Card shadow className="divide-y divide-[var(--color-border)]">
                    {daily.map((ch) => (
                        <ChallengeItem key={ch.id} challenge={ch} />
                    ))}
                </Card>
            </div>

            {/* Weekly challenge */}
            <Card padding="md" shadow className="border border-[var(--color-primary-light)]">
                <Text size="xs" style={{ color: 'var(--color-primary)', fontWeight: 600 }} className="mb-1">
                    Недельное задание
                </Text>
                <div className="flex items-center justify-between gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                        <span className="text-lg">🏆</span>
                    </div>
                    <div className="flex-1">
                        <Text style={{ fontWeight: 700 }}>{weekly.title}</Text>
                        <Text size="xs" variant="secondary">{weekly.description}</Text>
                        <ProgressBar value={Math.round((weekly.progress / weekly.total) * 100)} className="mt-2" />
                        <Text size="xs" variant="secondary" className="mt-1">
                            {weekly.progress.toLocaleString('ru-RU')} ₽ / {weekly.total.toLocaleString('ru-RU')} ₽
                        </Text>
                    </div>
                    <div className="text-right shrink-0">
                        <Text style={{ fontWeight: 700, color: 'var(--color-primary)' }}>+{weekly.reward}</Text>
                        <span className="text-sm">🌿</span>
                    </div>
                </div>
            </Card>
        </div>
    );
};
