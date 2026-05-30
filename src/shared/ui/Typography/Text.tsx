import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import { TextProps } from './Text.props';

const variantClasses: Record<NonNullable<TextProps['variant']>, string> = {
    primary: 'text-[var(--color-text-primary)]',
    secondary: 'text-[var(--color-text-secondary)]',
    muted: 'text-[var(--color-text-muted)]',
};

const sizeClasses: Record<NonNullable<TextProps['size']>, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
};

export const Text = ({ as: Tag = 'p', variant = 'primary', size = 'base', children, className, ...rest }: TextProps) => {
    return (
        <Tag
            {...(rest as HTMLAttributes<HTMLElement>)}
            className={clsx(variantClasses[variant], sizeClasses[size], className)}
        >
            {children}
        </Tag>
    );
};
