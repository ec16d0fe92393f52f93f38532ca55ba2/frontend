import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import type { Milestone } from '@entities/goal';

import { Icon } from '@shared/ui';

interface MilestoneStepProps {
    milestone: Milestone;
    isLast: boolean;
    onToggleSubtask?: (subtaskId: string) => void;
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

export const MilestoneStep = ({ milestone, isLast, onToggleSubtask }: MilestoneStepProps) => {
    const isLocked = milestone.status === 'locked';
    const hasSubtasks = milestone.subtasks && milestone.subtasks.length > 0;
    const [isOpen, setIsOpen] = useState(milestone.status === 'current');

    const doneCount = milestone.subtasks?.filter((t) => t.done).length ?? 0;
    const totalCount = milestone.subtasks?.length ?? 0;
    const progressPct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;
    const showProgress = hasSubtasks && milestone.status !== 'locked';

    return (
        <div className="flex gap-3">
            {/* Vine */}
            <div className="flex flex-col items-center">
                <div className="shrink-0 w-[30px] h-[30px] rounded-full flex items-center justify-center border-2"
                    style={{ background: dotBg(milestone.status), borderColor: dotBg(milestone.status), color: '#fff' }}>
                    {statusIcon(milestone.status)}
                </div>
                {!isLast && <div className="w-[2px] flex-1 mt-1 mb-1 rounded-full" style={{ background: 'var(--color-border)', minHeight: 20 }} />}
            </div>

            {/* Content */}
            <div className="pb-4 flex-1 min-w-0">
                <div className="rounded-[16px] border overflow-hidden"
                    style={{
                        background: milestone.status === 'current' ? 'var(--color-surface-alt)' : 'var(--color-surface)',
                        borderColor: milestone.status === 'current' ? 'var(--color-primary)' : 'var(--color-border)',
                        opacity: isLocked ? 0.6 : 1,
                    }}>

                    {/* Header */}
                    <button
                        type="button"
                        disabled={isLocked || !hasSubtasks}
                        onClick={() => setIsOpen((v) => !v)}
                        className="w-full text-left p-[12px_14px]"
                        style={{ cursor: hasSubtasks && !isLocked ? 'pointer' : 'default' }}
                    >
                        <div className="flex justify-between items-start">
                            <div className="text-[13px] font-bold" style={{ color: 'var(--color-text-primary)' }}>{milestone.title}</div>
                            <div className="flex items-center gap-1 ml-2 shrink-0">
                                <div className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                                    style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                                    +{milestone.xp} XP
                                </div>
                                {hasSubtasks && !isLocked && (
                                    <Icon
                                        as={ChevronDown}
                                        size={14}
                                        color="var(--color-text-muted)"
                                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="text-[11px] mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>
                            {milestone.description} · {milestone.date}
                        </div>

                        {/* Daily progress bar */}
                        {showProgress && (
                            <div className="mt-[8px]">
                                <div className="flex justify-between items-center mb-[4px]">
                                    <span className="text-[10px]" style={{ color: 'var(--color-text-muted)' }}>
                                        Ежедневные задачи
                                    </span>
                                    <span className="text-[10px] font-semibold" style={{ color: 'var(--color-primary)' }}>
                                        {doneCount}/{totalCount}
                                    </span>
                                </div>
                                <div className="h-[5px] rounded-full overflow-hidden" style={{ background: 'var(--color-border)' }}>
                                    <div
                                        className="h-full rounded-full transition-all duration-300"
                                        style={{ width: `${progressPct}%`, background: 'var(--color-primary)' }}
                                    />
                                </div>
                            </div>
                        )}
                    </button>

                    {/* Subtasks */}
                    {hasSubtasks && isOpen && (
                        <div className="px-[14px] pb-[12px]"
                            style={{ borderTop: '1px solid var(--color-border)' }}>
                            <div className="pt-[10px] flex flex-col gap-[6px]">
                                {milestone.subtasks!.map((t) => (
                                    <button
                                        key={t.id}
                                        type="button"
                                        onClick={() => onToggleSubtask?.(t.id)}
                                        className="flex items-center gap-2 text-left w-full btn-press"
                                    >
                                        <div className="w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors"
                                            style={{ borderColor: t.done ? 'var(--color-primary)' : 'var(--color-border)', background: t.done ? 'var(--color-primary)' : 'transparent' }}>
                                            {t.done && <span style={{ color: '#fff', fontSize: 9 }}>✓</span>}
                                        </div>
                                        <span className="text-[11px] transition-colors"
                                            style={{ color: t.done ? 'var(--color-text-muted)' : 'var(--color-text-primary)', textDecoration: t.done ? 'line-through' : 'none' }}>
                                            {t.text}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
