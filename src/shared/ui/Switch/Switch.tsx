interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

export const Switch = ({ checked, onChange, disabled }: SwitchProps) => (
    <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className="relative inline-flex h-[26px] w-[46px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none disabled:opacity-50"
        style={{ backgroundColor: checked ? 'var(--color-primary)' : 'var(--color-border)' }}
    >
        <span
            className="pointer-events-none inline-block h-[22px] w-[22px] rounded-full bg-white shadow-sm transition-transform duration-200"
            style={{ transform: checked ? 'translateX(20px)' : 'translateX(0)' }}
        />
    </button>
);
