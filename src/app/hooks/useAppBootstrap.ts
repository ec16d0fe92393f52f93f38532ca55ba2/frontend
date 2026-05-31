import { useGetBalanceQuery } from '@entities/balance';
import { useGetTransactionsQuery } from '@entities/transaction';
import { useGetGoalsQuery } from '@entities/goal';
import { useGetUserTreeQuery, useGetUserSkillsQuery, useGetXpHistoryQuery } from '@entities/tree';
import { useGetLessonsQuery } from '@entities/lesson';
import { useGetDailyChallengesQuery, useGetWeeklyChallengeQuery, useGetAchievementsQuery, useGetChallengeStreakQuery } from '@entities/challenge';
import { useGetMarketItemsQuery, useGetPlayerCurrencyQuery } from '@entities/market';
import { useGetMonthlyAnalyticsQuery, useGetExpensesByCategoryQuery } from '@entities/analytics';

export const useAppBootstrap = (skip: boolean) => {
    useGetBalanceQuery(undefined, { skip });
    useGetTransactionsQuery(undefined, { skip });
    useGetGoalsQuery(undefined, { skip });
    useGetUserTreeQuery(undefined, { skip });
    useGetUserSkillsQuery(undefined, { skip });
    useGetXpHistoryQuery(undefined, { skip });
    useGetLessonsQuery(undefined, { skip });
    useGetDailyChallengesQuery(undefined, { skip });
    useGetWeeklyChallengeQuery(undefined, { skip });
    useGetAchievementsQuery(undefined, { skip });
    useGetChallengeStreakQuery(undefined, { skip });
    useGetMarketItemsQuery(undefined, { skip });
    useGetPlayerCurrencyQuery(undefined, { skip });
    useGetMonthlyAnalyticsQuery(undefined, { skip });
    useGetExpensesByCategoryQuery(undefined, { skip });
};
