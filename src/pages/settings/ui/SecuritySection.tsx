import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

import { Switch, Icon } from '@shared/ui';

export const SecuritySection = () => {
    const [faceId, setFaceId] = useState(true);

    return (
        <div className="rounded-[18px] p-4 border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="text-[12px] font-semibold mb-3" style={{ color: 'var(--color-text-muted)' }}>БЕЗОПАСНОСТЬ</div>
            <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: 'var(--color-border)' }}>
                <div>
                    <div className="text-[13px] font-medium" style={{ color: 'var(--color-text-primary)' }}>Face ID / Touch ID</div>
                    <div className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>Вход по биометрии</div>
                </div>
                <Switch checked={faceId} onChange={setFaceId} />
            </div>
            <div className="flex items-center justify-between py-2">
                <div>
                    <div className="text-[13px] font-medium" style={{ color: 'var(--color-text-primary)' }}>Изменить пароль</div>
                    <div className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>Обновлён 3 месяца назад</div>
                </div>
                <Icon as={ChevronRight} size={16} color="var(--color-text-muted)" />
            </div>
        </div>
    );
};
