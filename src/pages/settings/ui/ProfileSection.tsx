import { useState } from 'react';
import { User } from 'lucide-react';
import { toast } from 'react-toastify';

import { selectUser, useUpdateMeMutation } from '@entities/user';

import { Icon, FloatingInput } from '@shared/ui';
import { useAppSelector } from '@shared/hooks';

export const ProfileSection = () => {
    const user = useAppSelector(selectUser);
    const [updateMe, { isLoading }] = useUpdateMeMutation();

    const [name, setName] = useState(user ? `${user.firstname} ${user.lastname}` : '');
    const [email, setEmail] = useState(user?.email ?? '');

    const handleSave = async () => {
        const parts = name.trim().split(' ');
        const firstname = parts[0] ?? '';
        const lastname = parts.slice(1).join(' ') || firstname;
        try {
            await updateMe({ firstname, lastname, email }).unwrap();
            toast.success('Профиль обновлён');
        } catch {
            toast.error('Ошибка сохранения');
        }
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
            <button
                type="button"
                onClick={() => void handleSave()}
                disabled={isLoading}
                className="btn-press w-full py-3 rounded-[14px] text-[14px] font-semibold text-white"
                style={{ background: 'var(--color-primary)', opacity: isLoading ? 0.6 : 1 }}
            >
                Сохранить
            </button>
        </div>
    );
};
