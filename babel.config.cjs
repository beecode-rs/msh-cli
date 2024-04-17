const tsConfig = require('./resource/tsconfig/esm.json')

module.exports = function (api) {
	api.cache(true)

	const ignore = ['node_modules', ...(tsConfig.exclude ?? [])]
	const plugins = [
		[
			'@babel/plugin-transform-modules-commonjs',
			{
				strictMode: true,
			},
		],
		[
			'@babel/plugin-proposal-decorators',
			{
				version: '2023-11',
			},
		],
		["@babel/plugin-syntax-import-attributes",{
			deprecatedAssertSyntax: true
		}]
	]

	const presets = ['@babel/preset-env', '@babel/preset-typescript']

	return {
		plugins,
		presets,
		ignore
	}
}
