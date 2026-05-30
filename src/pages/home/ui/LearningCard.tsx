import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import { Icon } from '@shared/ui';

export const LearningCard = () => {
    const navigate = useNavigate();
    return (
        <button type="button" onClick={() => navigate('/learn')}
            className="card-interactive w-full rounded-[18px] p-[14px_16px] border flex items-center justify-between"
            style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="flex items-center gap-3">
                <div className="w-[42px] h-[42px] rounded-[14px] border flex items-center justify-center shrink-0"
                    style={{ background: 'var(--color-primary-light)', borderColor: '#d0e8c8' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#89B776" strokeWidth="2">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                </div>
                <div className="text-left">
                    <div className="text-[13px] font-bold" style={{ color: 'var(--color-text-primary)' }}>Обучение</div>
                    <div className="text-[11px] mt-[2px]" style={{ color: 'var(--color-text-muted)' }}>Основы финансовой грамотности</div>
                </div>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--color-primary)' }}>
                <Icon as={ChevronRight} size={13} color="#fff" />
            </div>
        </button>
    );
};
