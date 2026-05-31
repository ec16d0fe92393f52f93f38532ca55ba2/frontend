import { useState } from 'react';

import { selectMonthlyLimit, setMonthlyLimit } from '@entities/budget';

import { useAppDispatch, useAppSelector } from '@shared/hooks';

export const BudgetSection = () => {
    const dispatch = useAppDispatch();
    const currentLimit = useAppSelector(selectMonthlyLimit);
    const [value, setValue] = useState(String(currentLimit));

    const handleSave = () => {
        const num = Number(value);
        if (num > 0) dispatch(setMonthlyLimit(num));
    };

    return (
        <div className="rounded-[18px] p-4 border flex flex-col gap-4" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="text-[12px] font-semibold" style={{ color: 'var(--color-text-muted)' }}>БЮДЖЕТ</div>

            <div className="rounded-[14px] p-4 border" style={{ borderColor: 'var(--color-primary)', background: 'var(--color-surface-alt)' }}>
                <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--color-text-muted)' }}>ЛИМИТ РАСХОДОВ В МЕСЯЦ</div>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        inputMode="numeric"
                        value={value}
                        onChange={(e) => setValue(e.target.value.replace(/\D/g, ''))}
                        className="flex-1 text-[28px] font-bold outline-none bg-transparent"
                        style={{ color: 'var(--color-primary)' }}
                    />
                    <span className="text-[20px] font-bold" style={{ color: 'var(--color-primary)' }}>₽</span>
                </div>
                <div className="text-[11px] mt-1" style={{ color: 'var(--color-text-muted)' }}>
                    Текущий лимит: {currentLimit.toLocaleString('ru-RU')} ₽/мес
                </div>
            </div>

            <button
                type="button"
                onClick={handleSave}
                className="w-full py-3 rounded-[14px] text-[14px] font-semibold text-white"
                style={{ background: 'var(--color-primary)' }}
            >
                Сохранить
            </button>
        </div>
    );
};
