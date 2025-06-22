(self.__BUILD_MANIFEST = (function (e, s, r) {
	return {
		__rewrites: {
			afterFiles: [],
			beforeFiles: [
				{ has: void 0, source: '/ARE-V1//_next/:path+', destination: '/ARE-V1/_next/:path+' },
			],
			fallback: [],
		},
		__routerFilterStatic: {
			numItems: 0,
			errorRate: 1e-4,
			numBits: 0,
			numHashes: null,
			bitArray: [],
		},
		__routerFilterDynamic: {
			numItems: e,
			errorRate: 1e-4,
			numBits: e,
			numHashes: null,
			bitArray: [],
		},
		'/': [
			'static/chunks/998-8eb2d62a01a439ad.js',
			'static/css/19a906131b3502f1.css',
			'static/chunks/pages/index-565d3e8e7ae44766.js',
		],
		'/_error': ['static/chunks/pages/_error-41608b100cc61246.js'],
		sortedPages: ['/', '/_app', '/_error'],
	};
})(0, 1e-4, null)),
	self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
