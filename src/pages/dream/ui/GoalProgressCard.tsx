import { MOCK_GOAL } from '@shared/mocks';
import { formatRub as fmt } from '@shared/utils';

export const GoalProgressCard = () => {
    const pct = Math.round((MOCK_GOAL.current / MOCK_GOAL.target) * 100);
    const r = 44;
    const circ = 2 * Math.PI * r;
    const dash = circ * (pct / 100);

    return (
        <div className="rounded-[20px] p-[16px_18px] border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--color-text-muted)' }}>МОЯ МЕЧТА</div>
            <div className="flex items-center gap-4">
                <div className="relative w-[100px] h-[100px] shrink-0">
                    <svg width="100" height="100" viewBox="0 0 100 100" className="-rotate-90">
                        <circle cx="50" cy="50" r={r} fill="none" strokeWidth="9" stroke="#e4f0dc" />
                        <circle cx="50" cy="50" r={r} fill="none" strokeWidth="9" stroke="#89B776"
                            strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-[22px] font-bold leading-none" style={{ color: 'var(--color-text-primary)' }}>{pct}%</div>
                        <div className="text-[10px]" style={{ color: 'var(--color-text-faint)' }}>прогресс</div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="text-[15px] font-bold" style={{ color: 'var(--color-text-primary)' }}>{MOCK_GOAL.title}</div>
                    <div className="text-[12px] mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                        {fmt(MOCK_GOAL.current)} ₽ из {fmt(MOCK_GOAL.target)} ₽
                    </div>
                    <div className="text-[11px] mt-1 font-medium" style={{ color: 'var(--color-primary)' }}>
                        Дедлайн: {MOCK_GOAL.deadline}
                    </div>
                </div>
            </div>
        </div>
    );
};
