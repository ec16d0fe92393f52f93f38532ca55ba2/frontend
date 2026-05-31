import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';

import { XpCard, TreeBlock } from '@widgets/tree-hero';
import { StatsRow } from '@widgets/stats-row';

import { selectTree } from '@entities/tree';
import { selectUser } from '@entities/user';
import { selectGoal, selectCompletedMilestoneCount, useGetGoalsQuery, useGetGoalMilestonesQuery } from '@entities/goal';

import { Icon } from '@shared/ui';
import { useAppSelector } from '@shared/hooks';

import { TreeDecorateCard } from './TreeDecorateCard';
import { LearningCard } from './LearningCard';

const GoalEmptyBanner = () => (
    <div className="rounded-[20px] p-4 border border-dashed flex items-center gap-3"
        style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
        <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[20px]"
            style={{ background: 'var(--color-primary-light)' }}>
            🎯
        </div>
        <div className="flex-1 min-w-0">
            <div className="text-[13px] font-bold" style={{ color: 'var(--color-text-primary)' }}>
                Финансовая цель не задана
            </div>
            <div className="text-[11px] mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>
                Поставьте мечту — дерево начнёт расти
            </div>
        </div>
        <Link
            to="/dream/create"
            className="text-[11px] font-bold px-3 py-1.5 rounded-full shrink-0"
            style={{ background: 'var(--color-primary)', color: '#fff' }}
        >
            Задать
        </Link>
    </div>
);

export const HomePage = () => {
    const tree = useAppSelector(selectTree);
    const user = useAppSelector(selectUser);
    const goal = useAppSelector(selectGoal);
    const completedMilestones = useAppSelector(selectCompletedMilestoneCount);
    const firstName = user?.firstname ?? 'друг';

    const { data: goals, isLoading } = useGetGoalsQuery();
    const goalId = goals?.[0]?.id;
    useGetGoalMilestonesQuery(goalId!, { skip: !goalId });
    const hasGoal = !isLoading && goals !== undefined && goals.length > 0;

    return (
        <div className="flex flex-col gap-3 animate-fade-in-up">
            <div className="flex justify-between items-start">
                <div>
                    <div className="text-[22px] font-bold flex items-center gap-[7px]" style={{ color: 'var(--color-text-primary)' }}>
                        Доброе утро, {firstName} <span className="text-[17px]">🌿</span>
                    </div>
                    <div className="text-[13px] mt-[3px]" style={{ color: 'var(--color-text-secondary)' }}>
                        Продолжай расти каждый день.
                    </div>
                </div>
                <div className="relative">
                    <div className="w-9 h-9 rounded-full border flex items-center justify-center"
                        style={{ background: 'var(--color-surface)', borderColor: '#dde8d5' }}>
                        <Icon as={Bell} size={17} color="var(--color-text-primary)" />
                    </div>
                    <div className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full" style={{ background: 'var(--color-primary)' }} />
                </div>
            </div>

            <XpCard tree={tree} />
            {hasGoal
                ? <TreeBlock goalTitle={goal.title} completedMilestones={completedMilestones} />
                : <GoalEmptyBanner />
            }
            <StatsRow />
            <TreeDecorateCard />
            <LearningCard />
        </div>
    );
};
