import { selectXpHistory } from '@entities/tree';

import { useAppSelector } from '@shared/hooks';

const W = 280;
const H = 80;
const PAD = 12;

export const XpProgressChart = () => {
    const xpHistory = useAppSelector(selectXpHistory);

    if (xpHistory.length === 0) {
        return (
            <div className="rounded-[18px] p-[14px_16px] border h-[130px] animate-pulse"
                style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }} />
        );
    }

    const maxVal = Math.max(...xpHistory.map((d) => d.value)) || 1;
    const span = xpHistory.length > 1 ? xpHistory.length - 1 : 1;
    const pts = xpHistory.map((d, i) => {
        const x = PAD + (i / span) * (W - PAD * 2);
        const y = H - PAD - ((d.value / maxVal) * (H - PAD * 2));
        return { x, y, ...d };
    });

    const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
    const areaD = `${pathD} L${pts[pts.length - 1].x},${H - PAD} L${pts[0].x},${H - PAD} Z`;

    return (
        <div className="rounded-[18px] p-[14px_16px] border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="flex justify-between items-center mb-3">
                <div className="text-[13px] font-bold" style={{ color: 'var(--color-text-primary)' }}>Прогресс опыта</div>
                <div className="text-[11px] font-semibold px-[10px] py-[3px] rounded-[10px]"
                    style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                    6 месяцев
                </div>
            </div>
            <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ display: 'block', height: 80 }}>
                <defs>
                    <linearGradient id="xpGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#89B776" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#89B776" stopOpacity="0.02" />
                    </linearGradient>
                </defs>
                <path d={areaD} fill="url(#xpGrad)" />
                <path d={pathD} fill="none" stroke="#89B776" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                {pts.map((p) => (
                    <circle key={p.month} cx={p.x} cy={p.y} r="3.5" fill="#89B776" />
                ))}
            </svg>
            <div className="flex justify-between mt-1">
                {pts.map((p) => (
                    <span key={p.month} className="text-[10px]" style={{ color: 'var(--color-text-faint)' }}>{p.month}</span>
                ))}
            </div>
        </div>
    );
};
