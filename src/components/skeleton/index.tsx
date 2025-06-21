import { SkeletonText, SkeletonImage } from './styles';
import { SkeletonProps, SkeletonVariant } from './types';

/**
 * Generic Skeleton loading block with shimmer animation.
 *
 * @param {object} props - Component props.
 * @param {number} [props.width=20] - Width of the skeleton block in rem units.
 * @param {number} [props.height=1.2] - Height of the skeleton block in rem units.
 * @param {string} [props.colorPrimary='var(--color-primary)'] - Primary color used in the shimmer gradient.
 * @param {string} [props.colorSecondary='var(--color-secondary)'] - Secondary color used in the shimmer gradient.
 * @param {string} [props.timing='1.1s infinite ease-in-out'] - CSS animation timing function for shimmer animation.
 * @param {string|number} [props.radius='var(--radius-md)'] - Border radius of the skeleton block; can be a CSS variable string or a number (interpreted as rem).
 * @param {SkeletonVariant} [props.variant=SkeletonVariant.TEXT] - The variant of the skeleton to render, e.g. text or image.
 * @param {...any} [rest] - Additional props forwarded to the underlying styled component.
 * @returns {JSX.Element} The rendered Skeleton loading block.
 */

export default function Skeleton({
	width = 20,
	height = 1.2,
	colorPrimary = 'var(--color-primary)',
	colorSecondary = 'var(--color-secondary)',
	timing = '1.1s infinite ease-in-out',
	radius = 'var(--radius-md)',
	variant = SkeletonVariant.TEXT,
	...rest
}: SkeletonProps) {
	const SkeletonBlock = variant === SkeletonVariant.TEXT ? SkeletonText : SkeletonImage;

	return (
		<SkeletonBlock
			width={width}
			height={height}
			colorPrimary={colorPrimary}
			colorSecondary={colorSecondary}
			timing={timing}
			radius={radius}
			variant={variant}
			imageUrl="./globe.svg"
			{...rest}
		/>
	);
}
