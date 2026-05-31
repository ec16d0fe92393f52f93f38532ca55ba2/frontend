import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { useGetBudgetQuery, useUpdateBudgetLimitMutation } from '@entities/budget';
import { selectBalance, setBalance, useGetBalanceQuery } from '@entities/balance';

import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { formatRub as fmt } from '@shared/utils';

export const BudgetSection = () => {
    const dispatch = useAppDispatch();

    const { data: budget } = useGetBudgetQuery();
    const [updateBudgetLimit, { isLoading: isSavingLimit }] = useUpdateBudgetLimitMutation();
    const [limitValue, setLimitValue] = useState('');

    useGetBalanceQuery();
    const balance = useAppSelector(selectBalance);
    const [balanceValue, setBalanceValue] = useState('');

    useEffect(() => {
        if (budget?.monthlyLimit) setLimitValue(String(budget.monthlyLimit));
    }, [budget?.monthlyLimit]);

    useEffect(() => {
        if (balance.total) setBalanceValue(String(balance.total));
    }, [balance.total]);

    const currentLimit = budget?.monthlyLimit ?? 0;

    const handleSaveLimit = async () => {
        const num = Number(limitValue);
        if (num <= 0) return;
        try {
            await updateBudgetLimit({ monthlyLimit: num }).unwrap();
            toast.success('Лимит обновлён');
        } catch {
            toast.error('Ошибка сохранения');
        }
    };

    const handleSaveBalance = () => {
        const num = Number(balanceValue);
        if (num < 0) return;
        dispatch(setBalance({ ...balance, total: num }));
        toast.success('Баланс обновлён');
    };

    return (
        <div className="rounded-[18px] p-4 border flex flex-col gap-4" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="text-[12px] font-semibold" style={{ color: 'var(--color-text-muted)' }}>БЮДЖЕТ</div>

            {/* Monthly limit */}
            <div className="rounded-[14px] p-4 border" style={{ borderColor: 'var(--color-primary)', background: 'var(--color-surface-alt)' }}>
                <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--color-text-muted)' }}>ЛИМИТ РАСХОДОВ В МЕСЯЦ</div>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        inputMode="numeric"
                        value={limitValue}
                        onChange={(e) => setLimitValue(e.target.value.replace(/\D/g, ''))}
                        placeholder="0"
                        className="flex-1 text-[28px] font-bold outline-none bg-transparent"
                        style={{ color: 'var(--color-primary)' }}
                    />
                    <span className="text-[20px] font-bold" style={{ color: 'var(--color-primary)' }}>₽</span>
                </div>
                {currentLimit > 0 && (
                    <div className="text-[11px] mt-1" style={{ color: 'var(--color-text-muted)' }}>
                        Текущий лимит: {currentLimit.toLocaleString('ru-RU')} ₽/мес
                    </div>
                )}
            </div>

            <button
                type="button"
                onClick={() => void handleSaveLimit()}
                disabled={isSavingLimit || Number(limitValue) <= 0}
                className="w-full py-3 rounded-[14px] text-[14px] font-semibold text-white"
                style={{ background: 'var(--color-primary)', opacity: isSavingLimit ? 0.6 : 1 }}
            >
                Сохранить лимит
            </button>

            {/* Balance */}
            <div className="rounded-[14px] p-4 border" style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface-alt)' }}>
                <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--color-text-muted)' }}>ТЕКУЩИЙ БАЛАНС</div>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        inputMode="numeric"
                        value={balanceValue}
                        onChange={(e) => setBalanceValue(e.target.value.replace(/\D/g, ''))}
                        placeholder="0"
                        className="flex-1 text-[28px] font-bold outline-none bg-transparent"
                        style={{ color: 'var(--color-text-primary)' }}
                    />
                    <span className="text-[20px] font-bold" style={{ color: 'var(--color-text-primary)' }}>₽</span>
                </div>
                <div className="text-[11px] mt-1" style={{ color: 'var(--color-text-muted)' }}>
                    Фактический баланс: {fmt(balance.total)} ₽
                </div>
            </div>

            <button
                type="button"
                onClick={handleSaveBalance}
                disabled={balanceValue === ''}
                className="w-full py-3 rounded-[14px] text-[14px] font-semibold text-white"
                style={{ background: 'var(--color-text-primary)', opacity: balanceValue === '' ? 0.5 : 1 }}
            >
                Обновить баланс
            </button>
        </div>
    );
};
