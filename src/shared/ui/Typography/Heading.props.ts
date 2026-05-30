import { HTMLAttributes, ReactNode } from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: HeadingLevel;
    children: ReactNode;
}
