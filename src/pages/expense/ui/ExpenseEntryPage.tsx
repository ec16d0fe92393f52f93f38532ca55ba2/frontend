import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'react-toastify';

import { CategoryGrid } from '@widgets/category-grid';

import { useCreateTransactionMutation, useGetExpenseCategoriesQuery } from '@entities/transaction';
import { selectBalance, setBalance } from '@entities/balance';

import { Tabs, FloatingInput, Icon, DateSelector, AmountInput, type DateOption } from '@shared/ui';
import { useAppDispatch, useAppSelector } from '@shared/hooks';

type EntryTab = 'expense' | 'income';
const TABS: readonly { value: EntryTab; label: string }[] = [{ value: 'expense', label: 'Расходы' }, { value: 'income', label: 'Доходы' }];

export const ExpenseEntryPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const balance = useAppSelector(selectBalance);

    const { data: categories = [] } = useGetExpenseCategoriesQuery();
    const [createTransaction, { isLoading }] = useCreateTransactionMutation();

    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState<DateOption>('Сегодня');

    const handleTabChange = (v: EntryTab) => { if (v === 'income') navigate('/income'); };

    const canSubmit = Number(amount) > 0 && category !== '';

    const toISO = (opt: DateOption): string => {
        const d = new Date();
        if (opt === 'Вчера') d.setDate(d.getDate() - 1);
        if (opt === 'Позавчера') d.setDate(d.getDate() - 2);
        return d.toISOString();
    };

    const handleSubmit = async () => {
        if (!canSubmit) return;
        const num = Number(amount);
        const categoryLabel = categories.find((c) => c.id === category)?.label ?? category;

        try {
            await createTransaction({
                title: categoryLabel,
                amount: -num,
                category,
                type: 'expense',
                date: toISO(date),
            }).unwrap();
            dispatch(setBalance({
                ...balance,
                total: balance.total - num,
                expenses: balance.expenses + num,
            }));
            toast.success('Расход добавлен');
            navigate(-1);
        } catch {
            toast.error('Ошибка добавления расхода');
        }
    };

    return (
        <div className="flex flex-col gap-4 animate-fade-in-up">
            <div className="flex items-center gap-3">
                <button type="button" onClick={() => navigate(-1)} className="btn-press w-9 h-9 rounded-full border flex items-center justify-center"
                    style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                    <Icon as={ArrowLeft} size={18} color="var(--color-text-primary)" />
                </button>
                <div className="text-[18px] font-bold" style={{ color: 'var(--color-text-primary)' }}>Новая запись</div>
            </div>
            <Tabs tabs={TABS} active="expense" onChange={handleTabChange} variant="expense" />
            <AmountInput variant="expense" value={amount} onChange={setAmount} />
            <DateSelector activeColor="var(--color-expense)" value={date} onChange={setDate} />
            <CategoryGrid categories={categories} selected={category} onSelect={setCategory} />
            <FloatingInput label="Комментарий (необязательно)" />
            <button
                type="button"
                onClick={() => void handleSubmit()}
                disabled={!canSubmit || isLoading}
                className="btn-press w-full py-4 rounded-[16px] text-[15px] font-bold text-white transition-opacity"
                style={{ background: canSubmit ? 'var(--color-expense)' : 'var(--color-border)', opacity: canSubmit ? 1 : 0.6 }}>
                Добавить расход
            </button>
        </div>
    );
};
