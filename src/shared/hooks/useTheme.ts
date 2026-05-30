import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'app-theme';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(STORAGE_KEY) as Theme) ?? 'light',
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }, []);

    return { theme, toggleTheme };
};
