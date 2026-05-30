import { useEffect } from 'react';

import { useAppDispatch } from '@shared/hooks/useAppDispatch';

import { useGetMeQuery } from '../api/userApi';
import { setUser } from '../model/userSlice';

export const useGetMe = () => {
    const { data } = useGetMeQuery(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data) {
            dispatch(setUser(data));
        }
    }, [data, dispatch]);

    return data;
};
