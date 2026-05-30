import { CameraViewfinder, QuickEntryRow, RecentTransactions } from '@widgets/camera-entry';

export const CameraPage = () => (
    <div className="flex flex-col gap-4 animate-fade-in-up">
        <div className="text-[20px] font-bold" style={{ color: 'var(--color-text-primary)' }}>Добавить запись</div>
        <CameraViewfinder />
        <div className="flex items-center gap-3">
            <div className="h-px flex-1" style={{ background: 'var(--color-border)' }} />
            <span className="text-[12px] font-medium" style={{ color: 'var(--color-text-muted)' }}>или</span>
            <div className="h-px flex-1" style={{ background: 'var(--color-border)' }} />
        </div>
        <QuickEntryRow />
        <RecentTransactions />
    </div>
);
