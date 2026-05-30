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
            <div className={clsx('w-full', className)}>
                <div className="relative">
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
                                : 'top-1/2 -translate-y-1/2 text-base text-[var(--color-text-muted)]',
                            isFocused && !error && 'text-[var(--color-primary)]',
                        )}
                    >
                        {label}
                    </label>
                </div>
                {error && (
                    <p className="mt-1 text-xs text-red-500">{error}</p>
                )}
                {!error && hint && (
                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">{hint}</p>
                )}
            </div>
        );
    },
);

FloatingInput.displayName = 'FloatingInput';
