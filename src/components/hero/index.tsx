import { HeroWrapper, TextForm, TextArea, HeroContent, HeroTitle, HeroParagraph } from './styles';
import Space from '@/packages/space';
import { PLACEHOLDER_TEXT, TITLE_TEXT, PARAGRAPH_TEXT } from './constants';

export default function Hero() {
	return (
		<HeroWrapper>
			<Space />
			<HeroContent>
				<HeroTitle>{TITLE_TEXT}</HeroTitle>
				<HeroParagraph>{PARAGRAPH_TEXT}</HeroParagraph>
			</HeroContent>
			<TextForm>
				<TextArea name="Image description" placeholder={PLACEHOLDER_TEXT} />
			</TextForm>
		</HeroWrapper>
	);
}
