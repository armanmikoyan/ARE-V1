import { Button } from '@mui/material';
import styled from '@emotion/styled';
import Link from 'next/link';
import sx from '@/packages/styler';

export const Nav = styled.nav(
	sx({
		display: {
			_: 'flex',
			'<sm': 'none',
		},
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'transparent',
		padding: {
			_: '0.8rem 3rem',
			'<md': '0.8rem 2rem',
		},
		fontWeight: 'var(--font-weight-bold)',
		margin: '1.5rem auto',
		marginTop: '0',
		borderRadius: 'var(--radius-xxxl)',
		width: '90%',
		maxWidth: 'var(--application-max-width)',
		fontSize: {
			_: 'var(--font-size-sm)',
			'<lg': 'var(--font-size-xs)',
		},
		position: 'sticky',
		top: '1.5rem',
	}),
);

export const NavLogoWrapper = styled.div(sx({}));

export const NavLink = styled(Link)(sx({}));

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

export const Subscribe = styled(Button)(
	sx({
		fontWeight: 'var(--font-weight-semibold)',
		color: 'var(--color-primary)',
		backgroundColor: 'var(--color-accent)',
		transition: 'background-color 0.3s ease, color 0.3s ease',
		'&:hover': {
			backgroundColor: 'var(--color-accent-hover)',
			color: 'var(--color-primary-hover)',
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
