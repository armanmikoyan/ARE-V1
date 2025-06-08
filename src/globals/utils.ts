import { ThemeMode } from '@/globals/types';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { globalThemeAtom } from './states';

export function InitGlobalTheme() {
	const setTheme = useSetAtom(globalThemeAtom);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const stored = localStorage.getItem('themeMode');
			if (stored === ThemeMode.DARK || stored === ThemeMode.LIGHT) {
				setTheme(stored as ThemeMode);
			} else {
				setTheme(ThemeMode.DARK);
			}
		}
	}, [setTheme]);

	return null;
}
