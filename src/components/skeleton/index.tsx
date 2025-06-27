import { SkeletonText, SkeletonImage } from './styles';
import { SkeletonProps, SkeletonVariant } from './types';

/**
 * Generic Skeleton loading block with shimmer animation.
 *
 * Renders a skeleton placeholder used to indicate loading content.
 * Supports both text and image variants with customizable styles and animation.
 *
 * @param {object} props - Component props.
 * @param {number} [props.width=20] - Width of the skeleton block, will be converted to `rem` units.
 * @param {number} [props.height=1.2] - Height of the skeleton block, will be converted to `rem` units.
 * @param {number} [props.radius=0.5] -  Border Radius of the skeleton block, will be converted to `rem` units.
 * @param {string} [props.colorPrimary='grey'] - Primary color used in the shimmer gradient.
 * @param {string} [props.colorSecondary='white'] - Secondary color used in the shimmer gradient.
 * @param {string} [props.timing='1.1s infinite ease-in-out'] - Animation timing function for the shimmer effect.
 * @param {SkeletonVariant} [props.variant=SkeletonVariant.TEXT] - Type of skeleton: `TEXT` or `IMAGE`.
 * @param {string} [props.imageUrl='./globe.svg'] - Optional image URL to display as background in `IMAGE` variant.
 * @param {...any} [rest] - Additional props forwarded to the underlying styled component.
 * @returns {JSX.Element} The rendered Skeleton component.
 */

export default function Skeleton({
	width = 20,
	height = 1.2,
	colorPrimary = 'white',
	colorSecondary = 'grey',
	timing = '1.1s infinite ease-in-out',
	radius = 0.5,
	variant = SkeletonVariant.TEXT,
	imageUrl = './globe.svg',
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
			imageUrl={imageUrl}
			{...rest}
		/>
	);
}
