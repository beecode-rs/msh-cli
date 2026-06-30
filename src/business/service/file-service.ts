import { fs } from 'mz'

export const fileService = {
	writeToFileSync: (params: { filePath: string; data: string }): void => {
		const { filePath, data } = params
		fs.writeFileSync(filePath, data, 'utf8')
	},
}
