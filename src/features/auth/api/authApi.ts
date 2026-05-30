import mainApi from '@shared/api/mainApi';

import { AuthResponse } from '../types/auth';
import { LoginRequest } from '../types/login';
import { RegisterRequest } from '../types/register';

export const authApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<AuthResponse, LoginRequest>({
            query: (data) => ({
                url: `/authapp/login`,
                method: 'POST',
                body: data,
            }),
        }),
        register: build.mutation<AuthResponse, RegisterRequest>({
            query: (data) => ({
                url: `/authapp/register`,
                method: 'POST',
                body: data,
            }),
        }),
        logout: build.mutation<null, void>({
            query: () => ({
                url: `/authapp/logout`,
                method: 'POST',
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApi;
