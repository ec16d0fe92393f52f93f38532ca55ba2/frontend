import { NavLink } from 'react-router-dom';
import { Home, Leaf, Plus, MessageCircle, User } from 'lucide-react';

import { Icon } from '@shared/ui';

const NAV_ITEMS = [
    { to: '/', label: 'Главная', icon: Home, exact: true, fab: false },
    { to: '/dream', label: 'Мечта', icon: Leaf, exact: false, fab: false },
    { to: '/camera', label: 'Камера', icon: Plus, exact: false, fab: true },
    { to: '/chat', label: 'Чат', icon: MessageCircle, exact: false, fab: false },
    { to: '/profile', label: 'Профиль', icon: User, exact: false, fab: false },
] as const;

export const BottomNav = () => (
    <nav
        className="fixed bottom-0 left-0 right-0 z-50 border-t"
        style={{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
            paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
    >
        <div className="max-w-[var(--container-max)] mx-auto flex items-end h-[60px]">
            {NAV_ITEMS.map(({ to, label, icon, exact, fab }) => (
                <NavLink key={to} to={to} end={exact} className="flex-1 flex flex-col items-center justify-end pb-2.5 gap-1">
                    {({ isActive }) =>
                        fab ? (
                            <>
                                <div
                                    className="fab-pulse w-[54px] h-[54px] flex items-center justify-center rounded-[18px] -translate-y-3"
                                    style={{ background: 'var(--color-primary)' }}
                                >
                                    <Icon as={icon} size={24} color="#fff" />
                                </div>
                                <span className="text-[10px]" style={{ color: 'var(--color-text-faint)' }}>{label}</span>
                            </>
                        ) : (
                            <>
                                <div
                                    className="w-[40px] h-[28px] flex items-center justify-center rounded-[14px] transition-colors"
                                    style={{ background: isActive ? 'var(--color-primary-light)' : 'transparent' }}
                                >
                                    <Icon as={icon} size={19} color={isActive ? 'var(--color-primary-dark)' : 'var(--color-text-faint)'} />
                                </div>
                                <span
                                    className="text-[10px] font-medium transition-colors"
                                    style={{ color: isActive ? 'var(--color-primary-dark)' : 'var(--color-text-faint)' }}
                                >
                                    {label}
                                </span>
                            </>
                        )
                    }
                </NavLink>
            ))}
        </div>
    </nav>
);
