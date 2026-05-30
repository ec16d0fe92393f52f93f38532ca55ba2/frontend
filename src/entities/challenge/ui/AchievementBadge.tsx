import clsx from 'clsx';

import { Text } from '@shared/ui';

import type { Achievement } from '../types/challenge';

interface AchievementBadgeProps {
    achievement: Achievement;
}

export const AchievementBadge = ({ achievement }: AchievementBadgeProps) => {
    return (
        <div className="flex flex-col items-center gap-1.5 w-16">
            <div
                className={clsx(
                    'w-14 h-14 rounded-full flex items-center justify-center text-2xl',
                    achievement.unlocked
                        ? 'bg-[var(--color-primary-light)]'
                        : 'bg-[var(--color-border)] grayscale',
                )}
            >
                {achievement.unlocked ? '🏆' : '🔒'}
            </div>
            <Text size="xs" variant={achievement.unlocked ? 'primary' : 'muted'} className="text-center leading-tight">
                {achievement.title}
            </Text>
            <Text size="xs" variant="muted" className="text-center leading-tight">
                {achievement.description}
            </Text>
        </div>
    );
};
