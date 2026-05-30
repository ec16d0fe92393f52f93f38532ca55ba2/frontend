import { MOCK_MILESTONES } from '@shared/mocks';

import { MilestoneStep } from './MilestoneStep';

export const DreamMilestones = () => (
    <div className="flex flex-col">
        {MOCK_MILESTONES.map((m, i) => (
            <MilestoneStep key={m.id} milestone={m} isLast={i === MOCK_MILESTONES.length - 1} />
        ))}
    </div>
);
