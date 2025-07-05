import Image from 'next/image';
import { HeaderWrapper, LinkWrapper, LogoWrapper, ActionWrapper, Join } from './styles';
import ThemeToggler from '@/components/theme-toggler';
import { ThemeMode } from '@/globals/types';
import { globalThemeAtom } from '@/globals/states';
import { useAtomValue } from 'jotai';

export default function Header() {
	const themeMode: string = useAtomValue(globalThemeAtom) === ThemeMode.DARK ? 'white' : 'black';

	return (
		<HeaderWrapper>
			<LogoWrapper>
				<LinkWrapper href={'/'}>
					<Image width={150} height={50} alt="Logo" src={`./icons/logo-${themeMode}.svg`} />
				</LinkWrapper>
			</LogoWrapper>
			<ActionWrapper>
				<Join variant="contained">Get API key</Join>
				<ThemeToggler />
			</ActionWrapper>
		</HeaderWrapper>
	);
}
