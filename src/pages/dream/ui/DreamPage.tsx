import { DreamMilestones } from '@widgets/dream-milestones';

import { GoalProgressCard } from './GoalProgressCard';
import { MotivationCard } from './MotivationCard';

export const DreamPage = () => (
    <div className="flex flex-col gap-4 animate-fade-in-up">
        <div className="text-[20px] font-bold" style={{ color: 'var(--color-text-primary)' }}>Мечта</div>
        <GoalProgressCard />
        <MotivationCard />
        <div className="text-[14px] font-bold" style={{ color: 'var(--color-text-primary)' }}>Шаги к цели</div>
        <DreamMilestones />
    </div>
);
