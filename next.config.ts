// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
// 	/* config options here */
// 	reactStrictMode: true,
// };

// export default nextConfig;

// to remove for github pages deployement
import type { NextConfig } from 'next';

const repoName = 'ARE-V1';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: 'export',
	distDir: 'out',
	assetPrefix: `/${repoName}/`,
	basePath: `/${repoName}`,
	env: {
		NEXT_PUBLIC_BASE_PATH: `/${repoName}`,
	},
};

export default nextConfig;
