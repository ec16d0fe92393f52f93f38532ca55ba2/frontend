import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { userApi, setUser } from '@entities/user';

import { useAppDispatch } from '@shared/hooks/useAppDispatch';

import { useRegisterMutation } from '../api/authApi';
import { RegisterRequest } from '../types/register';

export const useRegister = () => {
    const [registerTrigger, { isLoading }] = useRegisterMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const trigger = async (credentials: RegisterRequest) => {
        try {
            const result = await registerTrigger(credentials).unwrap();
            const rawToken = result.token;
            const token = rawToken.startsWith('Bearer ') ? rawToken.split(' ')[1] : rawToken;
            localStorage.setItem('accessToken', token);

            const meResult = await dispatch(userApi.endpoints.getMe.initiate(null));
            if (meResult.data) dispatch(setUser(meResult.data));

            toast.success('Вы успешно зарегистрированы');
            navigate('/');
        } catch (err) {
            const message = (err as { data?: { message?: string } })?.data?.message ?? 'Ошибка регистрации';
            toast.error(message);
        }
    };

    return { trigger, isLoading };
};
