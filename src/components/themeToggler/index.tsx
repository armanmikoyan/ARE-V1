import { useEffect, useRef } from 'react';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';
import TungstenIcon from '@mui/icons-material/Tungsten';
import { Toggler } from './styles';
import { useAtom } from 'jotai';
import { globalThemeAtom } from '@/globals/states';
import { ThemeMode } from '@/globals/types';

function ThemeToggle() {
	const [globalTheme, setGlobalTheme] = useAtom(globalThemeAtom);
	const isDark: boolean = globalTheme === ThemeMode.DARK;
	const toggleSound = useRef<HTMLAudioElement | null>(null);

	const toggleTheme = () => {
		setGlobalTheme((prev) => (prev === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK));

		if (toggleSound.current) {
			toggleSound.current.currentTime = 0;
			toggleSound.current.play();
		}
	};

	useEffect(() => {
		document.documentElement.classList.toggle(ThemeMode.DARK, isDark);
	}, [isDark]);

	useEffect(() => {
		toggleSound.current = new Audio('./themeModeSound.mp3');
	}, []);

	return (
		<Toggler onClick={toggleTheme}>
			{isDark ? <TungstenIcon /> : <WbIncandescentOutlinedIcon />}
		</Toggler>
	);
}

export default ThemeToggle;
