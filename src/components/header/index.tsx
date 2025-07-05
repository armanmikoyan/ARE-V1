import Image from 'next/image';
import { HeaderWrapper, LogoName, LinkWrapper, LogoWrapper, ActionWrapper, Join } from './styles';
import ThemeToggler from '@/components/theme-toggler';

export default function Header() {
	return (
		<HeaderWrapper>
			<LogoWrapper>
				<LinkWrapper href={'/'}>
					<Image width={50} height={30} alt="Logo" src={'./globe.svg'} />
					<LogoName>Promptix</LogoName>
				</LinkWrapper>
			</LogoWrapper>
			<ActionWrapper>
				<Join variant="contained">Get API key</Join>
				<ThemeToggler />
			</ActionWrapper>
		</HeaderWrapper>
	);
}
