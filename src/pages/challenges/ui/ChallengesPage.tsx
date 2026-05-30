import { TreeHero } from '@widgets/tree-hero';
import { ChallengesSection } from '@widgets/challenges-section';
import { AchievementsSection } from '@widgets/achievements-section';

import { Card, Text } from '@shared/ui';
import {
    MOCK_TREE,
    MOCK_DAILY_CHALLENGES,
    MOCK_WEEKLY_CHALLENGE,
    MOCK_ACHIEVEMENTS,
    RESET_HOURS,
    RESET_MINUTES,
    STREAK_DAYS,
} from '@shared/mocks';

export const ChallengesPage = () => {
    return (
        <div className="flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-center gap-2">
                <span className="text-xl">🌱</span>
                <Text style={{ fontWeight: 700, fontSize: '1.1rem' }}>Задания и Достижения</Text>
            </div>

            {/* Tree card */}
            <Card shadow padding="md">
                <TreeHero tree={MOCK_TREE} />
                <div className="mt-3 p-3 rounded-[var(--radius-md)] border border-[var(--color-border)] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-base">
                        🌿
                    </div>
                    <div>
                        <Text size="xs" variant="secondary">Следующая награда</Text>
                        <Text size="sm" style={{ fontWeight: 600 }}>Награда Уровня {MOCK_TREE.level + 1}</Text>
                    </div>
                    <div className="ml-auto text-2xl">🎁</div>
                </div>
            </Card>

            {/* Challenges */}
            <ChallengesSection
                daily={MOCK_DAILY_CHALLENGES}
                weekly={MOCK_WEEKLY_CHALLENGE}
                resetHours={RESET_HOURS}
                resetMinutes={RESET_MINUTES}
            />

            {/* Achievements */}
            <AchievementsSection
                achievements={MOCK_ACHIEVEMENTS}
                streakDays={STREAK_DAYS}
            />
        </div>
    );
};
