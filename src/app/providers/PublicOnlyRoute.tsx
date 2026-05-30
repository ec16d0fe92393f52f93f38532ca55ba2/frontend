import { Navigate, Outlet } from 'react-router-dom';

import { selectUser } from '@entities/user';

import { useAppSelector } from '@shared/hooks/useAppSelector';

export const PublicOnlyRoute = ({ redirectTo = '/' }: { redirectTo?: string }) => {
    const user = useAppSelector(selectUser);
    return user ? <Navigate to={redirectTo} replace /> : <Outlet />;
};
