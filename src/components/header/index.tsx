import Image from 'next/image';
import { HeaderWrapper, LinkWrapper, LogoWrapper } from './styles';
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
		</HeaderWrapper>
	);
}
