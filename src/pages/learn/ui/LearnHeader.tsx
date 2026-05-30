import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { Icon } from '@shared/ui';

export const LearnHeader = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
                <button type="button" onClick={() => navigate(-1)}
                    className="btn-press w-9 h-9 rounded-full border flex items-center justify-center"
                    style={{ background: 'var(--color-surface-alt)', borderColor: 'var(--color-border)' }}>
                    <Icon as={ArrowLeft} size={16} color="var(--color-text-primary)" />
                </button>
                <div>
                    <div className="text-[18px] font-bold" style={{ color: 'var(--color-text-primary)' }}>Обучение</div>
                    <div className="text-[12px] mt-[1px]" style={{ color: 'var(--color-text-muted)' }}>Финансовая грамотность</div>
                </div>
            </div>
            <div className="flex items-center gap-[5px] rounded-[20px] px-3 py-[6px] border"
                style={{ background: 'var(--color-surface-alt)', borderColor: 'var(--color-border)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#89B776" strokeWidth="2">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
                <span className="text-[13px] font-bold" style={{ color: 'var(--color-text-primary)' }}>120 XP</span>
            </div>
        </div>
    );
};
