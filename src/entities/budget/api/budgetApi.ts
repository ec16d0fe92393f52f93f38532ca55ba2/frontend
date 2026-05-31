import mainApi from '@shared/api/mainApi';

export interface BudgetData {
    monthlyLimit: number;
    monthlyPlan: { target: number; projected: number };
    treeLeaves: number;
    leavesToNext: number;
}

export interface SavingsGoal {
    id: string;
    title: string;
    description: string;
    icon: string;
    current: number;
    target: number;
}

interface BudgetLimitUpdate {
    monthlyLimit: number;
}

interface SavingsGoalCreate {
    title: string;
    target: number;
    description?: string;
    icon?: string;
}

export const budgetApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getBudget: build.query<BudgetData, void>({
            query: () => '/budget',
            providesTags: ['Budget'],
        }),
        updateBudgetLimit: build.mutation<void, BudgetLimitUpdate>({
            query: (body) => ({
                url: '/budget/limit',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Budget'],
        }),
        getBudgetGoals: build.query<SavingsGoal[], void>({
            query: () => '/budget/goals',
            providesTags: ['Budget'],
        }),
        createBudgetGoal: build.mutation<SavingsGoal, SavingsGoalCreate>({
            query: (body) => ({
                url: '/budget/goals',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Budget'],
        }),
    }),
});

export const {
    useGetBudgetQuery,
    useUpdateBudgetLimitMutation,
    useGetBudgetGoalsQuery,
    useCreateBudgetGoalMutation,
} = budgetApi;
