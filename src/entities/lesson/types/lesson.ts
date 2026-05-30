export type LessonStatus = 'completed' | 'in-progress' | 'locked';

export interface Lesson {
    id: string;
    number: number;
    title: string;
    subtitle: string;
    description: string;
    xp: number;
    duration: number;
    status: LessonStatus;
    progress?: number;
}
