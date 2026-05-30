import { IconProps } from './Icon.props';

export const Icon = ({ as: Component, size = 24, color = 'currentColor', className = '' }: IconProps) => {
    return (
        <Component
            width={size}
            height={size}
            color={color}
            className={className}
            aria-hidden="true"
            focusable="false"
        />
    );
};
