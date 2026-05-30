interface XpScoreCardProps {
    xp: number;
    label: string;
    percentile: number;
}

export const XpScoreCard = ({ xp, label, percentile }: XpScoreCardProps) => (
    <div className="w-[110px] shrink-0 rounded-[18px] p-[14px_12px] flex flex-col justify-between border"
        style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
        <div>
            <div className="text-[9px] font-semibold tracking-[0.03em] mb-1" style={{ color: 'var(--color-text-muted)' }}>
                ОЧКИ ОПЫТА
            </div>
            <div className="text-[28px] font-bold leading-none" style={{ color: 'var(--color-text-primary)' }}>{xp}</div>
            <div className="text-[11px] font-semibold mt-[3px]" style={{ color: 'var(--color-primary)' }}>{label}</div>
        </div>
        <div>
            <div className="rounded-[4px] h-[5px] overflow-hidden mt-[10px]" style={{ background: '#e4f0dc' }}>
                <div className="h-full rounded-[4px]" style={{ width: `${percentile}%`, background: 'var(--color-primary)' }} />
            </div>
            <div className="text-[10px] mt-1" style={{ color: 'var(--color-text-faint)' }}>
                Топ {100 - percentile}% игроков
            </div>
        </div>
    </div>
);
