import { AchievementBadge } from '@entities/challenge';
import type { Achievement } from '@entities/challenge';

import { Card, Text } from '@shared/ui';

interface AchievementsSectionProps {
    achievements: Achievement[];
    streakDays: number;
}

export const AchievementsSection = ({ achievements, streakDays }: AchievementsSectionProps) => {
    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-base">🏅</span>
                    <Text style={{ fontWeight: 700 }}>Ваши достижения</Text>
                </div>
                <Text size="xs" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                    Все
                </Text>
            </div>
            <Card shadow>
                <div className="flex items-start gap-4 overflow-x-auto pb-1">
                    {achievements.map((a) => (
                        <AchievementBadge key={a.id} achievement={a} />
                    ))}
                    <div className="flex flex-col items-center gap-1.5 w-16 shrink-0">
                        <div className="w-14 h-14 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center">
                            <span className="text-xl">🔥</span>
                        </div>
                        <Text size="xs" style={{ fontWeight: 600 }} className="text-center">
                            {streakDays}
                        </Text>
                        <Text size="xs" variant="muted" className="text-center">
                            Дней подряд
                        </Text>
                    </div>
                </div>
            </Card>
        </div>
    );
};
