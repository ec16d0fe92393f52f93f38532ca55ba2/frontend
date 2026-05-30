import { useNavigate } from 'react-router-dom';
import { MinusCircle, PlusCircle } from 'lucide-react';

import { Icon } from '@shared/ui';

export const QuickEntryRow = () => {
    const navigate = useNavigate();

    return (
        <div className="flex gap-3">
            <button type="button" onClick={() => navigate('/expense')}
                className="flex-1 flex items-center justify-between rounded-[16px] px-4 py-3 border transition-colors"
                style={{ background: 'var(--color-expense-light)', borderColor: 'var(--color-expense)' }}>
                <div className="flex items-center gap-3">
                    <Icon as={MinusCircle} size={20} color="var(--color-expense)" />
                    <div className="text-left">
                        <div className="text-[13px] font-bold" style={{ color: 'var(--color-expense)' }}>Расходы</div>
                        <div className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>Добавить</div>
                    </div>
                </div>
            </button>
            <button type="button" onClick={() => navigate('/income')}
                className="flex-1 flex items-center justify-between rounded-[16px] px-4 py-3 border transition-colors"
                style={{ background: 'var(--color-primary-light)', borderColor: 'var(--color-primary)' }}>
                <div className="flex items-center gap-3">
                    <Icon as={PlusCircle} size={20} color="var(--color-primary)" />
                    <div className="text-left">
                        <div className="text-[13px] font-bold" style={{ color: 'var(--color-primary)' }}>Доходы</div>
                        <div className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>Добавить</div>
                    </div>
                </div>
            </button>
        </div>
    );
};
