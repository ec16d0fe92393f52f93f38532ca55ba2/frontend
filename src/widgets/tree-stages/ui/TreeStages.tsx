import { Text } from '@shared/ui';

const STAGES = [
    { label: 'Росток', emoji: '🌱', level: 1 },
    { label: 'Саженец', emoji: '🌿', level: 3 },
    { label: 'Деревце', emoji: '🪴', level: 5 },
    { label: 'Дерево', emoji: '🌳', level: 7, current: true },
    { label: 'Дуб', emoji: '🌲', level: 10 },
];

interface TreeStagesProps {
    currentLevel: number;
}

export const TreeStages = ({ currentLevel }: TreeStagesProps) => {
    return (
        <div>
            <Text style={{ fontWeight: 700 }} className="mb-3">Путь вашего дерева</Text>
            <div className="relative">
                <div
                    className="absolute top-5 left-[10%] right-[10%] h-0.5"
                    style={{ background: 'var(--color-border)' }}
                />
                <div className="flex justify-between relative">
                    {STAGES.map((stage) => {
                        const reached = currentLevel >= stage.level;
                        const isCurrent = currentLevel >= stage.level && currentLevel < (STAGES[STAGES.indexOf(stage) + 1]?.level ?? 999);

                        return (
                            <div key={stage.level} className="flex flex-col items-center gap-1 w-[18%]">
                                <div
                                    className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-xl"
                                    style={{
                                        background: isCurrent
                                            ? 'var(--color-primary-light)'
                                            : reached
                                                ? 'var(--color-primary-light)'
                                                : 'var(--color-border)',
                                        border: isCurrent ? '2px solid var(--color-primary)' : 'none',
                                        opacity: reached ? 1 : 0.4,
                                    }}
                                >
                                    {stage.emoji}
                                </div>
                                <Text size="xs" variant={reached ? 'primary' : 'muted'} className="text-center leading-tight">
                                    {stage.label}
                                </Text>
                                <Text size="xs" variant="muted" className="text-center">
                                    Ур. {stage.level}
                                </Text>
                                {isCurrent && (
                                    <Text size="xs" style={{ color: 'var(--color-primary)', fontWeight: 600 }} className="text-center">
                                        Текущий
                                    </Text>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
