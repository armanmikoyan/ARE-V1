import { Button } from '@mui/material';
import styled from '@emotion/styled';
import Link from 'next/link';
import sx from '@/packages/styler';

export const SidebarWrapper = styled.nav(
	sx({
		display: {
			_: 'flex',
			'sm>': 'none',
			sm: 'none',
		},
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'transparent',
		backdropFilter: 'blur(0.2rem)',
		padding: '2rem 0.3rem',
		boxShadow: '0 0.1rem 1rem var(--color-primary)',
		fontWeight: 'var(--font-weight-bold)',
		margin: '1.5rem ',
		borderRadius: 'var(--radius-xxxl)',
		width: 'fit-content',
		fontSize: {
			_: 'var(--font-size-sm)',
			'<lg': 'var(--font-size-xs)',
		},
		position: 'sticky',
		top: '1.5rem',
		gap: '3rem',
	}),
);

export const SidebarLogoWrapper = styled.div(sx({}));

export const SidebarList = styled.ul(
	sx({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '1.3rem',
		listStyleType: 'none',
	}),
);

export const SidebarItem = styled.li(
	sx({
		position: 'relative',
		cursor: 'pointer',
		padding: '0.3rem',
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

export const SidebarLink = styled(Link)(sx({}));

export const ActionWrapper = styled.div(
	sx({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',

		gap: '1rem',
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
