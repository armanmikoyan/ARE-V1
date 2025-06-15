import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,

	//  IMPORTANT: These settings are needed only for deploying to GitHub Pages.
	// Remove these 3 lines as soon as you have money to deploy it in AWS
	output: 'export',
	basePath: `/ARE-V1`,
	assetPrefix: `/ARE-V1/`,
	// TILL HERE
};

export default nextConfig;
