import { Executable, ExecuteResult } from '#/model/command/interfaces'
import { initConfigService } from '#/service/init-config-service'

export class InitConfig implements Executable {
	async execute(): Promise<ExecuteResult[]> {
		// TODO create error handler annotation
		try {
			await initConfigService.tryToCreateConfig()

			return [{ stringResult: '.msh file successfully generated' }]
		} catch (err: any) {
			return [{ errorMessage: err.message }]
		}
	}
}
