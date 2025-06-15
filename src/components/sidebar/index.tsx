import {
	SidebarWrapper,
	SidebarList,
	SidebarItem,
	SidebarLink,
	SidebarLogoWrapper,
	ActionWrapper,
	Subscribe,
} from './styles';
import { navLinks } from './contents';
import Image from 'next/image';
import ThemeToggler from '@/components/themeToggler';
import { useAtomValue } from 'jotai';
import { globalThemeAtom } from '@/globals/states';
import { ThemeMode } from '@/globals/types';

export default function Sidebar() {
	const globalTheme = useAtomValue(globalThemeAtom);

	return (
		<SidebarWrapper>
			<SidebarLogoWrapper>
				<SidebarLink href={'/'}>
					<Image
						width={50}
						height={30}
						alt="Logo"
						src={globalTheme === ThemeMode.DARK ? './globe.svg' : './next.svg'}
					/>
				</SidebarLink>
			</SidebarLogoWrapper>
			<SidebarList>
				{navLinks.map(({ label, href }, id) => {
					return (
						<SidebarItem key={id}>
							<SidebarLink href={href}>{label}</SidebarLink>
						</SidebarItem>
					);
				})}
			</SidebarList>
			<ActionWrapper>
				<Subscribe variant="contained">Join</Subscribe>
				<ThemeToggler />
			</ActionWrapper>
		</SidebarWrapper>
	);
}
