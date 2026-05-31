import { TreeDisplay } from '@entities/tree';

interface TreeBlockProps {
    goalTitle?: string;
    completedMilestones?: number;
}

export const TreeBlock = ({ goalTitle = 'Накопить на поездку к морю', completedMilestones }: TreeBlockProps) => (
    <div className="rounded-[24px] p-[20px_18px_18px] text-center relative overflow-hidden"
        style={{ background: '#F2F7F0' }}>
        {/* Decorative leaves */}
        <svg style={{ position: 'absolute', top: 10, left: 16, opacity: 0.5 }} width="20" height="26" viewBox="0 0 20 26">
            <path d="M10 24C10 24 2 16 2 9C2 5 5.6 2 10 2C14.4 2 18 5 18 9C18 16 10 24 10 24Z" fill="#c8dfc0" />
        </svg>
        <svg style={{ position: 'absolute', top: 6, right: 18, opacity: 0.45, transform: 'rotate(18deg)' }} width="17" height="22" viewBox="0 0 17 22">
            <path d="M8.5 20C8.5 20 1 14 1 8C1 4.7 4.4 2 8.5 2C12.6 2 16 4.7 16 8C16 14 8.5 20 8.5 20Z" fill="#c8dfc0" />
        </svg>
        <svg style={{ position: 'absolute', bottom: 40, left: 8, opacity: 0.38, transform: 'rotate(-52deg)' }} width="15" height="19" viewBox="0 0 15 19">
            <path d="M7.5 17C7.5 17 1 12 1 7C1 4 3.9 2 7.5 2C11.1 2 14 4 14 7C14 12 7.5 17 7.5 17Z" fill="#c8dfc0" />
        </svg>
        <svg style={{ position: 'absolute', bottom: 38, right: 10, opacity: 0.42, transform: 'rotate(58deg)' }} width="17" height="20" viewBox="0 0 17 20">
            <path d="M8.5 18C8.5 18 1 13 1 7.5C1 4.5 4.4 2 8.5 2C12.6 2 16 4.5 16 7.5C16 13 8.5 18 8.5 18Z" fill="#c8dfc0" />
        </svg>

        <TreeDisplay stage={completedMilestones} />

        <div className="font-serif text-[17px] mt-2 leading-[1.45]" style={{ color: 'var(--color-text-primary)' }}>
            Маленькие шаги сегодня —<br /><em>сила завтра.</em>
        </div>

        <div className="mt-[10px] inline-flex items-center gap-[7px] rounded-[20px] px-4 py-[7px] border"
            style={{ background: '#FCFCFA', borderColor: '#dde8d5' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#89B776" strokeWidth="2.2">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="#89B776" />
            </svg>
            <span className="text-[12px] font-semibold" style={{ color: 'var(--color-text-primary)' }}>{goalTitle}</span>
        </div>
    </div>
);
