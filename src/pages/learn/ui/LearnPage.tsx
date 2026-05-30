import { BookOpen } from 'lucide-react';

import { LessonPath } from '@widgets/lesson-path';

import { Text, Icon } from '@shared/ui';
import { MOCK_LESSONS, MOCK_LESSONS_TOTAL, MOCK_LESSONS_COMPLETED, MOCK_TREE } from '@shared/mocks';

export const LearnPage = () => {
    return (
        <div className="flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <Icon as={BookOpen} size={20} color="var(--color-primary)" />
                        <Text style={{ fontWeight: 700, fontSize: '1.1rem' }}>Учись и Расти</Text>
                    </div>
                    <Text size="xs" variant="secondary">Строй знания. Расти к будущему.</Text>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ background: 'var(--color-primary-light)' }}>
                    <span className="text-sm">🌱</span>
                    <Text size="xs" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>120 XP</Text>
                </div>
            </div>

            <LessonPath
                lessons={MOCK_LESSONS}
                level={MOCK_TREE.level}
                xpTotal={MOCK_TREE.xpTotal}
                completedCount={MOCK_LESSONS_COMPLETED}
                totalCount={MOCK_LESSONS_TOTAL}
            />
        </div>
    );
};
