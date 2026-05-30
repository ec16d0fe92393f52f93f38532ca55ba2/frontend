import { Bell, ChevronRight } from 'lucide-react';

import { TreeHero } from '@widgets/tree-hero';
import { StatsRow } from '@widgets/stats-row';

import { Card, Text, Icon } from '@shared/ui';
import { MOCK_TREE, MOCK_USER } from '@shared/mocks';

export const HomePage = () => {
    return (
        <div className="flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-xl">
                        🌱
                    </div>
                    <div>
                        <Text style={{ fontWeight: 700 }}>Доброе утро, {MOCK_USER.firstName}!</Text>
                        <Text size="xs" variant="secondary">Растите своё финансовое будущее.</Text>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center">
                        <Icon as={Bell} size={18} color="var(--color-text-secondary)" />
                    </div>
                    <div className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                </div>
            </div>

            {/* Tree hero */}
            <Card shadow padding="md">
                <TreeHero tree={MOCK_TREE} />
            </Card>

            {/* Financial growth score */}
            <Card shadow>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-lg">
                        📈
                    </div>
                    <div className="flex-1">
                        <Text size="xs" variant="secondary">Общий прогресс</Text>
                        <Text style={{ fontWeight: 700 }}>Вы делаете большие успехи!</Text>
                        <Text size="xs" variant="secondary">Продолжайте учиться, копить и расти.</Text>
                    </div>
                    <div className="text-right shrink-0">
                        <Text style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary)' }}>
                            {MOCK_TREE.financialScore}%
                        </Text>
                        <Text size="xs" variant="secondary">Счёт роста</Text>
                    </div>
                </div>
            </Card>

            {/* Stats row */}
            <StatsRow />

            {/* Continue lesson */}
            <Card shadow className="border border-[var(--color-border)]">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-2xl">
                        📖
                    </div>
                    <div className="flex-1">
                        <Text size="xs" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                            Продолжить урок
                        </Text>
                        <Text style={{ fontWeight: 700 }}>Умные сбережения</Text>
                        <Text size="xs" variant="secondary">Урок 3 из 5 · 5 мин</Text>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                        <Icon as={ChevronRight} size={20} color="white" />
                    </div>
                </div>
            </Card>
        </div>
    );
};
