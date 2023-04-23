import { Executable, ExecuteResult } from 'src/model/command/interfaces'
import { initConfigService } from 'src/service/init-config-service'

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
