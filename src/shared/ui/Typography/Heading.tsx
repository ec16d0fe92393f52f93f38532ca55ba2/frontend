import clsx from 'clsx';

import { HeadingProps } from './Heading.props';

const sizeClasses: Record<NonNullable<HeadingProps['level']>, string> = {
    1: 'text-3xl font-bold',
    2: 'text-2xl font-bold',
    3: 'text-xl font-semibold',
    4: 'text-lg font-semibold',
};

export const Heading = ({ level = 2, children, className, ...rest }: HeadingProps) => {
    const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4';
    return (
        <Tag
            {...rest}
            className={clsx('text-[var(--color-text-primary)] leading-tight', sizeClasses[level], className)}
        >
            {children}
        </Tag>
    );
};
