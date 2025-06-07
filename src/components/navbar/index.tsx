import { Nav, NavItems, NavItem, NavLink } from './styles';
import { navLinks } from './content';

export default function Navbar() {
	return (
		<Nav>
			<NavItems>
				{navLinks.map(({ label, href }, id) => {
					return (
						<NavItem key={id}>
							<NavLink href={href}>{label}</NavLink>
						</NavItem>
					);
				})}
			</NavItems>
		</Nav>
	);
}
