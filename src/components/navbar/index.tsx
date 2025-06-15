import Image from 'next/image';
import { Nav, NavList, NavItem, NavLink, NavLogoWrapper, ActionWrapper, Subscribe } from './styles';
import { navLinks } from './contents';
import ThemeToggler from '@/components/themeToggler';
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
			<NavList>
				{navLinks.map(({ label, href }, id) => {
					return (
						<NavItem key={id}>
							<NavLink href={href}>{label}</NavLink>
						</NavItem>
					);
				})}
			</NavList>
			<ActionWrapper>
				<Subscribe variant="contained">Join</Subscribe>
				<ThemeToggler />
			</ActionWrapper>
		</Nav>
	);
}
