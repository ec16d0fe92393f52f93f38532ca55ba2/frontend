import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { FloatingInput, Button, PhoneInput } from '@shared/ui';

import { useRegister } from '../../hooks/useRegister';
import { RegisterRequest } from '../../types/register';

export const RegisterForm = () => {
    const { trigger, isLoading } = useRegister();
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm<RegisterRequest>();
    const password = watch('password');

    return (
        <form onSubmit={handleSubmit(trigger)} className="flex flex-col gap-3 w-full">
            <FloatingInput
                label="Email"
                type="email"
                error={errors.email?.message}
                {...register('email', {
                    required: 'Введите email',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Некорректный email' },
                })}
            />
            <Controller
                name="phone"
                control={control}
                rules={{ required: 'Введите телефон', minLength: { value: 18, message: 'Введите полный номер' } }}
                render={({ field }) => (
                    <PhoneInput
                        label="Телефон"
                        error={errors.phone?.message}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        name={field.name}
                    />
                )}
            />
            <FloatingInput
                label="Имя"
                error={errors.firstname?.message}
                {...register('firstname', { required: 'Введите имя' })}
            />
            <FloatingInput
                label="Отчество"
                error={errors.middlename?.message}
                {...register('middlename')}
            />
            <FloatingInput
                label="Фамилия"
                error={errors.lastname?.message}
                {...register('lastname', { required: 'Введите фамилию' })}
            />
            <FloatingInput
                label="Пароль"
                type="password"
                error={errors.password?.message}
                {...register('password', { required: 'Введите пароль', minLength: { value: 6, message: 'Минимум 6 символов' } })}
            />
            <FloatingInput
                label="Повторите пароль"
                type="password"
                error={errors.repeatPassword?.message}
                {...register('repeatPassword', {
                    required: 'Повторите пароль',
                    validate: (v) => v === password || 'Пароли не совпадают',
                })}
            />
            <Button type="submit" variant="primary" size="lg" isLoading={isLoading} className="w-full mt-1">
                Зарегистрироваться
            </Button>
            <p className="text-center text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Уже есть аккаунт?{' '}
                <Link to="/auth/login" className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                    Войти
                </Link>
            </p>
        </form>
    );
};
