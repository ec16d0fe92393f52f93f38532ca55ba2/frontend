interface Tab<T extends string> {
    value: T;
    label: string;
}

interface TabsProps<T extends string> {
    tabs: readonly Tab<T>[];
    active: T;
    onChange: (value: T) => void;
    variant?: 'default' | 'expense';
}

export const Tabs = <T extends string>({ tabs, active, onChange, variant = 'default' }: TabsProps<T>) => (
    <div className="flex rounded-xl overflow-hidden border" style={{ borderColor: 'var(--color-border)' }}>
        {tabs.map((tab) => {
            const isActive = tab.value === active;
            const activeColor = variant === 'expense' && tab.value === 'expense'
                ? 'var(--color-expense)'
                : 'var(--color-primary)';

            return (
                <button
                    key={tab.value}
                    type="button"
                    onClick={() => onChange(tab.value)}
                    className="flex-1 py-3 text-sm font-semibold transition-colors"
                    style={{
                        backgroundColor: isActive ? activeColor : 'var(--color-surface)',
                        color: isActive ? '#fff' : 'var(--color-text-muted)',
                    }}
                >
                    {tab.label}
                </button>
            );
        })}
    </div>
);
