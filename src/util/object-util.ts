export const objectUtil = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	sortObjectByKeys: <T extends Record<string, any>>(unordered: T): T => {
		return Object.keys(unordered)
			.sort()
			.reduce((obj, key) => {
				// @ts-expect-error
				obj[key] = unordered[key]

				return obj
			}, {}) as T
	},
}
