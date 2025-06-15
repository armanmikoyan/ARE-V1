import { useState } from 'react';
import {
	SidebarWrapper,
	SidebarList,
	SidebarItem,
	SidebarLink,
	SidebarLogoWrapper,
	ActionWrapper,
	Subscribe,
	Expand,
	ButtonGroup,
} from './styles';
import { navLinks } from './contents';
import Image from 'next/image';
import ThemeToggler from '@/components/themeToggler';
import { useAtomValue } from 'jotai';
import { globalThemeAtom } from '@/globals/states';
import { ThemeMode } from '@/globals/types';
import ExpandIcon from '@mui/icons-material/ExpandMore';
import UnExpandIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Sidebar() {
	const globalTheme = useAtomValue(globalThemeAtom);
	const [isExpanded, setIsExpanded] = useState(true);

	const toggleExpandedHandler = () => setIsExpanded((prev) => !prev);

	return (
		<SidebarWrapper isExpanded={isExpanded}>
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
			{
				<SidebarList isExpanded={isExpanded}>
					{navLinks.map(({ label, href }, id) => {
						return (
							<SidebarItem key={id} isExpanded={isExpanded}>
								<SidebarLink href={href}>{label}</SidebarLink>
							</SidebarItem>
						);
					})}
				</SidebarList>
			}
			<ActionWrapper>
				<ButtonGroup isExpanded={isExpanded}>
					<Subscribe variant="contained">Join</Subscribe>
					<ThemeToggler />
				</ButtonGroup>
				<Expand onClick={toggleExpandedHandler}>
					{isExpanded ? <UnExpandIcon /> : <ExpandIcon />}
				</Expand>
			</ActionWrapper>
		</SidebarWrapper>
	);
}
