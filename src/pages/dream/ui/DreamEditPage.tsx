import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'react-toastify';

import { selectGoal, setGoal } from '@entities/goal';

import { FloatingInput, Icon } from '@shared/ui';
import { useAppDispatch, useAppSelector } from '@shared/hooks';

const GOAL_EMOJIS = ['🌊', '✈️', '🏡', '🚗', '💻', '📱', '🎓', '💍', '🏖️', '🎸', '💰', '🌍'];

const MONTHS = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

const currentYear = new Date().getFullYear();
const YEARS = [currentYear, currentYear + 1, currentYear + 2];

export const DreamEditPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const goal = useAppSelector(selectGoal);
    const [emoji, setEmoji] = useState('🌊');
    const [title, setTitle] = useState(goal.title);
    const [target, setTarget] = useState(String(goal.target));
    const [year, setYear] = useState(currentYear + 1);
    const [month, setMonth] = useState(8);

    const canSubmit = title.trim().length > 0 && Number(target) > 0;

    const handleSubmit = () => {
        if (!canSubmit) return;
        dispatch(setGoal({ title, target: Number(target), current: goal.current, deadline: `${MONTHS[month]} ${year}` }));
        toast.success('Мечта обновлена');
        navigate('/dream');
    };

    return (
        <div className="flex flex-col gap-5 animate-fade-in-up">
            {/* Header */}
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="btn-press w-9 h-9 rounded-full border flex items-center justify-center shrink-0"
                    style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                >
                    <Icon as={ArrowLeft} size={18} color="var(--color-text-primary)" />
                </button>
                <div className="text-[18px] font-bold" style={{ color: 'var(--color-text-primary)' }}>Изменить мечту</div>
            </div>

            {/* Emoji picker */}
            <div>
                <div className="text-[12px] font-semibold mb-3" style={{ color: 'var(--color-text-muted)' }}>СИМВОЛ МЕЧТЫ</div>
                <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                    {GOAL_EMOJIS.map((e) => (
                        <button
                            key={e}
                            type="button"
                            onClick={() => setEmoji(e)}
                            className="btn-press w-12 h-12 rounded-[14px] text-[22px] flex items-center justify-center shrink-0 border transition-colors"
                            style={{
                                background: emoji === e ? 'var(--color-primary)' : 'var(--color-surface)',
                                borderColor: emoji === e ? 'var(--color-primary)' : 'var(--color-border)',
                            }}
                        >
                            {e}
                        </button>
                    ))}
                </div>
            </div>

            {/* Title */}
            <FloatingInput
                label="Название мечты"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            {/* Target amount */}
            <div className="rounded-[18px] p-4 border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-primary)' }}>
                <div className="text-[12px] font-semibold mb-3" style={{ color: 'var(--color-text-muted)' }}>ЦЕЛЕВАЯ СУММА</div>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        inputMode="numeric"
                        value={target}
                        onChange={(e) => setTarget(e.target.value.replace(/\D/g, ''))}
                        placeholder="0"
                        className="flex-1 text-[36px] font-bold outline-none bg-transparent"
                        style={{ color: 'var(--color-primary)' }}
                    />
                    <span className="text-[24px] font-bold" style={{ color: 'var(--color-primary)' }}>₽</span>
                </div>
            </div>

            {/* Deadline picker */}
            <div>
                <div className="text-[12px] font-semibold mb-3" style={{ color: 'var(--color-text-muted)' }}>ДЕДЛАЙН</div>

                {/* Year */}
                <div className="flex gap-2 mb-2">
                    {YEARS.map((y) => (
                        <button
                            key={y}
                            type="button"
                            onClick={() => setYear(y)}
                            className="flex-1 py-2 rounded-[12px] text-[13px] font-semibold border transition-colors"
                            style={{
                                background: year === y ? 'var(--color-primary)' : 'var(--color-surface)',
                                color: year === y ? '#fff' : 'var(--color-text-secondary)',
                                borderColor: year === y ? 'var(--color-primary)' : 'var(--color-border)',
                            }}
                        >
                            {y}
                        </button>
                    ))}
                </div>

                {/* Month */}
                <div className="grid grid-cols-6 gap-2">
                    {MONTHS.map((m, i) => (
                        <button
                            key={m}
                            type="button"
                            onClick={() => setMonth(i)}
                            className="py-2 rounded-[10px] text-[12px] font-semibold border transition-colors"
                            style={{
                                background: month === i ? 'var(--color-primary)' : 'var(--color-surface)',
                                color: month === i ? '#fff' : 'var(--color-text-secondary)',
                                borderColor: month === i ? 'var(--color-primary)' : 'var(--color-border)',
                            }}
                        >
                            {m}
                        </button>
                    ))}
                </div>
            </div>

            {/* Submit */}
            <button
                type="button"
                disabled={!canSubmit}
                onClick={handleSubmit}
                className="btn-press w-full py-4 rounded-[16px] text-[15px] font-bold text-white transition-opacity"
                style={{
                    background: 'var(--color-primary)',
                    opacity: canSubmit ? 1 : 0.45,
                }}
            >
                Сохранить изменения
            </button>
        </div>
    );
};
