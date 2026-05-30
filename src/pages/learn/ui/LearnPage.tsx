import { MOCK_LESSONS } from '@shared/mocks';

import { LearnHeader } from './LearnHeader';
import { OverallProgressCard } from './OverallProgressCard';
import { CurrentLessonCard } from './CurrentLessonCard';
import { LessonListItem } from './LessonListItem';
import { MotivationalFooter } from './MotivationalFooter';

const currentLesson = MOCK_LESSONS.find((l) => l.status === 'in-progress');

export const LearnPage = () => (
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
                {MOCK_LESSONS.map((lesson) => (
                    <LessonListItem key={lesson.id} lesson={lesson} />
                ))}
            </div>
        </div>

        <MotivationalFooter />
    </div>
);
