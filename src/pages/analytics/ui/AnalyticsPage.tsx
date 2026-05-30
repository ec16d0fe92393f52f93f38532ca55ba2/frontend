import { OverviewCards } from './OverviewCards';
import { AnalyticsCharts } from './AnalyticsCharts';
import { TransactionsList } from './TransactionsList';

export const AnalyticsPage = () => (
    <div className="flex flex-col gap-4 animate-fade-in-up">
        <div className="text-[20px] font-bold" style={{ color: 'var(--color-text-primary)' }}>Аналитика</div>
        <OverviewCards />
        <AnalyticsCharts />
        <TransactionsList />
    </div>
);
