import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { userApi, setUser } from '@entities/user';

import { useAppDispatch } from '@shared/hooks/useAppDispatch';

import { useLoginMutation } from '../api/authApi';
import { LoginRequest } from '../types/login';

export const useLogin = () => {
    const [loginTrigger, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const trigger = async (credentials: LoginRequest) => {
        try {
            const result = await loginTrigger(credentials).unwrap();
            const rawToken = result.token;
            const token = rawToken.startsWith('Bearer ') ? rawToken.split(' ')[1] : rawToken;
            localStorage.setItem('accessToken', token);

            const meResult = await dispatch(userApi.endpoints.getMe.initiate(null));
            if (meResult.data) dispatch(setUser(meResult.data));

            toast.success('Вы успешно вошли');
            navigate('/');
        } catch (err) {
            const message = (err as { data?: { message?: string } })?.data?.message ?? 'Ошибка входа';
            toast.error(message);
        }
    };

    return { trigger, isLoading };
};
