const TOTAL = 10;

interface SkillBarProps {
    label: string;
    value: number;
    color?: 'primary' | 'warning';
}

export const SkillBar = ({ label, value, color = 'primary' }: SkillBarProps) => {
    const fillColor = color === 'warning' ? 'var(--color-warning)' : 'var(--color-primary)';
    const emptyColor = color === 'warning' ? '#fae8d4' : '#e4f0dc';

    return (
        <div className="rounded-[14px] p-[10px] border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="text-[9px] font-semibold tracking-[0.03em] mb-[5px]" style={{ color: 'var(--color-text-muted)' }}>
                {label.toUpperCase()}
            </div>
            <div className="text-[20px] font-bold leading-none" style={{ color: 'var(--color-text-primary)' }}>
                {value}<span className="text-[11px] font-normal" style={{ color: 'var(--color-text-faint)' }}>/10</span>
            </div>
            <div className="flex gap-[2px] mt-[6px]">
                {Array.from({ length: TOTAL }).map((_, i) => (
                    <div key={i} className="h-[4px] flex-1 rounded-[2px]"
                        style={{ background: i < value ? fillColor : emptyColor }} />
                ))}
            </div>
        </div>
    );
};
