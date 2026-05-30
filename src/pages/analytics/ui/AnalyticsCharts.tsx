const BAR_DATA = [
    { month: 'Дек', income: 50, expense: 42 },
    { month: 'Янв', income: 58, expense: 45 },
    { month: 'Фев', income: 55, expense: 50 },
    { month: 'Мар', income: 65, expense: 48 },
    { month: 'Апр', income: 60, expense: 52 },
    { month: 'Май', income: 65, expense: 40 },
];

const DONUT = [
    { label: 'Продукты', pct: 35, color: '#89B776' },
    { label: 'Транспорт', pct: 20, color: '#6aaa58' },
    { label: 'Кафе', pct: 18, color: '#b8d8a4' },
    { label: 'Жильё', pct: 15, color: '#d4944a' },
    { label: 'Прочее', pct: 12, color: '#e0ecda' },
];

export const AnalyticsCharts = () => {
    const maxBar = 70;
    return (
        <div className="flex flex-col gap-3">
            {/* Bar chart */}
            <div className="rounded-[18px] p-[14px_16px] border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>Доходы vs Расходы</div>
                <div className="flex items-end gap-2 h-[80px]">
                    {BAR_DATA.map((d) => (
                        <div key={d.month} className="flex-1 flex flex-col items-center gap-[2px]">
                            <div className="w-full flex gap-[2px] items-end" style={{ height: 64 }}>
                                <div className="flex-1 rounded-t-[4px]"
                                    style={{ height: `${(d.income / maxBar) * 100}%`, background: 'var(--color-primary)' }} />
                                <div className="flex-1 rounded-t-[4px]"
                                    style={{ height: `${(d.expense / maxBar) * 100}%`, background: 'var(--color-expense-light)', border: '1px solid var(--color-expense)' }} />
                            </div>
                            <div className="text-[9px]" style={{ color: 'var(--color-text-faint)' }}>{d.month}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Donut chart */}
            <div className="rounded-[18px] p-[14px_16px] border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>Расходы по категориям</div>
                <div className="flex gap-4 items-center">
                    <div className="w-[80px] h-[80px] rounded-full shrink-0 flex items-center justify-center text-[12px] font-bold"
                        style={{ background: 'conic-gradient(#89B776 0% 35%, #6aaa58 35% 55%, #b8d8a4 55% 73%, #d4944a 73% 88%, #e0ecda 88% 100%)', color: 'var(--color-text-primary)' }}>
                        <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center">💸</div>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                        {DONUT.map((d) => (
                            <div key={d.label} className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: d.color }} />
                                <div className="text-[11px] flex-1" style={{ color: 'var(--color-text-secondary)' }}>{d.label}</div>
                                <div className="text-[11px] font-semibold" style={{ color: 'var(--color-text-primary)' }}>{d.pct}%</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
