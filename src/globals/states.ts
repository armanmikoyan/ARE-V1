import { atom } from 'jotai';
import { ThemeMode } from '@/globals/types';

export const globalThemeAtom = atom<ThemeMode | null>(null);
