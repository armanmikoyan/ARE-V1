export interface SkeletonProps {
	width?: number;
	height?: number;
	colorPrimary?: string;
	colorSecondary?: string;
	timing?: string;
	radius?: string | number;
	variant?: SkeletonVariant;
	[key: string]: any;
}

export enum SkeletonVariant {
	TEXT = 'text',
	IMG = 'img',
}
