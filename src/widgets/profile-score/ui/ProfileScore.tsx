import { Card, Text, ProgressBar } from '@shared/ui';

interface ScoreCategory {
    label: string;
    score: number;
    icon: string;
    level: string;
}

interface ProfileScoreProps {
    overall: number;
    categories: ScoreCategory[];
}

export const ProfileScore = ({ overall, categories }: ProfileScoreProps) => {
    return (
        <div className="flex flex-col gap-3">
            <Text style={{ fontWeight: 700 }}>Финансовый счёт грамотности</Text>

            <Card shadow className="flex items-center gap-4">
                {/* Circle score */}
                <div className="relative w-20 h-20 shrink-0">
                    <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                        <circle
                            cx="40" cy="40" r="32"
                            fill="none"
                            strokeWidth="8"
                            stroke="var(--color-border)"
                        />
                        <circle
                            cx="40" cy="40" r="32"
                            fill="none"
                            strokeWidth="8"
                            stroke="var(--color-primary)"
                            strokeDasharray={`${2 * Math.PI * 32}`}
                            strokeDashoffset={`${2 * Math.PI * 32 * (1 - overall / 100)}`}
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Text style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-primary)' }}>
                            {overall}%
                        </Text>
                    </div>
                </div>

                <div className="flex-1">
                    <Text style={{ fontWeight: 700 }}>Хороший прогресс!</Text>
                    <Text size="xs" variant="secondary">
                        Вы формируете сильные финансовые привычки. Продолжайте учиться и расти.
                    </Text>
                </div>
            </Card>

            {/* Category scores */}
            <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                    <Card key={cat.label} padding="sm" shadow>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-base">{cat.icon}</span>
                            <Text size="xs" variant="secondary">{cat.label}</Text>
                        </div>
                        <Text style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary)' }}>
                            {cat.score}%
                        </Text>
                        <Text size="xs" variant="muted">{cat.level}</Text>
                        <ProgressBar value={cat.score} className="mt-1.5" />
                    </Card>
                ))}
            </div>
        </div>
    );
};
