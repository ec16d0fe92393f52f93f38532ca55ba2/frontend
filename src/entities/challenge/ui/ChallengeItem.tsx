import clsx from 'clsx';
import { Check, ChevronRight } from 'lucide-react';

import { Icon, Text, ProgressBar } from '@shared/ui';

import type { Challenge } from '../types/challenge';

interface ChallengeItemProps {
    challenge: Challenge;
}

export const ChallengeItem = ({ challenge }: ChallengeItemProps) => {
    const isCompleted = challenge.status === 'completed';
    const percent = Math.round((challenge.progress / challenge.total) * 100);

    return (
        <div className="flex items-center gap-3 py-3">
            <div
                className={clsx(
                    'w-10 h-10 rounded-full flex items-center justify-center shrink-0',
                    isCompleted ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-primary-light)]',
                )}
            >
                {isCompleted
                    ? <Icon as={Check} size={18} color="white" />
                    : <span className="text-base">📋</span>
                }
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                    <Text size="sm" style={{ fontWeight: 600 }}>{challenge.title}</Text>
                    <div className="flex items-center gap-1 shrink-0">
                        <Text size="sm" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
                            +{challenge.reward}
                        </Text>
                        <span className="text-sm">🌿</span>
                        {!isCompleted && <Icon as={ChevronRight} size={14} color="var(--color-text-muted)" />}
                    </div>
                </div>
                <Text size="xs" variant="secondary">{challenge.description}</Text>
                <div className="flex items-center gap-2 mt-1.5">
                    <ProgressBar value={percent} className="flex-1 h-1.5" />
                    <Text size="xs" variant="muted">
                        {challenge.progress} / {challenge.total}
                    </Text>
                </div>
            </div>
        </div>
    );
};
