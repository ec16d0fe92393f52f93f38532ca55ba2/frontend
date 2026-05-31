import mainApi from '@shared/api/mainApi';

export interface Category {
    id: string;
    label: string;
    emoji: string;
}

export const categoryApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getExpenseCategories: build.query<Category[], void>({
            query: () => '/categories/expense',
        }),
        getIncomeCategories: build.query<Category[], void>({
            query: () => '/categories/income',
        }),
    }),
});

export const { useGetExpenseCategoriesQuery, useGetIncomeCategoriesQuery } = categoryApi;
