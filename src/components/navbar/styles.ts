import { Button } from '@mui/material';
import styled from '@emotion/styled';
import Link from 'next/link';
import sx from '@/packages/styler';

export const Nav = styled.nav(
	sx({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'transparent',
		backdropFilter: 'blur(0.2rem)',
		padding: {
			_: '0.8rem 3rem',
			'<md': '0.8rem 2rem',
		},
		boxShadow: '0 0.1rem 1rem var(--color-primary)',
		fontWeight: 'var(--font-weight-bold)',
		margin: '1.5rem auto',
		borderRadius: 'var(--radius-xxxl)',
		width: '90%',
		fontSize: {
			_: 'var(--font-size-sm)',
			'<lg': 'var(--font-size-xs)',
		},
		position: 'sticky',
		top: '1.5rem',
	}),
);

export const NavLogoWrapper = styled.div(sx({}));

export const NavList = styled.ul(
	sx({
		display: 'flex',
		gap: {
			_: '2rem',
			'<lg': '0.5rem',
		},
		listStyleType: 'none',
	}),
);

export const NavItem = styled.li(
	sx({
		position: 'relative',
		cursor: 'pointer',
		padding: {
			_: '0.5rem 1rem',
			'<lg': '0.5rem',
			'<sm': '0.3rem',
		},
		transition: 'color 0.3s ease',
		'&::after': {
			content: '""',
			position: 'absolute',
			bottom: 0,
			left: '50%',
			width: 0,
			height: '0.05rem',
			backgroundColor: 'var(--color-text-primary)',
			transition: 'width 0.3s ease',
			transformOrigin: 'center',
			transform: 'translateX(-50%)',
		},

		'&:hover::after': {
			width: '70%',
		},
	}),
);

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
		color: 'var(--color-text-secondary)',
		backgroundColor: 'var(--color-primary)',
		transition: 'background-color 0.3s ease, color 0.3s ease',
		'&:hover': {
			backgroundColor: 'var(--color-secondary)',
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

export const LogIn = styled(Button)(
	sx({
		fontWeight: 'var(--font-weight-semibold)',
		color: 'var(--color-text-primary)',
		border: '1px solid var(--color-primary)',
		transition: 'border 0.3s ease, opacity 0.3s ease',
		'&:hover': {
			opacity: '0.7',
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
