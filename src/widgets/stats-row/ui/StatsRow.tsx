import { TrendingUp, Flame } from 'lucide-react';

import { Card, Text, Icon, ProgressBar } from '@shared/ui';

export const StatsRow = () => {
    return (
        <div className="grid grid-cols-3 gap-2">
            {/* Сбережения */}
            <Card padding="sm" shadow className="flex flex-col gap-1">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center">
                    <span className="text-sm">🐷</span>
                </div>
                <Text size="xs" variant="secondary">Сбережения</Text>
                <Text style={{ fontWeight: 700, fontSize: '1rem' }}>1 250 ₽</Text>
                <div className="flex items-center gap-0.5">
                    <Icon as={TrendingUp} size={10} color="var(--color-success)" />
                    <Text size="xs" style={{ color: 'var(--color-success)', fontWeight: 600 }}>+12%</Text>
                </div>
            </Card>

            {/* Бюджет */}
            <Card padding="sm" shadow className="flex flex-col gap-1">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center">
                    <span className="text-sm">👛</span>
                </div>
                <Text size="xs" variant="secondary">Бюджет</Text>
                <Text style={{ fontWeight: 700, fontSize: '1rem' }}>2 300 ₽</Text>
                <ProgressBar value={35} className="h-1" />
                <Text size="xs" variant="secondary">осталось 800 ₽</Text>
            </Card>

            {/* Стрик */}
            <Card padding="sm" shadow className="flex flex-col gap-1">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center">
                    <Icon as={Flame} size={16} color="var(--color-accent)" />
                </div>
                <Text size="xs" variant="secondary">Стрик</Text>
                <div className="flex items-baseline gap-0.5">
                    <Text style={{ fontWeight: 700, fontSize: '1rem' }}>14</Text>
                    <Text size="xs" variant="secondary">дней</Text>
                </div>
                <Text size="xs" style={{ color: 'var(--color-success)', fontWeight: 600 }}>Рекорд: 21</Text>
            </Card>
        </div>
    );
};
