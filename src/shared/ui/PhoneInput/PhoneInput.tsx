import { forwardRef, useState } from 'react';

import { FloatingInput } from '../FloatingInput';

interface PhoneInputProps {
    label?: string;
    error?: string;
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    name?: string;
}

const formatPhone = (raw: string): string => {
    let digits = raw.replace(/\D/g, '');

    if (digits.startsWith('7') || digits.startsWith('8')) {
        digits = digits.slice(1);
    }
    digits = digits.slice(0, 10);

    let result = '+7';
    if (digits.length > 0) result += ` (${digits.slice(0, 3)}`;
    if (digits.length >= 3) result += ')';
    if (digits.length > 3) result += ` ${digits.slice(3, 6)}`;
    if (digits.length > 6) result += `-${digits.slice(6, 8)}`;
    if (digits.length > 8) result += `-${digits.slice(8, 10)}`;

    return result;
};

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
    ({ label = 'Телефон', error, value, onChange, onBlur, name }, ref) => {
        const [display, setDisplay] = useState(value ? formatPhone(value) : '');

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const formatted = formatPhone(e.target.value);
            setDisplay(formatted);
            onChange?.(formatted);
        };

        return (
            <FloatingInput
                ref={ref}
                name={name}
                label={label}
                error={error}
                type="tel"
                value={display}
                onChange={handleChange}
                onBlur={onBlur}
            />
        );
    },
);

PhoneInput.displayName = 'PhoneInput';
