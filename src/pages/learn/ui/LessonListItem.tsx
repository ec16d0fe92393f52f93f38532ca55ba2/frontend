import type { Lesson } from '@entities/lesson';

interface LessonListItemProps {
    lesson: Lesson;
}

const CheckIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
        <polyline points="20,6 9,17 4,12" />
    </svg>
);

const LockIcon = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#c8dfc0" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

export const LessonListItem = ({ lesson }: LessonListItemProps) => {
    const isDone = lesson.status === 'completed';
    const isCurrent = lesson.status === 'in-progress';
    const isLocked = lesson.status === 'locked';

    return (
        <div className={`${!isLocked ? 'card-interactive' : ''} rounded-[16px] p-[12px_14px] border flex items-center gap-3`}
            style={{
                background: isCurrent ? 'var(--color-surface-alt)' : 'var(--color-surface)',
                borderColor: isCurrent ? 'var(--color-primary)' : 'var(--color-border)',
                borderWidth: isCurrent ? '1.5px' : '1px',
                opacity: isLocked ? 0.55 : 1,
            }}>
            <div className="w-[38px] h-[38px] rounded-[12px] flex items-center justify-center shrink-0"
                style={{
                    background: isDone ? 'var(--color-primary)' : isCurrent ? 'var(--color-surface)' : '#f0f5ee',
                    border: isCurrent ? '2px solid var(--color-primary)' : isDone ? 'none' : '1px solid #e0ecda',
                }}>
                {isDone && <CheckIcon />}
                {isCurrent && <span className="text-[13px] font-bold" style={{ color: 'var(--color-primary)' }}>{lesson.number}</span>}
                {isLocked && <LockIcon />}
            </div>
            <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold"
                    style={{
                        color: isDone ? 'var(--color-text-muted)' : 'var(--color-text-primary)',
                        textDecoration: isDone ? 'line-through' : 'none',
                    }}>
                    Урок {lesson.number} · {lesson.title}
                </div>
                <div className="text-[11px] mt-[1px]" style={{ color: 'var(--color-text-faint)' }}>
                    {isCurrent ? `Сейчас · ${lesson.duration} мин` : lesson.subtitle}
                </div>
            </div>
            <span className="text-[11px] font-semibold shrink-0"
                style={{ color: isDone ? 'var(--color-primary)' : 'var(--color-text-faint)' }}>
                +{lesson.xp} XP
            </span>
        </div>
    );
};
