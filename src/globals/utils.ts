import { ThemeMode } from '@/globals/types';

export const getInitialTheme = (): ThemeMode => {
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem('themeMode');
		if (stored === ThemeMode.DARK || stored === ThemeMode.LIGHT) {
			return stored as ThemeMode;
		}
	}
	return ThemeMode.DARK;
};
