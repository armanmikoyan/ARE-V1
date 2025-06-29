import styled from '@emotion/styled';
import sx from '@/packages/styler';

export const HeroWrapper = styled.section(
	sx({
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100vh',
		zIndex: -1,
	}),
);

export const CTAWrapper = styled.div(
	sx({
		position: 'absolute',
		top: '70%',
		left: '50%',
		display: 'flex',
		justifyContent: {
			_: 'space-around',
			'<lg': 'center',
		},
		alignItems: 'center',
		flexDirection: {
			_: 'row',
			'<lg': 'column',
		},
		gap: {
			_: '3rem',
			'<lg': '1rem',
		},
		boxShadow: '0 0.1rem 1rem var(--color-primary)',
		borderRadius: 'var(--radius-xxxl)',
		color: 'white',
		padding: '2rem',
		transform: 'translate(-50%, -70%)',
		width: '90%',
		height: 'auto',
		maxHeight: '100vh',
		minHeight: '70vh',
		maxWidth: 'var(--application-max-width)',
		backdropFilter: 'blur(0.5rem)',
	}),
);

export const CTAContent = styled.div(
	sx({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		gap: {
			_: '2rem',
			'<lg': '1rem',
		},
	}),
);

export const CTAText = styled.div(sx({}));

export const CTAButton = styled.div(sx({}));

export const CTAImg = styled.div(sx({}));
