import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import sx from '@/packages/styler';

const createShimmer = (distance: number) => keyframes`
  0% { background-position: -${distance}rem 0; }
  100% { background-position: ${distance}rem 0; }
`;

const getEmphasizedGradient = (colorPrimary: string, colorSecondary: string) => {
	return `linear-gradient(90deg, ${colorSecondary} 10%, ${colorPrimary} 45%, ${colorSecondary} 90%)`;
};

const SkeletonBase = {
	width: ({ width }) => ({
		_: `${width}rem`,
	}),
	height: ({ height }) => ({
		_: `${height}rem`,
	}),
	borderRadius: ({ radius }) => ({
		_: `${radius}rem`,
	}),
	margin: '1rem 0 0',
};

export const AnimationBase = {
	background: ({ colorPrimary, colorSecondary }) => ({
		_: getEmphasizedGradient(colorPrimary, colorSecondary),
	}),
	backgroundSize: ({ width }) => `${width * 4}rem 100%`,
	animation: ({ width, timing }) => ({
		_: `${createShimmer(width * 2)} ${timing}`,
	}),
};

export const SkeletonText = styled.div(
	sx({
		...SkeletonBase,
		...AnimationBase,
	}),
);

export const SkeletonImage = styled.div(
	sx({
		...SkeletonBase,
		position: 'relative',
		overflow: 'hidden',
		backgroundImage: ({ imageUrl }) => ({
			_: imageUrl ? `url('${imageUrl}')` : 'none',
		}),
		backgroundSize: '30% auto',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',

		'&::after': {
			...AnimationBase,
			content: '""',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			opacity: 0.3,
		},
	}),
);
