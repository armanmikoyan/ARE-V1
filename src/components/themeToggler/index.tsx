import { useState, useEffect } from 'react';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';
import TungstenIcon from '@mui/icons-material/Tungsten';
import { Toggler } from './styles';

function ThemeToggle() {
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		const root = document.documentElement;
		if (isDark) {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
	}, [isDark]);

	return (
		<Toggler onClick={() => setIsDark((prev) => !prev)}>
			{isDark ? <TungstenIcon /> : <WbIncandescentOutlinedIcon />}
		</Toggler>
	);
}

export default ThemeToggle;
