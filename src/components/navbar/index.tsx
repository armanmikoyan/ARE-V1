import Image from 'next/image';
import { Nav, NavLink, NavLogoWrapper, ActionWrapper, Subscribe } from './styles';
import ThemeToggler from '@/components/theme-toggler';
import { useAtomValue } from 'jotai';
import { ThemeMode } from '@/globals/types';
import { globalThemeAtom } from '@/globals/states';

export default function Navbar() {
	const globalTheme = useAtomValue(globalThemeAtom);

	return (
		<Nav>
			<NavLogoWrapper>
				<NavLink href={'/'}>
					<Image
						width={50}
						height={30}
						alt="Logo"
						src={globalTheme === ThemeMode.DARK ? './globe.svg' : './next.svg'}
					/>
				</NavLink>
			</NavLogoWrapper>
			<ActionWrapper>
				<Subscribe variant="contained">Join</Subscribe>
				<ThemeToggler />
			</ActionWrapper>
		</Nav>
	);
}
