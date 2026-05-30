export type ChallengeStatus = 'completed' | 'pending';

export interface Challenge {
    id: string;
    title: string;
    description: string;
    progress: number;
    total: number;
    reward: number;
    status: ChallengeStatus;
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    unlocked: boolean;
}
