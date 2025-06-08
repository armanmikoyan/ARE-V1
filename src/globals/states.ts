import { atom } from 'jotai';
import { ThemeMode } from '@/globals/types';
import { getInitialTheme } from '@/globals/utils';

export const globalThemeAtom = atom<ThemeMode>(getInitialTheme());
