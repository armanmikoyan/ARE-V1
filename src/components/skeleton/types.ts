export interface SkeletonProps {
	width?: number;
	height?: number;
	radius?: number;
	colorPrimary?: string;
	colorSecondary?: string;
	timing?: string;
	imageUrl?: string;
	variant?: SkeletonVariant;
	[key: string]: any;
}

export enum SkeletonVariant {
	TEXT = 'text',
	IMG = 'img',
}
