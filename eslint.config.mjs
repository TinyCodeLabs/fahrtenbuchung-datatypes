import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default defineConfig([
	{
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2020,
			sourceType: 'module',

			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir: import.meta.dirname,
			},
			globals: globals.node,
		},

		extends: fixupConfigRules(
			compat.extends(
				'eslint:recommended',
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:prettier/recommended',
				'plugin:import/errors',
				'plugin:import/warnings',
				'plugin:import/typescript'
			)
		),

		rules: {
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

			'no-constant-condition': [
				'error',
				{
					checkLoops: false,
				},
			],

			'import/order': [
				'error',
				{
					groups: ['builtin', 'external', 'internal'],

					pathGroups: [
						{
							pattern: '(^src)|(^test)\\/*',
							group: 'internal',
						},
						{
							pattern: '^(?!src|test).*',
							group: 'external',
						},
					],

					alphabetize: {
						order: 'asc',
					},
				},
			],

			'import/no-unresolved': 'off',

			'@typescript-eslint/naming-convention': [
				'warn',
				{
					selector: 'enumMember',
					format: ['PascalCase'],
				},
				{
					selector: 'variableLike',
					format: ['camelCase'],
				},
				{
					selector: 'variable',
					format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
				},
				{
					selector: 'parameter',
					format: ['camelCase'],
					leadingUnderscore: 'allow',
				},
				{
					selector: 'typeLike',
					format: ['PascalCase'],
				},
			],
			'@typescript-eslint/explicit-member-accessibility': [
				'error',
				{ accessibility: 'explicit', overrides: { constructors: 'off' } },
			],
		},
	},
	globalIgnores([
		'**/webpack.config.js',
		'**/jest.config.js',
		'**/jest.setup.js',
		'**/eslint.config.mjs',
	]),
	globalIgnores(['**/cache', '**/input', '**/dist', '**/node_modules', '**/output', '**/test']),
]);
