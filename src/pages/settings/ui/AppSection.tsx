import { ChevronRight, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useLogoutMutation } from '@features/auth';

import { removeUser } from '@entities/user';

import { Icon } from '@shared/ui';
import { useAppDispatch } from '@shared/hooks';

const APP_ITEMS = [
    { label: 'Язык', value: 'Русский' },
    { label: 'Обратная связь', value: '' },
    { label: 'О приложении', value: 'v1.0.0' },
];

export const AppSection = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [logout] = useLogoutMutation();

    const handleLogout = async () => {
        try {
            await logout().unwrap();
        } finally {
            localStorage.removeItem('accessToken');
            dispatch(removeUser());
            navigate('/auth/login', { replace: true });
        }
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="rounded-[18px] p-4 border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                <div className="text-[12px] font-semibold mb-3" style={{ color: 'var(--color-text-muted)' }}>ПРИЛОЖЕНИЕ</div>
                <div className="flex flex-col divide-y divide-[var(--color-border)]">
                    {APP_ITEMS.map((item) => (
                        <div key={item.label} className="row-hover flex items-center justify-between py-3 px-2 -mx-2">
                            <div className="text-[13px] font-medium" style={{ color: 'var(--color-text-primary)' }}>{item.label}</div>
                            <div className="flex items-center gap-2">
                                {item.value && <span className="text-[12px]" style={{ color: 'var(--color-text-muted)' }}>{item.value}</span>}
                                <Icon as={ChevronRight} size={16} color="var(--color-text-muted)" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                type="button"
                onClick={() => void handleLogout()}
                className="btn-press w-full py-3.5 rounded-[14px] text-[14px] font-semibold flex items-center justify-center gap-2 border"
                style={{ background: 'var(--color-expense-light)', color: 'var(--color-expense)', borderColor: 'var(--color-expense)' }}
            >
                <Icon as={LogOut} size={16} color="var(--color-expense)" />
                Выйти из аккаунта
            </button>
        </div>
    );
};
