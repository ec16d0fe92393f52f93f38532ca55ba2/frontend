export interface MonthlyAnalyticsEntry {
    month: string;
    income: number;
    expense: number;
}

export interface CategoryExpenseEntry {
    category: string;
    label: string;
    amount: number;
    percentage: number;
}
