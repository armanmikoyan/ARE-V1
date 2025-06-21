import { SkeletonBlock } from './styles';
import { SkeletonProps } from './types';

/**
 * Generic Skeleton loading block with shimmer animation.
 *
 * @param {object} props - Component props.
 * @param {number} [props.width=20] - Width of the skeleton block in rem units.
 * @param {number} [props.height=1.2] - Height of the skeleton block in rem units.
 * @param {string} [props.colorPrimary='var(--color-primary)'] - Primary color for the gradient.
 * @param {string} [props.colorSecondary='var(--color-secondary)'] - Secondary color for the gradient.
 * @param {string} [props.timing='1.1s infinite ease-in-out'] - CSS animation timing (duration, iteration, easing).
 * @returns {JSX.Element}
 */
export default function Skeleton({
	width = 20,
	height = 1.2,
	colorPrimary = 'var(--color-primary)',
	colorSecondary = 'var(--color-secondary)',
	timing = '1.1s infinite ease-in-out',
	...rest
}: SkeletonProps) {
	return (
		<SkeletonBlock
			width={width}
			height={height}
			colorPrimary={colorPrimary}
			colorSecondary={colorSecondary}
			timing={timing}
			{...rest}
		/>
	);
}
