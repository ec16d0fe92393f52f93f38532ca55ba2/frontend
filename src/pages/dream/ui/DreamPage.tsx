import { useNavigate } from 'react-router-dom';
import { Pencil } from 'lucide-react';

import { DreamMilestones } from '@widgets/dream-milestones';

import { Icon } from '@shared/ui';

import { GoalProgressCard } from './GoalProgressCard';
import { MotivationCard } from './MotivationCard';

export const DreamPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-4 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div className="text-[20px] font-bold" style={{ color: 'var(--color-text-primary)' }}>Мечта</div>
                <button
                    type="button"
                    onClick={() => navigate('/dream/edit')}
                    className="btn-press w-9 h-9 rounded-full border flex items-center justify-center"
                    style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                >
                    <Icon as={Pencil} size={16} color="var(--color-text-secondary)" />
                </button>
            </div>
            <GoalProgressCard />
            <MotivationCard />
            <div className="text-[14px] font-bold" style={{ color: 'var(--color-text-primary)' }}>Шаги к цели</div>
            <DreamMilestones />
        </div>
    );
};
