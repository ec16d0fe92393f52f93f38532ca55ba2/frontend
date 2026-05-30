import { XpScoreCard } from './XpScoreCard';
import { SkillsGrid } from './SkillsGrid';

export const ProfileScore = () => (
    <div className="flex gap-[10px]">
        <XpScoreCard xp={742} label="Отлично" percentile={82} />
        <SkillsGrid />
    </div>
);
