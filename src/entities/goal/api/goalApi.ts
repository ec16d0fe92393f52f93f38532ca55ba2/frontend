import mainApi from '@shared/api/mainApi';

import { setGoal, setMilestones } from '../model/goalSlice';
import type { Goal, Milestone } from '../model/goalSlice';

interface GoalCreate {
    title: string;
    target: number;
    deadline: string;
}

interface GoalUpdate {
    title?: string | null;
    current?: number | null;
    target?: number | null;
    deadline?: string | null;
}

interface MilestoneUpdate {
    status?: string | null;
    title?: string | null;
}

interface SubtaskUpdate {
    done: boolean;
}

export const goalApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getGoals: build.query<Goal[], void>({
            query: () => '/goals',
            providesTags: ['Goal'],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                if (data.length > 0) dispatch(setGoal(data[0]));
            },
        }),
        createGoal: build.mutation<Goal, GoalCreate>({
            query: (body) => ({ url: '/goals', method: 'POST', body }),
            invalidatesTags: ['Goal'],
        }),
        updateGoal: build.mutation<Goal, { goalId: string; body: GoalUpdate }>({
            query: ({ goalId, body }) => ({ url: `/goals/${goalId}`, method: 'PATCH', body }),
            invalidatesTags: ['Goal'],
        }),
        getGoalMilestones: build.query<Milestone[], string>({
            query: (goalId) => `/goals/${goalId}/milestones`,
            providesTags: ['Goal'],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setMilestones(data));
            },
        }),
        updateMilestone: build.mutation<void, { goalId: string; milestoneId: string; body: MilestoneUpdate }>({
            query: ({ goalId, milestoneId, body }) => ({
                url: `/goals/${goalId}/milestones/${milestoneId}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Goal'],
        }),
        toggleSubtaskApi: build.mutation<void, { goalId: string; milestoneId: string; subtaskId: string; body: SubtaskUpdate }>({
            query: ({ goalId, milestoneId, subtaskId, body }) => ({
                url: `/goals/${goalId}/milestones/${milestoneId}/subtasks/${subtaskId}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Goal'],
        }),
    }),
});

export const {
    useGetGoalsQuery,
    useCreateGoalMutation,
    useUpdateGoalMutation,
    useGetGoalMilestonesQuery,
    useUpdateMilestoneMutation,
    useToggleSubtaskApiMutation,
} = goalApi;
