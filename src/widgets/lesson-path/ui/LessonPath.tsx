import { LessonCard } from '@entities/lesson';
import type { Lesson } from '@entities/lesson';

import { Card, Text } from '@shared/ui';

interface LessonPathProps {
    lessons: Lesson[];
    level: number;
    xpTotal: number;
    completedCount: number;
    totalCount: number;
}

export const LessonPath = ({ lessons, level, xpTotal, completedCount, totalCount }: LessonPathProps) => {
    return (
        <div className="flex flex-col gap-4">
            {/* Summary */}
            <Card shadow className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-2xl">
                    🌱
                </div>
                <div className="flex-1">
                    <Text size="xs" variant="secondary">Ваш прогресс</Text>
                    <Text style={{ fontWeight: 700, color: 'var(--color-primary)' }}>Уровень {level}</Text>
                    <Text size="xs" variant="secondary">Уверенный рост</Text>
                </div>
                <div className="text-right">
                    <Text style={{ fontWeight: 700 }}>{xpTotal.toLocaleString('ru-RU')} XP</Text>
                    <Text size="xs" variant="secondary">Всего</Text>
                </div>
                <div className="text-right">
                    <Text style={{ fontWeight: 700 }}>{completedCount}/{totalCount}</Text>
                    <Text size="xs" variant="secondary">Уроков</Text>
                </div>
            </Card>

            {/* Lesson list with branch decoration */}
            <div className="relative">
                <div
                    className="absolute left-[17px] top-4 bottom-4 w-0.5"
                    style={{ background: 'var(--color-border)' }}
                />
                <div className="flex flex-col gap-3">
                    {lessons.map((lesson) => (
                        <div key={lesson.id} className="flex gap-3">
                            <div className="shrink-0 w-9 flex justify-center pt-4">
                                <div
                                    className="w-3 h-3 rounded-full border-2 z-10"
                                    style={{
                                        borderColor: lesson.status === 'locked' ? 'var(--color-border)' : 'var(--color-primary)',
                                        background: lesson.status === 'completed' ? 'var(--color-primary)' : 'var(--color-surface)',
                                    }}
                                />
                            </div>
                            <div className="flex-1">
                                <LessonCard lesson={lesson} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Keep going footer */}
            <Card padding="sm" className="border border-[var(--color-border)]">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-xl">
                        🌱
                    </div>
                    <div className="flex-1">
                        <Text style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Продолжай!</Text>
                        <Text size="xs" variant="secondary">
                            Пройди ещё 5 уроков, чтобы открыть Уровень {level + 1}.
                        </Text>
                    </div>
                </div>
            </Card>
        </div>
    );
};
