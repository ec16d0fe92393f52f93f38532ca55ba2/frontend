import { TreeHero } from '@widgets/tree-hero';
import { ChallengesSection } from '@widgets/challenges-section';
import { AchievementsSection } from '@widgets/achievements-section';

import { selectTree } from '@entities/tree';
import { selectChallenges } from '@entities/challenge';

import { Card, Text } from '@shared/ui';
import { useAppSelector } from '@shared/hooks';

export const ChallengesPage = () => {
    const tree = useAppSelector(selectTree);
    const challenges = useAppSelector(selectChallenges);

    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
                <span className="text-xl">🌱</span>
                <Text style={{ fontWeight: 700, fontSize: '1.1rem' }}>Задания и Достижения</Text>
            </div>

            <Card shadow padding="md">
                <TreeHero tree={tree} />
                <div className="mt-3 p-3 rounded-[var(--radius-md)] border border-[var(--color-border)] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-base">
                        🌿
                    </div>
                    <div>
                        <Text size="xs" variant="secondary">Следующая награда</Text>
                        <Text size="sm" style={{ fontWeight: 600 }}>Награда Уровня {tree.level + 1}</Text>
                    </div>
                    <div className="ml-auto text-2xl">🎁</div>
                </div>
            </Card>

            <ChallengesSection
                daily={challenges.daily}
                weekly={challenges.weekly}
                resetHours={challenges.resetHours}
                resetMinutes={challenges.resetMinutes}
            />

            <AchievementsSection
                achievements={challenges.achievements}
                streakDays={challenges.streakDays}
            />
        </div>
    );
};
