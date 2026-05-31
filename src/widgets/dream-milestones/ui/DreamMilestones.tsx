import { selectMilestones, toggleSubtask, setMilestoneCompletedUpTo } from '@entities/goal';

import { useAppDispatch, useAppSelector } from '@shared/hooks';

import { MilestoneStep } from './MilestoneStep';

export const DreamMilestones = () => {
    const dispatch = useAppDispatch();
    const milestones = useAppSelector(selectMilestones);

    return (
        <div className="flex flex-col">
            {milestones.map((m, i) => (
                <MilestoneStep
                    key={m.id}
                    milestone={m}
                    isLast={i === milestones.length - 1}
                    onToggleSubtask={(subtaskId) => dispatch(toggleSubtask({ milestoneId: m.id, subtaskId }))}
                    onToggleStatus={() => dispatch(setMilestoneCompletedUpTo(m.id))}
                />
            ))}
        </div>
    );
};
