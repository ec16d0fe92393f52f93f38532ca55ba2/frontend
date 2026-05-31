import { selectMarketPlayer } from '@entities/market';
import { selectTree } from '@entities/tree';

import { useAppSelector } from '@shared/hooks';

import { XpScoreCard } from './XpScoreCard';
import { SkillsGrid } from './SkillsGrid';

export const ProfileScore = () => {
    const player = useAppSelector(selectMarketPlayer);
    const tree = useAppSelector(selectTree);

    return (
        <div className="flex gap-[10px]">
            <XpScoreCard xp={player.xp} label={tree.label} percentile={tree.financialScore} />
            <SkillsGrid />
        </div>
    );
};
