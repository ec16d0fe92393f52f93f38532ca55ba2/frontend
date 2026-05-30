import clsx from 'clsx';

import { CardProps } from './Card.props';

const paddingClasses: Record<NonNullable<CardProps['padding']>, string> = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
};

export const Card = ({ children, padding = 'md', shadow = false, className, ...rest }: CardProps) => {
    return (
        <div
            {...rest}
            className={clsx(
                'bg-[var(--color-surface)] rounded-[var(--radius-lg)]',
                paddingClasses[padding],
                shadow && 'shadow-[0_2px_12px_0_rgba(61,125,63,0.08)]',
                className,
            )}
        >
            {children}
        </div>
    );
};
