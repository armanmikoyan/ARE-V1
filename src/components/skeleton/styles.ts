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

export const SkeletonText = styled.div(
	sx({
		background: ({ colorPrimary, colorSecondary }) => ({
			_: getEmphasizedGradient(colorPrimary, colorSecondary),
		}),
		backgroundSize: ({ width }) => `${width * 4}rem 100%`,
		animation: ({ width, timing }) => ({
			_: `${createShimmer(width * 2)} ${timing}`,
		}),
		width: ({ width }) => ({
			_: `${width}rem`,
		}),
		height: ({ height }) => ({
			_: `${height}rem`,
		}),
		margin: '1rem 0 0',
		borderRadius: ({ radius }) => ({
			_: typeof radius === 'number' ? `${radius}rem` : radius,
		}),
	}),
);

export const SkeletonImage = styled.div(
	sx({
		position: 'relative',
		overflow: 'hidden',
		backgroundImage: ({ imageUrl }) => ({
			_: imageUrl ? `url('${imageUrl}')` : 'none',
		}),
		backgroundSize: '30% auto', // IMAGE SIZE
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		width: ({ width }) => ({
			_: `${width}rem`,
		}),
		height: ({ height }) => ({
			_: `${height}rem`,
		}),
		borderRadius: ({ radius }) => ({
			_: typeof radius === 'number' ? `${radius}rem` : radius,
		}),

		'&::after': {
			content: '""',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: ({ colorPrimary, colorSecondary }) => ({
				_: getEmphasizedGradient(colorPrimary, colorSecondary),
			}),
			backgroundSize: ({ width = 10 }) => `${width * 4}rem 100%`,
			animation: ({ width, timing }) => ({
				_: `${createShimmer(width * 2)} ${timing}`,
			}),
			opacity: 0.3,
		},
	}),
);
