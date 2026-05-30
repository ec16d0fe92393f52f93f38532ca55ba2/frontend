import type { TreeLevel } from '@entities/tree';

import { XpCard } from './XpCard';
import { TreeBlock } from './TreeBlock';

interface TreeHeroProps {
    tree: TreeLevel;
    goalTitle?: string;
}

export const TreeHero = ({ tree, goalTitle }: TreeHeroProps) => (
    <div className="flex flex-col gap-3">
        <XpCard tree={tree} />
        <TreeBlock goalTitle={goalTitle} />
    </div>
);
