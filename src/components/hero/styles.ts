import styled from '@emotion/styled';
import sx from '@/packages/styler';

export const HeroWrapper = styled.section(
	sx({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '3rem',
		padding: '1rem',
		gap: '5rem',
	}),
);

export const TextForm = styled.form(
	sx({
		width: '30rem',
		height: '7rem',
	}),
);

export const TextArea = styled.textarea(
	sx({
		backgroundColor: 'var(--color-accent-hover)',
		resize: 'none',
		fontSize: 'var(--font-size-md)',
		padding: '0.7rem',
		color: 'var(--color-primary)',
		height: '100%',
		width: '100%',
		borderRadius: 'var(--radius-sm)',
		'&:focus-within': {
			outline: '0.01rem solid var(--color-primary)',
		},
	}),
);

export const HeroContent = styled.div(
	sx({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'var(--color-primary)',
		gap: '1rem',
	}),
);

export const HeroTitle = styled.h1(
	sx({
		fontSize: 'var(--font-size-3xl)',
		fontWeight: 'var(--font-weight-bold)',
	}),
);

export const HeroParagraph = styled.p(
	sx({
		maxWidth: '24rem',
		textAlign: 'center',
		color: 'var(--color-accent)',
		lineHeight: '1.8rem',
		fontSize: 'var(--font-size-xl)',
	}),
);
