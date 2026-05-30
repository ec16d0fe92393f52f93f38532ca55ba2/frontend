import { createBrowserRouter, redirect } from 'react-router-dom';
import { LoginPage, RegisterPage, HomePage, LearnPage, ChallengesPage, ProgressPage, ProfilePage } from '@pages';

import { AppLayout } from '@widgets/app-layout';

import { PublicOnlyRoute } from './PublicOnlyRoute';

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/learn',
                element: <LearnPage />,
            },
            {
                path: '/challenges',
                element: <ChallengesPage />,
            },
            {
                path: '/progress',
                element: <ProgressPage />,
            },
            {
                path: '/profile',
                element: <ProfilePage />,
            },
        ],
    },
    {
        element: <PublicOnlyRoute />,
        children: [
            {
                path: '/auth',
                children: [
                    {
                        index: true,
                        loader: async () => redirect('/auth/login'),
                    },
                    {
                        path: 'login',
                        element: <LoginPage />,
                    },
                    {
                        path: 'register',
                        element: <RegisterPage />,
                    },
                ],
            },
        ],
    },
]);
