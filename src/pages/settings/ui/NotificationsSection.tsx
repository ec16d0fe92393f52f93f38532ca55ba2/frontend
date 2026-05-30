import { useState } from 'react';

import { Switch } from '@shared/ui';

const NOTIFICATIONS = [
    { id: 'daily', label: 'Напоминание о задачах', sub: 'Каждый день в 10:00', default: true },
    { id: 'weekly', label: 'Еженедельный отчёт', sub: 'По прогрессу цели', default: true },
    { id: 'budget', label: 'Превышение бюджета', sub: 'Уведомление об отклонении', default: false },
];

export const NotificationsSection = () => {
    const [states, setStates] = useState<Record<string, boolean>>(
        Object.fromEntries(NOTIFICATIONS.map((n) => [n.id, n.default]))
    );

    return (
        <div className="rounded-[18px] p-4 border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="text-[12px] font-semibold mb-3" style={{ color: 'var(--color-text-muted)' }}>УВЕДОМЛЕНИЯ</div>
            <div className="flex flex-col gap-0 divide-y divide-[var(--color-border)]">
                {NOTIFICATIONS.map((n) => (
                    <div key={n.id} className="flex items-center justify-between py-3">
                        <div>
                            <div className="text-[13px] font-medium" style={{ color: 'var(--color-text-primary)' }}>{n.label}</div>
                            <div className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>{n.sub}</div>
                        </div>
                        <Switch checked={states[n.id]} onChange={(v) => setStates((s) => ({ ...s, [n.id]: v }))} />
                    </div>
                ))}
            </div>
        </div>
    );
};
