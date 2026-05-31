import { useState } from 'react';
import { User } from 'lucide-react';
import { toast } from 'react-toastify';

import { selectUser, updateProfile } from '@entities/user';

import { Icon, FloatingInput } from '@shared/ui';
import { useAppDispatch, useAppSelector } from '@shared/hooks';

export const ProfileSection = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);

    const [name, setName] = useState(user ? `${user.firstname} ${user.lastname}` : '');
    const [email, setEmail] = useState(user?.email ?? '');

    const handleSave = () => {
        const parts = name.trim().split(' ');
        const firstname = parts[0] ?? '';
        const lastname = parts.slice(1).join(' ') || firstname;
        dispatch(updateProfile({ firstname, lastname, email }));
        toast.success('Профиль обновлён');
    };

    return (
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
            <FloatingInput label="Имя" value={name} onChange={(e) => setName(e.target.value)} />
            <FloatingInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FloatingInput label="Название приложения" defaultValue="Voronka" />
            <button type="button" onClick={handleSave} className="btn-press w-full py-3 rounded-[14px] text-[14px] font-semibold text-white"
                style={{ background: 'var(--color-primary)' }}>
                Сохранить
            </button>
        </div>
    );
};
