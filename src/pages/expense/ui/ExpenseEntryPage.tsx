import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { CategoryGrid } from '@widgets/category-grid';

import { Tabs, FloatingInput, Icon, DateSelector, AmountInput } from '@shared/ui';
import { MOCK_CATEGORIES_EXPENSE } from '@shared/mocks';

type EntryTab = 'expense' | 'income';
const TABS: readonly { value: EntryTab; label: string }[] = [{ value: 'expense', label: 'Расходы' }, { value: 'income', label: 'Доходы' }];

export const ExpenseEntryPage = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState('');
    const handleTabChange = (v: EntryTab) => { if (v === 'income') navigate('/income'); };

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
            <AmountInput variant="expense" />
            <DateSelector activeColor="var(--color-expense)" />
            <CategoryGrid categories={MOCK_CATEGORIES_EXPENSE} selected={category} onSelect={setCategory} />
            <FloatingInput label="Комментарий (необязательно)" />
            <button type="button" className="btn-press w-full py-4 rounded-[16px] text-[15px] font-bold text-white"
                style={{ background: 'var(--color-expense)' }}>
                Добавить расход
            </button>
        </div>
    );
};
