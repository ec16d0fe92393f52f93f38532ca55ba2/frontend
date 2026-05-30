export interface SavingsGoal {
    id: string;
    title: string;
    description: string;
    icon: string;
    current: number;
    target: number;
}

export interface MonthlyPlan {
    target: number;
    projected: number;
}
