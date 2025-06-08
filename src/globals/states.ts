import { ThemeMode } from '@/globals/types';
import { atom } from 'jotai';

export const globalThemeAtom = atom<ThemeMode>(ThemeMode.DARK);
