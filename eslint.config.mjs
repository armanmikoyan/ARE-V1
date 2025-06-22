// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import { FlatCompat } from '@eslint/eslintrc';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
// 	baseDirectory: __dirname,
// });

// const eslintConfig = [
// 	...compat.extends('next/core-web-vitals', 'next/typescript'),
// 	{
// 		files: ['**/*.ts', '**/*.tsx'],
// 		languageOptions: {
// 			parserOptions: {
// 				ecmaVersion: 'latest',
// 				sourceType: 'module',
// 			},
// 		},
// 		rules: {
// 			'no-shadow': 'off',
// 			'@typescript-eslint/no-shadow': 'error',
// 			'no-underscore-dangle': 'warn',
// 			'no-use-before-define': 'off',
// 			'@typescript-eslint/no-use-before-define': 'error',
// 			'@typescript-eslint/no-explicit-any': 'off',
// 			'no-unused-vars': 'off',
// 			camelcase: [
// 				'error',
// 				{
// 					properties: 'never',
// 					ignoreDestructuring: true,
// 				},
// 			],
// 			'@typescript-eslint/no-unused-vars': [
// 				'error',
// 				{
// 					args: 'all',
// 					argsIgnorePattern: '^_',
// 					caughtErrors: 'all',
// 					caughtErrorsIgnorePattern: '^_',
// 					destructuredArrayIgnorePattern: '^_',
// 					varsIgnorePattern: '^_',
// 					ignoreRestSiblings: true,
// 				},
// 			],
// 		},
// 	},
// ];

// export default eslintConfig;