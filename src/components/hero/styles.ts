import styled from '@emotion/styled';
import sx from '@/packages/styler';

export const HeroWrapper = styled.section(
	sx({
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100vh',
		zIndex: -2,
		backgroundImage:
			'linear-gradient(to right, #1c1b1b 1px, transparent 1px), linear-gradient(to bottom, #1c1b1b 1px, transparent 1px)',
		backgroundSize: '0.5rem 0.5rem',
	}),
);
