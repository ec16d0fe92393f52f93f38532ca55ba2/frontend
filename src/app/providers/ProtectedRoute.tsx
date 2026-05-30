import { Navigate, Outlet } from 'react-router-dom';

import { selectUser } from '@entities/user';

import { useAppSelector } from '@shared/hooks/useAppSelector';

export const ProtectedRoute = ({ redirectTo = '/auth/login' }: { redirectTo?: string }) => {
    const user = useAppSelector(selectUser);
    return user ? <Outlet /> : <Navigate to={redirectTo} replace />;
};
