import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,

	/// remove this
	output: 'export',
	basePath: `/ARE-V1`,
	assetPrefix: `/ARE-V1/`,
	images: {
		unoptimized: true,
	},
	///
};

export default nextConfig;
