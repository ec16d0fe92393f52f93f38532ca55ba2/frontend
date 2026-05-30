import mainApi from '@shared/api/mainApi';

import { User } from '../types/user';

export const userApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getMe: build.query<User, null>({
            query: () => ({
                url: `/user`,
                method: 'GET',
            }),
            providesTags: ['User'],
        }),
    }),
});

export const { useGetMeQuery } = userApi;
