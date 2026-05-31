import mainApi from '@shared/api/mainApi';

import { setLessons } from '../model/lessonsSlice';
import type { Lesson } from '../types';

export const lessonApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getLessons: build.query<Lesson[], void>({
            query: () => '/lessons',
            providesTags: ['Lesson'],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setLessons(data));
            },
        }),
        getCurrentLesson: build.query<Lesson, void>({
            query: () => '/lessons/current',
            providesTags: ['Lesson'],
        }),
        completeLesson: build.mutation<void, string>({
            query: (lessonId) => ({
                url: `/lessons/${lessonId}/complete`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Lesson', 'Tree'],
        }),
    }),
});

export const {
    useGetLessonsQuery,
    useGetCurrentLessonQuery,
    useCompleteLessonMutation,
} = lessonApi;
