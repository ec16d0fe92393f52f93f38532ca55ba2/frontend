import mainApi from '@shared/api/mainApi';

import { setUser } from '../model/userSlice';
import { User } from '../types/user';

type UpdateMeRequest = Partial<Pick<User, 'firstname' | 'lastname' | 'email' | 'phone' | 'middlename'>>;

export const userApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getMe: build.query<User, null>({
            query: () => ({ url: `/authapp/me`, method: 'GET' }),
            providesTags: ['User'],
        }),
        updateMe: build.mutation<User, UpdateMeRequest>({
            query: (body) => ({ url: `/authapp/me`, method: 'PATCH', body }),
            invalidatesTags: ['User'],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setUser(data));
            },
        }),
    }),
});

export const { useGetMeQuery, useUpdateMeMutation } = userApi;
