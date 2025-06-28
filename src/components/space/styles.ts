import styled from '@emotion/styled';
import sx from '@/packages/styler';

export const SpaceWrapper = styled.div(
	sx({
		position: 'absolute',
		top: 0,
		zIndex: '-1',
		backgroundColor: 'transparent',
		width: '100%',
		height: '100vh',
		overflow: 'hidden',
		canvas: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			display: 'block',
		},
	}),
);
