import clsx from 'clsx';

import { BadgeProps } from './Badge.props';

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
    primary: 'bg-[var(--color-primary-light)] text-[var(--color-primary)]',
    accent: 'bg-orange-100 text-[var(--color-accent)]',
    success: 'bg-emerald-100 text-[var(--color-success)]',
    muted: 'bg-[var(--color-border)] text-[var(--color-text-secondary)]',
};

export const Badge = ({ variant = 'primary', children, className, ...rest }: BadgeProps) => {
    return (
        <span
            {...rest}
            className={clsx(
                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                variantClasses[variant],
                className,
            )}
        >
            {children}
        </span>
    );
};
