import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
// 	reactStrictMode: true,
// };

// export default nextConfig;

// for gh pages, 1. uncomment config above 2. remove config bellow  3. remove predeploy, deploy scripts in package.json, 4. change when you have money and can deploy it on VERCEL
const nextConfig: NextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
	},
	basePath: '/ARE-V1',
	assetPrefix: '/ARE-V1',
};

export default nextConfig;
