import { type Executable, type ExecuteResult } from '#src/business/model/executable.js'
import { initConfigService } from '#src/business/service/init-config-service.js'

export class InitConfig implements Executable {
	async execute(): Promise<ExecuteResult[]> {
		// TODO create error handler annotation
		try {
			await initConfigService.tryToCreateConfig()

			return [{ stringResult: '.msh file successfully generated' }]
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			return [{ errorMessage: err.message }]
		}
	}
}
