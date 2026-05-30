import { Settings } from 'lucide-react';

import { TreeStages } from '@widgets/tree-stages';
import { ProfileScore } from '@widgets/profile-score';

import { Card, Text, Icon } from '@shared/ui';
import { MOCK_USER, MOCK_TREE } from '@shared/mocks';

const SCORE_CATEGORIES = [
    { label: 'Бюджет', score: 78, icon: '👛', level: 'Сильный' },
    { label: 'Сбережения', score: 75, icon: '🐷', level: 'Хороший' },
    { label: 'Инвестиции', score: 60, icon: '🌱', level: 'Строится' },
    { label: 'Кредит', score: 65, icon: '📊', level: 'Хороший' },
];

const MILESTONES = [
    { icon: '🛡️', title: 'Мастер бюджета', description: 'Создал первый бюджет', date: '28 апр' },
    { icon: '🌱', title: 'Хранитель стрика', description: 'Сохранял 14 дней подряд', date: '20 апр' },
    { icon: '🌳', title: 'Достигнут Уровень 7', description: 'Ваше дерево крепнет!', date: '15 апр' },
];

export const ProfilePage = () => {
    return (
        <div className="flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-3xl">
                    😊
                </div>
                <div className="flex-1">
                    <Text style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                        {MOCK_USER.firstName} {MOCK_USER.lastName}
                    </Text>
                    <Text size="xs" variant="secondary">Расту своё финансовое будущее 🌱</Text>
                </div>
                <div className="w-9 h-9 rounded-[var(--radius-sm)] border border-[var(--color-border)] flex items-center justify-center bg-[var(--color-surface)]">
                    <Icon as={Settings} size={18} color="var(--color-text-secondary)" />
                </div>
            </div>

            {/* Level / XP */}
            <div className="grid grid-cols-3 gap-2">
                <Card padding="sm" shadow className="text-center">
                    <Text size="xs" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
                        Уровень {MOCK_TREE.level}
                    </Text>
                    <Text size="xs" variant="secondary">Уверенный рост</Text>
                </Card>
                <Card padding="sm" shadow className="text-center">
                    <Text size="xs" style={{ fontWeight: 700 }}>{MOCK_TREE.xp} XP</Text>
                    <Text size="xs" variant="secondary">до Ур. {MOCK_TREE.level + 1}</Text>
                </Card>
                <Card padding="sm" shadow className="text-center border border-[var(--color-border)]">
                    <Text size="xs" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Все уровни</Text>
                    <Text size="xs" variant="muted">›</Text>
                </Card>
            </div>

            {/* Tree stages */}
            <Card shadow padding="md">
                <TreeStages currentLevel={MOCK_TREE.level} />
            </Card>

            {/* Financial score */}
            <ProfileScore overall={MOCK_TREE.financialScore} categories={SCORE_CATEGORIES} />

            {/* Milestones */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <Text style={{ fontWeight: 700 }}>Последние вехи</Text>
                    <Text size="xs" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Все вехи ›</Text>
                </div>
                <div className="flex flex-col gap-2">
                    {MILESTONES.map((m) => (
                        <Card key={m.title} padding="sm" shadow className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-lg shrink-0">
                                {m.icon}
                            </div>
                            <div className="flex-1">
                                <Text size="sm" style={{ fontWeight: 600 }}>{m.title}</Text>
                                <Text size="xs" variant="secondary">{m.description}</Text>
                            </div>
                            <Text size="xs" variant="muted">{m.date}</Text>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};
