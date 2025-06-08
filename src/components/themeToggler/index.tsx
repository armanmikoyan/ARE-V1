import { useEffect } from 'react';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';
import TungstenIcon from '@mui/icons-material/Tungsten';
import { Toggler } from './styles';
import { useAtom } from 'jotai';
import { globalThemeAtom } from '@/globals/states';
import { ThemeMode } from '@/globals/types';

function ThemeToggle() {
	const [globalTheme, setGlobalTheme] = useAtom(globalThemeAtom);
	const isDark: boolean = globalTheme === ThemeMode.DARK;

	useEffect(() => {
		document.documentElement.classList.toggle(ThemeMode.DARK, isDark);
	}, [isDark]);

	const toggleTheme = () => {
		setGlobalTheme((prev) => (prev === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK));
	};

	return (
		<Toggler onClick={toggleTheme}>
			{isDark ? <TungstenIcon /> : <WbIncandescentOutlinedIcon />}
		</Toggler>
	);
}

export default ThemeToggle;
