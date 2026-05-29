import mainApi from '@shared/lib/store/api/mainApi.ts';
import { User } from '../interface';

export const userApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getMe: build.query<User, null>({
            query: () => ({
                url: `/user`,
                method: 'GET',
            }),
        }),
    }),
});
export const { useGetMeQuery } = userApi;