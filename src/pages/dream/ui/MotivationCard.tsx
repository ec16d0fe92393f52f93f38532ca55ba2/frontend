export const MotivationCard = () => (
    <div className="rounded-[16px] p-[12px_16px] flex items-center gap-3"
        style={{ background: 'var(--color-primary-light)', border: '1px solid #d0e8c8' }}>
        <span className="text-[24px]">🔥</span>
        <div>
            <div className="text-[13px] font-bold" style={{ color: 'var(--color-text-primary)' }}>12 дней подряд!</div>
            <div className="text-[11px]" style={{ color: 'var(--color-text-secondary)' }}>
                Отличная дисциплина — продолжай в том же духе
            </div>
        </div>
    </div>
);
