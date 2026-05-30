export const MotivationalFooter = () => (
    <div className="rounded-[16px] p-[12px_15px] border flex items-center gap-[10px]"
        style={{ background: 'var(--color-surface-alt)', borderColor: '#e0ecda' }}>
        <span className="text-[18px]">🌱</span>
        <div>
            <div className="text-[13px] font-bold" style={{ color: 'var(--color-text-primary)' }}>
                Каждый урок — новый лист
            </div>
            <div className="text-[11px] mt-[1px]" style={{ color: 'var(--color-text-muted)' }}>
                Заверши курс и дерево расцветёт!
            </div>
        </div>
    </div>
);
