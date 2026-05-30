import { createBrowserRouter, redirect } from 'react-router-dom';
import {
    LoginPage, RegisterPage,
    HomePage, ProfilePage, DreamPage, CameraPage, ChatPage,
    LearnPage, ChallengesPage,
    AnalyticsPage, SettingsPage, MarketPage,
    ExpenseEntryPage, IncomeEntryPage,
} from '@pages';

import { AppLayout } from '@widgets/app-layout';

import { ProtectedRoute } from './ProtectedRoute';
import { PublicOnlyRoute } from './PublicOnlyRoute';

export const router = createBrowserRouter([
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <AppLayout />,
                children: [
                    { index: true, element: <HomePage /> },
                    { path: '/dream', element: <DreamPage /> },
                    { path: '/camera', element: <CameraPage /> },
                    { path: '/chat', element: <ChatPage /> },
                    { path: '/profile', element: <ProfilePage /> },
                    { path: '/learn', element: <LearnPage /> },
                    { path: '/challenges', element: <ChallengesPage /> },
                    { path: '/analytics', element: <AnalyticsPage /> },
                    { path: '/settings', element: <SettingsPage /> },
                    { path: '/market', element: <MarketPage /> },
                    { path: '/expense', element: <ExpenseEntryPage /> },
                    { path: '/income', element: <IncomeEntryPage /> },
                ],
            },
        ],
    },
    {
        element: <PublicOnlyRoute />,
        children: [
            {
                path: '/auth',
                children: [
                    { index: true, loader: async () => redirect('/auth/login') },
                    { path: 'login', element: <LoginPage /> },
                    { path: 'register', element: <RegisterPage /> },
                ],
            },
        ],
    },
]);
