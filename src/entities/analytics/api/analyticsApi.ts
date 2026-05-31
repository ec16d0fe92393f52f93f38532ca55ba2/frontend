import mainApi from '@shared/api/mainApi';

import type { MonthlyAnalyticsEntry, CategoryExpenseEntry } from '../types';

export const analyticsApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getMonthlyAnalytics: build.query<MonthlyAnalyticsEntry[], number | void>({
            query: (months = 6) => ({ url: '/analytics/monthly', params: { months } }),
            providesTags: ['Analytics'],
        }),
        getExpensesByCategory: build.query<CategoryExpenseEntry[], void>({
            query: () => '/analytics/expenses/by-category',
            providesTags: ['Analytics'],
        }),
    }),
});

export const { useGetMonthlyAnalyticsQuery, useGetExpensesByCategoryQuery } = analyticsApi;
