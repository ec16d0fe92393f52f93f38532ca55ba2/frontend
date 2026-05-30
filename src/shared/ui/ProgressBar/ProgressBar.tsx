import clsx from 'clsx';

import { ProgressBarProps } from './ProgressBar.props';

export const ProgressBar = ({ value, className, color }: ProgressBarProps) => {
    const clamped = Math.min(100, Math.max(0, value));

    return (
        <div className={clsx('w-full h-2 bg-[var(--color-border)] rounded-full overflow-hidden', className)}>
            <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                    width: `${clamped}%`,
                    backgroundColor: color ?? 'var(--color-primary)',
                }}
            />
        </div>
    );
};
