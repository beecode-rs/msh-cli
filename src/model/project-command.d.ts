import { PrintStdMessage } from 'src/service/cli-service'

export interface ProjectCommand {
  execute(project: string): Promise<PrintStdMessage>
}
