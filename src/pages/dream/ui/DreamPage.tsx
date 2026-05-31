import { useNavigate, Link } from 'react-router-dom';
import { Pencil } from 'lucide-react';

import { DreamMilestones } from '@widgets/dream-milestones';

import { useGetGoalsQuery, useGetGoalMilestonesQuery } from '@entities/goal';

import { Icon } from '@shared/ui';

import { GoalProgressCard } from './GoalProgressCard';
import { MotivationCard } from './MotivationCard';

const EmptyDream = () => (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center animate-fade-in-up">
        <div className="text-[64px]">🌱</div>
        <div className="text-[18px] font-bold" style={{ color: 'var(--color-text-primary)' }}>
            У вас пока нет мечты
        </div>
        <div className="text-[14px] leading-relaxed max-w-[260px]" style={{ color: 'var(--color-text-secondary)' }}>
            Пообщайтесь с нашим{' '}
            <Link
                to="/chat"
                className="font-semibold underline"
                style={{ color: 'var(--color-primary)' }}
            >
                чат-ботом
            </Link>
            , чтобы мы сформировали вашу мечту
        </div>
    </div>
);

export const DreamPage = () => {
    const navigate = useNavigate();
    const { data: goals, isLoading } = useGetGoalsQuery();
    const goalId = goals?.[0]?.id;
    useGetGoalMilestonesQuery(goalId!, { skip: !goalId });

    if (!isLoading && goals?.length === 0) {
        return <EmptyDream />;
    }

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
            <DreamMilestones goalId={goalId} />
        </div>
    );
};
