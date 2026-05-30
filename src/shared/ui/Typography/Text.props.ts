import { HTMLAttributes, ReactNode } from 'react';

export type TextVariant = 'primary' | 'secondary' | 'muted';
export type TextSize = 'xs' | 'sm' | 'base' | 'lg';
export type TextAs = 'p' | 'span' | 'label' | 'div';

export interface TextProps extends HTMLAttributes<HTMLElement> {
    as?: TextAs;
    variant?: TextVariant;
    size?: TextSize;
    children: ReactNode;
}
