import { ChevronRight } from 'lucide-react';

import type { Lesson } from '@entities/lesson';

import { Icon } from '@shared/ui';

interface CurrentLessonCardProps {
    lesson: Lesson;
}

export const CurrentLessonCard = ({ lesson }: CurrentLessonCardProps) => (
    <div className="card-interactive rounded-[18px] p-[14px_15px] border-[1.5px]"
        style={{ background: 'var(--color-surface-alt)', borderColor: 'var(--color-primary)' }}>
        <div className="flex items-center gap-3">
            <div className="w-[46px] h-[46px] rounded-[14px] flex items-center justify-center shrink-0"
                style={{ background: 'var(--color-primary)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            </div>
            <div className="flex-1 min-w-0">
                <div className="text-[13px] font-bold" style={{ color: 'var(--color-text-primary)' }}>
                    Урок {lesson.number} · {lesson.title}
                </div>
                <div className="text-[11px] mt-[2px]" style={{ color: '#6a9a6e' }}>{lesson.subtitle}</div>
                {lesson.progress !== undefined && (
                    <div className="rounded-[4px] h-[4px] mt-[7px] overflow-hidden" style={{ background: '#dff0d6' }}>
                        <div className="h-full rounded-[4px] transition-all duration-500"
                            style={{ width: `${lesson.progress}%`, background: 'var(--color-primary)' }} />
                    </div>
                )}
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'var(--color-primary)' }}>
                <Icon as={ChevronRight} size={13} color="#fff" />
            </div>
        </div>
    </div>
);
