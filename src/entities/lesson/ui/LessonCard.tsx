import clsx from 'clsx';
import { Check, Lock, Clock } from 'lucide-react';

import { Icon, Text } from '@shared/ui';

import type { Lesson } from '../types/lesson';

interface LessonCardProps {
    lesson: Lesson;
}

export const LessonCard = ({ lesson }: LessonCardProps) => {
    const isCompleted = lesson.status === 'completed';
    const isInProgress = lesson.status === 'in-progress';
    const isLocked = lesson.status === 'locked';

    return (
        <div
            className={clsx(
                'flex items-center gap-3 p-4 rounded-[var(--radius-lg)] bg-[var(--color-surface)] border transition-all',
                isInProgress && 'border-[var(--color-primary)]',
                !isInProgress && 'border-[var(--color-border)]',
                isLocked && 'opacity-60',
            )}
        >
            <div
                className={clsx(
                    'w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-bold',
                    isCompleted && 'bg-[var(--color-primary)] text-white',
                    isInProgress && 'bg-[var(--color-primary-light)] text-[var(--color-primary)] border-2 border-[var(--color-primary)]',
                    isLocked && 'bg-[var(--color-border)] text-[var(--color-text-muted)]',
                )}
            >
                {isCompleted ? <Icon as={Check} size={16} /> : lesson.number}
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                    <Text size="sm" style={{ fontWeight: 600 }} className="truncate">
                        {lesson.title}
                    </Text>
                    {isInProgress && (
                        <span
                            className="shrink-0 text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}
                        >
                            В процессе
                        </span>
                    )}
                    {isCompleted && <Icon as={Check} size={16} color="var(--color-success)" />}
                    {isLocked && <Icon as={Lock} size={14} color="var(--color-text-muted)" />}
                </div>
                <Text size="xs" variant="secondary" className="mt-0.5 line-clamp-1">
                    {lesson.description}
                </Text>
                <div className="flex items-center gap-3 mt-1">
                    <Text size="xs" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                        +{lesson.xp} XP
                    </Text>
                    <div className="flex items-center gap-1">
                        <Icon as={Clock} size={12} color="var(--color-text-muted)" />
                        <Text size="xs" variant="muted">{lesson.duration} мин</Text>
                    </div>
                </div>
            </div>
        </div>
    );
};
