import {
	Nav,
	NavList,
	NavItem,
	NavLink,
	NavLogoWrapper,
	ActionWrapper,
	Subscribe,
	LogIn,
} from './styles';
import { navLinks } from './content';
import Image from 'next/image';
import ThemeToggler from '@/components/themeToggler';

export default function Navbar() {
	return (
		<Nav>
			<NavLogoWrapper>
				<NavLink href={'/'}>
					<Image width={30} height={30} alt="logo" src={'./vercel.svg'} />
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
				<Subscribe variant="contained">Subscribe</Subscribe>
				<LogIn variant="outlined">Log In</LogIn>
				<ThemeToggler />
			</ActionWrapper>
		</Nav>
	);
}
