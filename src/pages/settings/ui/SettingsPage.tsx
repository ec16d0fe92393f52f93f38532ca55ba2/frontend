import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { Icon } from '@shared/ui';

import { ProfileSection } from './ProfileSection';
import { NotificationsSection } from './NotificationsSection';
import { SecuritySection } from './SecuritySection';
import { AppSection } from './AppSection';

export const SettingsPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-4 animate-fade-in-up">
            <div className="flex items-center gap-3">
                <button type="button" onClick={() => navigate(-1)} className="w-9 h-9 rounded-full border flex items-center justify-center"
                    style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                    <Icon as={ArrowLeft} size={18} color="var(--color-text-primary)" />
                </button>
                <div className="text-[18px] font-bold" style={{ color: 'var(--color-text-primary)' }}>Настройки</div>
            </div>
            <ProfileSection />
            <NotificationsSection />
            <SecuritySection />
            <AppSection />
        </div>
    );
};
