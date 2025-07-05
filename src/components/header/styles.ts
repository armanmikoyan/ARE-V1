import { Button } from '@mui/material';
import styled from '@emotion/styled';
import Link from 'next/link';
import sx from '@/packages/styler';

export const HeaderWrapper = styled.header(
	sx({
		display: {
			_: 'flex',
		},
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'transparent',
		padding: {
			_: '1rem',
			'<sm': '1rem 0.5rem',
		},
		fontWeight: 'var(--font-weight-bold)',
		margin: '0rem auto',

		width: '100%',
		maxWidth: 'var(--application-max-width)',
		fontSize: {
			_: 'var(--font-size-sm)',
			'<lg': 'var(--font-size-xs)',
		},
		position: 'sticky',
		borderBottom: '0.1rem solid var(--color-primary)',
	}),
);

export const LogoWrapper = styled.div(sx({}));

export const LogoName = styled.strong(
	sx({
		fontSize: {
			_: 'var(--font-size-xl)',
			'<lg': 'var(--font-size-md)',
		},
		color: 'var(--color-primary)',
	}),
);

export const LinkWrapper = styled(Link)(
	sx({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}),
);

export const ActionWrapper = styled.div(
	sx({
		display: 'flex',
		alignItems: 'center',
		gap: {
			_: '1rem',
			'<lg': '0.5rem',
		},
	}),
);

export const Join = styled(Button)(
	sx({
		fontFamily: 'inherit',
		fontWeight: 'var(--font-weight-semibold)',
		backgroundColor: 'var(--color-accent)',
		color: 'var(--color-primary-hover)',
		transition: 'background-color 0.3s ease, color 0.3s ease',
		'&:hover': {
			color: 'var(--color-primary)',
			backgroundColor: 'var(--color-accent-hover)',
		},
		fontSize: {
			_: 'var(--font-size-sm)',
			'<lg': 'var(--font-size-xs)',
		},
		padding: {
			_: null,
			'<lg': '0.2rem 0.8rem',
		},
	}),
);
