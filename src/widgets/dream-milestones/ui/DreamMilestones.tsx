import { selectMilestones, useToggleSubtaskApiMutation } from '@entities/goal';

import { useAppSelector } from '@shared/hooks';

import { MilestoneStep } from './MilestoneStep';

interface DreamMilestonesProps {
    goalId: string | undefined;
}

export const DreamMilestones = ({ goalId }: DreamMilestonesProps) => {
    const milestones = useAppSelector(selectMilestones);
    const [toggleSubtaskApi] = useToggleSubtaskApiMutation();

    return (
        <div className="flex flex-col">
            {milestones.map((m, i) => (
                <MilestoneStep
                    key={m.id}
                    milestone={m}
                    isLast={i === milestones.length - 1}
                    onToggleSubtask={(subtaskId) => {
                        if (!goalId) return;
                        const subtask = m.subtasks?.find((t) => t.id === subtaskId);
                        void toggleSubtaskApi({ goalId, milestoneId: m.id, subtaskId, body: { done: !subtask?.done } });
                    }}
                />
            ))}
        </div>
    );
};
