import { MOCK_BALANCE } from '@shared/mocks';
import { formatRub as fmt } from '@shared/utils';

export const BalanceCard = () => (
    <div className="rounded-[20px] p-[16px_18px] border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
        <div className="text-[11px] font-semibold tracking-[0.05em] mb-[5px]" style={{ color: 'var(--color-text-muted)' }}>
            БАЛАНС СЧЁТА
        </div>
        <div className="text-[30px] font-bold tracking-[-0.5px] mb-3" style={{ color: 'var(--color-text-primary)' }}>
            {fmt(MOCK_BALANCE.total)} ₽
        </div>
        <div className="flex gap-0">
            <div className="flex-1 pr-[14px] border-r" style={{ borderColor: 'var(--color-border)' }}>
                <div className="text-[10px] mb-[3px]" style={{ color: 'var(--color-text-muted)' }}>Доходы (май)</div>
                <div className="text-[14px] font-bold" style={{ color: 'var(--color-primary)' }}>+{fmt(MOCK_BALANCE.income)} ₽</div>
            </div>
            <div className="flex-1 px-[14px] border-r" style={{ borderColor: 'var(--color-border)' }}>
                <div className="text-[10px] mb-[3px]" style={{ color: 'var(--color-text-muted)' }}>Расходы (май)</div>
                <div className="text-[14px] font-bold" style={{ color: 'var(--color-expense)' }}>−{fmt(MOCK_BALANCE.expenses)} ₽</div>
            </div>
            <div className="flex-1 pl-[14px]">
                <div className="text-[10px] mb-[3px]" style={{ color: 'var(--color-text-muted)' }}>Накоплено</div>
                <div className="text-[14px] font-bold" style={{ color: 'var(--color-text-primary)' }}>{fmt(MOCK_BALANCE.saved)} ₽</div>
            </div>
        </div>
    </div>
);
