import { useGetMonthlyAnalyticsQuery, useGetExpensesByCategoryQuery } from '@entities/analytics';

const CATEGORY_COLORS = ['#89B776', '#6aaa58', '#b8d8a4', '#d4944a', '#e0b060', '#a0c8e0', '#c890c0'];

export const AnalyticsCharts = () => {
    const { data: monthlyData = [], isLoading: monthlyLoading } = useGetMonthlyAnalyticsQuery();
    const { data: categoryData = [], isLoading: categoryLoading } = useGetExpensesByCategoryQuery();

    const maxBar = monthlyData.reduce((m, d) => Math.max(m, d.income, d.expense), 1);

    const totalAmount = categoryData.reduce((s, d) => s + d.amount, 0);
    const donutItems = categoryData.map((d, i) => ({
        ...d,
        pct: totalAmount > 0 ? Math.round((d.amount / totalAmount) * 100) : d.percentage,
        color: CATEGORY_COLORS[i % CATEGORY_COLORS.length],
    }));

    const conicGradient = donutItems.reduce<{ parts: string[]; acc: number }>(
        ({ parts, acc }, d) => {
            const end = acc + d.pct;
            return { parts: [...parts, `${d.color} ${acc}% ${end}%`], acc: end };
        },
        { parts: [], acc: 0 },
    ).parts.join(', ');

    if (monthlyLoading || categoryLoading) {
        return (
            <div className="flex flex-col gap-3">
                {[0, 1].map((i) => (
                    <div key={i} className="rounded-[18px] h-[140px] border animate-pulse"
                        style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }} />
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3">
            {/* Bar chart */}
            <div className="rounded-[18px] p-[14px_16px] border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>Доходы vs Расходы</div>
                <div className="flex items-end gap-2 h-[80px]">
                    {monthlyData.map((d) => (
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
            {donutItems.length > 0 && (
                <div className="rounded-[18px] p-[14px_16px] border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                    <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>Расходы по категориям</div>
                    <div className="flex gap-4 items-center">
                        <div className="w-[80px] h-[80px] rounded-full shrink-0 flex items-center justify-center"
                            style={{ background: `conic-gradient(${conicGradient})` }}>
                            <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center">💸</div>
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1">
                            {donutItems.map((d) => (
                                <div key={d.category} className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: d.color }} />
                                    <div className="text-[11px] flex-1" style={{ color: 'var(--color-text-secondary)' }}>{d.label}</div>
                                    <div className="text-[11px] font-semibold" style={{ color: 'var(--color-text-primary)' }}>{d.pct}%</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
