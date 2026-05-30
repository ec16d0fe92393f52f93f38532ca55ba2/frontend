import { useNavigate } from 'react-router-dom';
import { Settings, User } from 'lucide-react';

import { Icon } from '@shared/ui';
import { MOCK_USER } from '@shared/mocks';

export const ProfileHeader = () => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-[52px] h-[52px] rounded-full border-2 flex items-center justify-center shrink-0"
                    style={{ background: 'var(--color-primary-light)', borderColor: '#DCEBD4' }}>
                    <Icon as={User} size={26} color="var(--color-primary)" />
                </div>
                <div>
                    <div className="text-[16px] font-bold" style={{ color: 'var(--color-text-primary)' }}>
                        {MOCK_USER.firstName} {MOCK_USER.lastName}
                    </div>
                    <div className="flex items-center gap-[5px] mt-[2px]">
                        <div className="w-[7px] h-[7px] rounded-full" style={{ background: 'var(--color-primary)' }} />
                        <span className="text-[12px] font-medium" style={{ color: 'var(--color-primary)' }}>
                            Уровень 6 · Растущий разум
                        </span>
                    </div>
                </div>
            </div>
            <button type="button" onClick={() => navigate('/settings')}
                className="w-9 h-9 rounded-full border flex items-center justify-center"
                style={{ background: 'var(--color-surface-alt)', borderColor: 'var(--color-border)' }}>
                <Icon as={Settings} size={17} color="var(--color-text-primary)" />
            </button>
        </div>
    );
};
