import { ComponentType, SVGProps } from 'react';

export interface IconProps {
    as: ComponentType<SVGProps<SVGSVGElement>>;
    size?: number | string;
    color?: string;
    className?: string;
}
