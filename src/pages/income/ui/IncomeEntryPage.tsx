import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'react-toastify';

import { CategoryGrid } from '@widgets/category-grid';

import { addTransaction } from '@entities/transaction';
import { selectBalance, setBalance } from '@entities/balance';

import { Tabs, FloatingInput, Icon, DateSelector, AmountInput, type DateOption } from '@shared/ui';
import { MOCK_CATEGORIES_INCOME } from '@shared/mocks';
import { useAppDispatch, useAppSelector } from '@shared/hooks';

type EntryTab = 'expense' | 'income';
const TABS: readonly { value: EntryTab; label: string }[] = [{ value: 'expense', label: 'Расходы' }, { value: 'income', label: 'Доходы' }];

export const IncomeEntryPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const balance = useAppSelector(selectBalance);

    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState<DateOption>('Сегодня');

    const handleTabChange = (v: EntryTab) => { if (v === 'expense') navigate('/expense'); };

    const canSubmit = Number(amount) > 0 && category !== '';

    const handleSubmit = () => {
        if (!canSubmit) return;
        const num = Number(amount);
        const categoryLabel = MOCK_CATEGORIES_INCOME.find((c) => c.id === category)?.label ?? category;
        const time = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

        dispatch(addTransaction({
            id: Date.now().toString(),
            title: categoryLabel,
            amount: num,
            category,
            date: `${date}, ${time}`,
            type: 'income',
        }));
        dispatch(setBalance({
            ...balance,
            total: balance.total + num,
            income: balance.income + num,
        }));
        toast.success('Доход добавлен');
        navigate(-1);
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
            <Tabs tabs={TABS} active="income" onChange={handleTabChange} />
            <AmountInput variant="income" value={amount} onChange={setAmount} />
            <DateSelector value={date} onChange={setDate} />
            <CategoryGrid categories={MOCK_CATEGORIES_INCOME} selected={category} onSelect={setCategory} />
            <FloatingInput label="Комментарий (необязательно)" />
            <button
                type="button"
                onClick={handleSubmit}
                disabled={!canSubmit}
                className="btn-press w-full py-4 rounded-[16px] text-[15px] font-bold text-white transition-opacity"
                style={{ background: canSubmit ? 'var(--color-primary)' : 'var(--color-border)', opacity: canSubmit ? 1 : 0.6 }}>
                Добавить доход
            </button>
        </div>
    );
};
