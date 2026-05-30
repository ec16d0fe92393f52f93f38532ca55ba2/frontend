import { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant = 'primary' | 'accent' | 'success' | 'muted';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    children: ReactNode;
}
