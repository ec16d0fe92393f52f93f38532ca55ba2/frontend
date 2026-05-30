import { Navigate, Outlet } from 'react-router-dom';

import { selectUser } from '@entities/user';

import { useAppSelector } from '@shared/hooks/useAppSelector';

export const ProtectedRoute = ({ redirectTo = '/auth/login' }: { redirectTo?: string }) => {
    const user = useAppSelector(selectUser);
    const hasToken = Boolean(localStorage.getItem('accessToken'));

    // Token present but user not yet loaded — AuthProvider is still fetching
    if (!user && hasToken) return null;

    return user ? <Outlet /> : <Navigate to={redirectTo} replace />;
};
