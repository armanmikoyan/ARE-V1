import { Button } from '@mui/material';
import styled from '@emotion/styled';
import Link from 'next/link';

export const Nav = styled.nav({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	backgroundColor: 'transparent',
	backdropFilter: 'blur(0.2rem)',
	padding: '1.5rem 3rem',
	boxShadow: '0 0.1rem 1rem var(--color-primary)',
	fontWeight: 'var(--font-weight-bold)',
	fontSize: 'var(--font-size-sm)',
	position: 'sticky',
	top: '0',
});

export const NavLogoWrapper = styled.div({});

export const NavList = styled.ul({
	display: 'flex',
	gap: '2rem',
	listStyleType: 'none',
});

export const NavItem = styled.li({
	position: 'relative',
	cursor: 'pointer',
	padding: '0.5rem 1rem',
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
});

export const NavLink = styled(Link)({});

export const ActionWrapper = styled.div({
	display: 'flex',
	gap: '1rem',
});

export const Subscribe = styled(Button)({
	fontWeight: 'var(--font-weight-semibold)',
	color: 'var(--color-text-secondary)',
	backgroundColor: 'var(--color-primary)',
	transition: 'background-color 0.3s ease, color 0.3s ease',
	'&:hover': {
		backgroundColor: 'var(--color-secondary)',
	},
});

export const LogIn = styled(Button)({
	fontWeight: 'var(--font-weight-semibold)',
	color: 'var(--color-text-primary)',
	border: '1px solid var(--color-primary)',
	transition: 'border 0.3s ease, opacity 0.3s ease',
	'&:hover': {
		opacity: '0.7',
	},
});
