import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
// 	reactStrictMode: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
	},
	basePath: '/are-v1',
	assetPrefix: '/are-v1',
};

export default nextConfig;
