import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { FloatingInput, Button } from '@shared/ui';

import { useLogin } from '../../hooks/useLogin';
import { LoginRequest } from '../../types/login';

export const LoginForm = () => {
    const { trigger, isLoading } = useLogin();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginRequest>();

    return (
        <form onSubmit={handleSubmit(trigger)} className="flex flex-col gap-4 w-full">
            <FloatingInput
                label="Email"
                type="email"
                error={errors.email?.message}
                {...register('email', {
                    required: 'Введите email',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Некорректный email' },
                })}
            />
            <FloatingInput
                label="Пароль"
                type="password"
                error={errors.password?.message}
                {...register('password', { required: 'Введите пароль' })}
            />
            <Button type="submit" variant="primary" size="lg" isLoading={isLoading} className="w-full mt-1">
                Войти
            </Button>
            <p className="text-center text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Нет аккаунта?{' '}
                <Link to="/auth/register" className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                    Зарегистрироваться
                </Link>
            </p>
        </form>
    );
};
