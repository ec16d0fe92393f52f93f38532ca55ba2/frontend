import mainApi from '@shared/api/mainApi';

import { setDailyChallenges, setWeeklyChallenge, setAchievements, setStreakInfo } from '../model/challengesSlice';
import type { Challenge, Achievement } from '../types';

interface StreakResponse {
    streakDays: number;
    resetHours: number;
    resetMinutes: number;
}

export const challengeApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getDailyChallenges: build.query<Challenge[], void>({
            query: () => '/challenges/daily',
            providesTags: ['Challenge'],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setDailyChallenges(data));
            },
        }),
        getWeeklyChallenge: build.query<Challenge, void>({
            query: () => '/challenges/weekly',
            providesTags: ['Challenge'],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setWeeklyChallenge(data));
            },
        }),
        completeChallenge: build.mutation<void, string>({
            query: (challengeId) => ({
                url: `/challenges/${challengeId}/complete`,
                method: 'POST',
            }),
            invalidatesTags: ['Challenge', 'Tree'],
        }),
        getAchievements: build.query<Achievement[], void>({
            query: () => '/achievements',
            providesTags: ['Achievement'],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setAchievements(data));
            },
        }),
        getChallengeStreak: build.query<StreakResponse, void>({
            query: () => '/user/streak',
            providesTags: ['Challenge'],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setStreakInfo(data));
            },
        }),
    }),
});

export const {
    useGetDailyChallengesQuery,
    useGetWeeklyChallengeQuery,
    useCompleteChallengeMutation,
    useGetAchievementsQuery,
    useGetChallengeStreakQuery,
} = challengeApi;
