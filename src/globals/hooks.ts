import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { globalThemeAtom } from '@/globals/states';
import { ThemeMode } from '@/globals/types';

/**
 * Custom hook to initialize global theme from localStorage on client-side.
 * It will sync the global theme atom with saved preference or default to DARK.
 */
export function useInitGlobalTheme() {
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
}
