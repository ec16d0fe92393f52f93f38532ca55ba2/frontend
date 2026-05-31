import { ReactNode, useEffect } from 'react';

import { removeUser, setUser, useGetMeQuery } from '@entities/user';

import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { Spinner } from '@shared/ui/Spinner';

import { useAppBootstrap } from '../hooks/useAppBootstrap';

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const hasToken = Boolean(localStorage.getItem('accessToken'));
    const { data, isError, isLoading, isUninitialized } = useGetMeQuery(null, { skip: !hasToken });
    const dispatch = useAppDispatch();
    const isAuthenticated = Boolean(data);
    useAppBootstrap(!isAuthenticated);

    useEffect(() => {
        if (data) {
            dispatch(setUser(data));
        }
        if (isError) {
            dispatch(removeUser());
            localStorage.removeItem('accessToken');
        }
    }, [data, isError, dispatch]);

    if (hasToken && (isLoading || isUninitialized)) {
        return (
            <div className="flex h-screen items-center justify-center bg-[var(--color-bg)]">
                <Spinner size="lg" className="text-[var(--color-primary)]" />
            </div>
        );
    }

    return <>{children}</>;
};
