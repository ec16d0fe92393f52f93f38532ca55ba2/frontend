import clsx from 'clsx';

import { Spinner } from '../Spinner';

import { ButtonProps } from './Button.props';

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary:
        'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:opacity-90 active:opacity-80',
    secondary:
        'bg-[var(--color-primary-light)] text-[var(--color-primary)] hover:opacity-90 active:opacity-80',
    ghost:
        'bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] active:bg-[var(--color-primary-light)]',
    outline:
        'border border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary-light)] active:bg-[var(--color-primary-light)]',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'px-3 py-1.5 text-sm rounded-[var(--radius-sm)] min-h-[36px]',
    md: 'px-4 py-2.5 text-base rounded-[var(--radius-md)] min-h-[44px]',
    lg: 'px-6 py-3.5 text-lg rounded-[var(--radius-md)] min-h-[52px]',
};

export const Button = ({
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    className,
    disabled,
    ...rest
}: ButtonProps) => {
    return (
        <button
            {...rest}
            disabled={disabled || isLoading}
            className={clsx(
                'inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 select-none',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                variantClasses[variant],
                sizeClasses[size],
                className,
            )}
        >
            {isLoading ? (
                <Spinner size="sm" />
            ) : (
                leftIcon && <span className="shrink-0">{leftIcon}</span>
            )}
            {children}
            {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </button>
    );
};
