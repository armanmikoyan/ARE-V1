import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import sx from '@/packages/styler';

export const Toggler = styled(Button)(
	sx({
		color: 'var(--color-primary)',
		transition: 'color 0.8s ease, color 0.3s ease',
		'&:hover': {},
		padding: {
			_: null,
			'<md': '0',
		},
		minWidth: 'fit-content',
	}),
);
