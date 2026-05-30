export type LessonStatus = 'completed' | 'in-progress' | 'locked';

export interface Lesson {
    id: string;
    number: number;
    title: string;
    description: string;
    xp: number;
    duration: number;
    status: LessonStatus;
}
