import type { Milestone } from '@shared/mocks';

interface MilestoneStepProps {
    milestone: Milestone;
    isLast: boolean;
}

const statusIcon = (status: Milestone['status']) => {
    if (status === 'completed') return <span style={{ fontSize: 14 }}>✓</span>;
    if (status === 'current') return <span style={{ fontSize: 11 }}>●</span>;
    return <span style={{ fontSize: 14, opacity: 0.4 }}>🔒</span>;
};

const dotBg = (status: Milestone['status']) => {
    if (status === 'completed') return 'var(--color-primary)';
    if (status === 'current') return 'var(--color-primary)';
    return 'var(--color-border)';
};

export const MilestoneStep = ({ milestone, isLast }: MilestoneStepProps) => {
    const isLocked = milestone.status === 'locked';

    return (
        <div className="flex gap-3">
            {/* Vine */}
            <div className="flex flex-col items-center">
                <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center border-2 shrink-0"
                    style={{ background: dotBg(milestone.status), borderColor: dotBg(milestone.status), color: '#fff' }}>
                    {statusIcon(milestone.status)}
                </div>
                {!isLast && <div className="w-[2px] flex-1 mt-1 mb-1 rounded-full" style={{ background: 'var(--color-border)', minHeight: 20 }} />}
            </div>

            {/* Content */}
            <div className="pb-4 flex-1 min-w-0">
                <div className={`${isLocked ? '' : 'card-interactive'} rounded-[16px] p-[12px_14px] border`}
                    style={{
                        background: milestone.status === 'current' ? 'var(--color-surface-alt)' : 'var(--color-surface)',
                        borderColor: milestone.status === 'current' ? 'var(--color-primary)' : 'var(--color-border)',
                        opacity: isLocked ? 0.6 : 1,
                    }}>
                    <div className="flex justify-between items-start mb-1">
                        <div className="text-[13px] font-bold" style={{ color: 'var(--color-text-primary)' }}>{milestone.title}</div>
                        <div className="text-[11px] font-semibold px-2 py-0.5 rounded-full ml-2 shrink-0"
                            style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                            +{milestone.xp} XP
                        </div>
                    </div>
                    <div className="text-[11px]" style={{ color: 'var(--color-text-secondary)' }}>{milestone.description} · {milestone.date}</div>

                    {milestone.subtasks && (
                        <div className="mt-[10px] flex flex-col gap-[6px]">
                            {milestone.subtasks.map((t) => (
                                <div key={t.id} className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full border flex items-center justify-center shrink-0"
                                        style={{ borderColor: t.done ? 'var(--color-primary)' : 'var(--color-border)', background: t.done ? 'var(--color-primary)' : 'transparent' }}>
                                        {t.done && <span style={{ color: '#fff', fontSize: 9 }}>✓</span>}
                                    </div>
                                    <span className="text-[11px]" style={{ color: t.done ? 'var(--color-text-muted)' : 'var(--color-text-primary)', textDecoration: t.done ? 'line-through' : 'none' }}>
                                        {t.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
