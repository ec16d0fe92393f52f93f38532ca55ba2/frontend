import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import { Icon } from '@shared/ui';

export const TreeDecorateCard = () => {
    const navigate = useNavigate();
    return (
        <button type="button" onClick={() => navigate('/market')}
            className="card-interactive w-full rounded-[18px] p-[14px_16px] border flex items-center justify-between"
            style={{ background: 'var(--color-surface-alt)', borderColor: '#e0ecda' }}>
            <div className="flex items-center gap-3">
                <div className="w-[42px] h-[42px] flex items-center justify-center relative shrink-0">
                    <svg width="42" height="42" viewBox="0 0 42 42">
                        <polygon points="21,2 38,11.5 38,30.5 21,40 4,30.5 4,11.5" fill="#89B776" />
                    </svg>
                    <svg style={{ position: 'absolute' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
                        <path d="M12 22V14" /><path d="M12 14C12 10 8 7 4 8c0 4 2 7 8 6" /><path d="M12 14C12 10 16 7 20 8c0 4-2 7-8 6" />
                    </svg>
                    <div className="absolute -top-[3px] -right-[3px] w-[11px] h-[11px] rounded-full border-[1.5px] border-white"
                        style={{ background: 'var(--color-gold)' }} />
                </div>
                <div className="text-left">
                    <div className="text-[13px] font-bold" style={{ color: 'var(--color-text-primary)' }}>Украсить дерево</div>
                    <div className="text-[11px] mt-[2px]" style={{ color: 'var(--color-primary)' }}>Новые скины · Сезонные наряды</div>
                </div>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--color-primary)' }}>
                <Icon as={ChevronRight} size={13} color="#fff" />
            </div>
        </button>
    );
};
