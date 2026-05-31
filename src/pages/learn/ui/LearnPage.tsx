import { selectLessons } from '@entities/lesson';

import { useAppSelector } from '@shared/hooks';

import { LearnHeader } from './LearnHeader';
import { OverallProgressCard } from './OverallProgressCard';
import { CurrentLessonCard } from './CurrentLessonCard';
import { LessonListItem } from './LessonListItem';
import { MotivationalFooter } from './MotivationalFooter';

export const LearnPage = () => {
    const { items } = useAppSelector(selectLessons);
    const currentLesson = items.find((l) => l.status === 'in-progress');

    return (
        <div className="flex flex-col gap-3 animate-fade-in-up">
            <LearnHeader />
            <OverallProgressCard />

            {currentLesson && (
                <div>
                    <div className="text-[11px] font-semibold tracking-[0.04em] mb-2 px-1"
                        style={{ color: 'var(--color-text-faint)' }}>ПРОДОЛЖИТЬ</div>
                    <CurrentLessonCard lesson={currentLesson} />
                </div>
            )}

            <div>
                <div className="text-[11px] font-semibold tracking-[0.04em] mb-2 px-1"
                    style={{ color: 'var(--color-text-faint)' }}>ВСЕ УРОКИ</div>
                <div className="flex flex-col gap-2">
                    {items.map((lesson) => (
                        <LessonListItem key={lesson.id} lesson={lesson} />
                    ))}
                </div>
            </div>

            <MotivationalFooter />
        </div>
    );
};
