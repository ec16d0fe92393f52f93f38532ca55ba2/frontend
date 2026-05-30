import { SpinnerProps } from './Spinner.props';

const sizeMap = {
    sm: 16,
    md: 24,
    lg: 36,
};

export const Spinner = ({ size = 'md', className = '' }: SpinnerProps) => {
    const px = sizeMap[size];
    return (
        <svg
            width={px}
            height={px}
            viewBox="0 0 24 24"
            fill="none"
            className={`animate-spin ${className}`}
            aria-label="Loading"
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="40 20"
            />
        </svg>
    );
};
