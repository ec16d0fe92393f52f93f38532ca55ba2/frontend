import { MOCK_LESSONS_COMPLETED, MOCK_LESSONS_TOTAL } from '@shared/mocks';

export const OverallProgressCard = () => {
    const pct = Math.round((MOCK_LESSONS_COMPLETED / MOCK_LESSONS_TOTAL) * 100);
    return (
        <div className="rounded-[16px] p-[12px_14px] border"
            style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="flex justify-between items-center mb-2">
                <span className="text-[12px] font-semibold" style={{ color: 'var(--color-text-primary)' }}>Общий прогресс</span>
                <span className="text-[11px] font-semibold" style={{ color: 'var(--color-primary)' }}>
                    {MOCK_LESSONS_COMPLETED} из {MOCK_LESSONS_TOTAL} уроков
                </span>
            </div>
            <div className="rounded-[6px] h-[7px] overflow-hidden" style={{ background: '#e4f0dc' }}>
                <div className="h-full rounded-[6px] transition-all duration-500"
                    style={{ width: `${pct}%`, background: 'var(--color-primary)' }} />
            </div>
        </div>
    );
};
