import { Bell } from 'lucide-react';

import { XpCard, TreeBlock } from '@widgets/tree-hero';
import { StatsRow } from '@widgets/stats-row';

import { Icon } from '@shared/ui';
import { MOCK_TREE, MOCK_USER } from '@shared/mocks';

import { TreeDecorateCard } from './TreeDecorateCard';
import { LearningCard } from './LearningCard';

export const HomePage = () => (
    <div className="flex flex-col gap-3 animate-fade-in-up">
        {/* Header */}
        <div className="flex justify-between items-start">
            <div>
                <div className="text-[22px] font-bold flex items-center gap-[7px]" style={{ color: 'var(--color-text-primary)' }}>
                    Доброе утро, {MOCK_USER.firstName} <span className="text-[17px]">🌿</span>
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

        <XpCard tree={MOCK_TREE} />
        <TreeBlock goalTitle="Накопить на поездку к морю" />
        <StatsRow />
        <TreeDecorateCard />
        <LearningCard />
    </div>
);
