import clsx from 'clsx';
import { forwardRef, useState } from 'react';

import { FloatingInputProps } from './FloatingInput.props';

export const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
    ({ label, error, hint, className, onFocus, onBlur, onChange, value, defaultValue, id, ...rest }, ref) => {
        const [isFocused, setIsFocused] = useState(false);
        const [internalValue, setInternalValue] = useState<string>(
            (defaultValue as string) ?? '',
        );

        const controlledValue = value !== undefined ? String(value) : internalValue;
        const hasValue = controlledValue.length > 0;
        const isFloating = isFocused || hasValue;

        const inputId = id ?? `floating-input-${label.toLowerCase().replace(/\s+/g, '-')}`;

        return (
            <div className={clsx('relative w-full pb-5', className)}>
                <input
                    {...rest}
                    ref={ref}
                    id={inputId}
                    value={value !== undefined ? value : internalValue}
                    onChange={(e) => {
                        if (value === undefined) setInternalValue(e.target.value);
                        onChange?.(e);
                    }}
                    onFocus={(e) => {
                        setIsFocused(true);
                        onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setIsFocused(false);
                        onBlur?.(e);
                    }}
                    placeholder=""
                    style={{ fontSize: '16px' }}
                    className={clsx(
                        'peer w-full rounded-[var(--radius-md)] border bg-[var(--color-surface)] px-4 pb-2 pt-6',
                        'text-[var(--color-text-primary)] outline-none transition-all duration-150',
                        'min-h-[56px]',
                        error
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-[var(--color-border)] focus:border-[var(--color-primary)]',
                    )}
                />
                <label
                    htmlFor={inputId}
                    className={clsx(
                        'pointer-events-none absolute left-4 transition-all duration-150',
                        isFloating
                            ? 'top-2 text-xs text-[var(--color-text-secondary)]'
                            : 'top-1/2 -translate-y-[calc(50%+10px)] text-base text-[var(--color-text-muted)]',
                        isFocused && !error && 'text-[var(--color-primary)]',
                    )}
                >
                    {label}
                </label>
                {error && (
                    <p className="absolute bottom-0 left-0 text-xs text-red-500 leading-none">
                        {error}
                    </p>
                )}
                {!error && hint && (
                    <p className="absolute bottom-0 left-0 text-xs text-[var(--color-text-muted)] leading-none">
                        {hint}
                    </p>
                )}
            </div>
        );
    },
);

FloatingInput.displayName = 'FloatingInput';
