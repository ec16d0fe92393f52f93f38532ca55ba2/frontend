import clsx from 'clsx';

import { ContainerProps } from './Container.props';

export const Container = ({ children, className, ...rest }: ContainerProps) => {
    return (
        <div
            {...rest}
            className={clsx('mx-auto w-full max-w-[var(--container-max)] px-4', className)}
        >
            {children}
        </div>
    );
};
