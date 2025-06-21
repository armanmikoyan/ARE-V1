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

export const SkeletonBlock = styled.div(
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
		borderRadius: '0.5rem',
		backgroundPosition: '0 0',
	}),
);
