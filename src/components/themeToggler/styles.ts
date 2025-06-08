import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const Toggler = styled(Button)({
	color: 'var(--color-accent)',
	transition: 'color 0.8s ease, color 0.3s ease',
	'&:hover': {
		color: 'var(--color-text-primary)',
	},
});
