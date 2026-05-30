import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useLoginMutation } from '../api/authApi';
import { LoginRequest } from '../types/login';

export const useLogin = () => {
    const [loginTrigger, { data, error, isLoading }] = useLoginMutation();
    const navigate = useNavigate();

    const trigger = async (data: LoginRequest) => {
        await loginTrigger(data);
    };

    useEffect(() => {
        if (data) {
            const token = data.accessToken.startsWith('Bearer ')
                ? data.accessToken.split(' ')[1]
                : data.accessToken;
            localStorage.setItem('accessToken', token);
            toast.success('Вы успешно вошли');
            setTimeout(() => navigate('/'), 1500);
        }
        if (error && 'data' in error) {
            const message = (error.data as { message?: string })?.message ?? 'Ошибка входа';
            toast.error(message);
        }
    }, [data, error, navigate]);

    return { trigger, data, isLoading };
};
