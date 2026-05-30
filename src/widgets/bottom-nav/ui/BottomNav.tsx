import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Trophy, BarChart2, User } from 'lucide-react';

import { Icon } from '@shared/ui';

const NAV_ITEMS = [
    { to: '/', label: 'Главная', icon: Home, exact: true },
    { to: '/learn', label: 'Обучение', icon: BookOpen, exact: false },
    { to: '/challenges', label: 'Задания', icon: Trophy, exact: false },
    { to: '/progress', label: 'Прогресс', icon: BarChart2, exact: false },
    { to: '/profile', label: 'Профиль', icon: User, exact: false },
] as const;

export const BottomNav = () => {
    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-surface)] border-t border-[var(--color-border)]"
            style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
            <div className="max-w-[var(--container-max)] mx-auto flex items-stretch h-[60px]">
                {NAV_ITEMS.map(({ to, label, icon, exact }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={exact}
                        className="flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors"
                    >
                        {({ isActive }) => (
                            <>
                                <Icon
                                    as={icon}
                                    size={22}
                                    color={isActive ? 'var(--color-primary)' : 'var(--color-text-muted)'}
                                />
                                <span
                                    className="text-[10px] font-medium"
                                    style={{ color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)' }}
                                >
                                    {label}
                                </span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};
