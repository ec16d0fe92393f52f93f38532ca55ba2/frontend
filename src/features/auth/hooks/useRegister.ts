import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useRegisterMutation } from '../api/authApi';
import { RegisterRequest } from '../types/register';

export const useRegister = () => {
    const [registerTrigger, { data, isLoading, error }] = useRegisterMutation();
    const navigate = useNavigate();

    const trigger = async (data: RegisterRequest) => {
        await registerTrigger(data);
    };

    useEffect(() => {
        if (data) {
            const token = data.accessToken.startsWith('Bearer ')
                ? data.accessToken.split(' ')[1]
                : data.accessToken;
            localStorage.setItem('accessToken', token);
            toast.success('Вы успешно зарегистрированы');
            setTimeout(() => navigate('/'), 1500);
        }
        if (error && 'data' in error) {
            const message = (error.data as { message?: string })?.message ?? 'Ошибка регистрации';
            toast.error(message);
        }
    }, [data, error, navigate]);

    return { trigger, data, isLoading };
};
