import mainApi from '@shared/api/mainApi';

import { AuthResponse } from '../types/auth';
import { LoginRequest } from '../types/login';
import { RegisterRequest } from '../types/register';

export const authApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<AuthResponse, LoginRequest>({
            query: (data) => ({
                url: `/auth/login/`,
                method: 'POST',
                body: data,
            }),
        }),
        register: build.mutation<AuthResponse, RegisterRequest>({
            query: (data) => ({
                url: `/auth/register/`,
                method: 'POST',
                body: data,
            }),
        }),
        logout: build.query<null, null>({
            query: () => ({
                url: `/auth/logout`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useLazyLogoutQuery } = authApi;
