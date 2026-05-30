import { User } from 'lucide-react';

import { Icon, FloatingInput } from '@shared/ui';
import { MOCK_USER } from '@shared/mocks';

export const ProfileSection = () => (
    <div className="rounded-[18px] p-4 border flex flex-col gap-4" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
        <div className="text-[12px] font-semibold" style={{ color: 'var(--color-text-muted)' }}>ПРОФИЛЬ</div>
        <div className="flex flex-col items-center gap-3">
            <div className="relative">
                <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center"
                    style={{ background: 'var(--color-primary-light)' }}>
                    <Icon as={User} size={34} color="var(--color-primary)" />
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white text-[12px]"
                    style={{ background: 'var(--color-primary)' }}>✎</div>
            </div>
        </div>
        <FloatingInput label="Имя" defaultValue={MOCK_USER.firstName + ' ' + MOCK_USER.lastName} />
        <FloatingInput label="Email" type="email" defaultValue={MOCK_USER.email} />
        <FloatingInput label="Название приложения" defaultValue={MOCK_USER.appName} />
        <button type="button" className="w-full py-3 rounded-[14px] text-[14px] font-semibold text-white"
            style={{ background: 'var(--color-primary)' }}>
            Сохранить
        </button>
    </div>
);
