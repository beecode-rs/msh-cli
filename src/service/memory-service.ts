import { MemorySlot, memoryDao } from 'src/dal/memory-dao'

export const memoryService = {
  setConfig: (config: any): void => memoryDao.setOnlyOnce(MemorySlot.CONFIG, config),
  getConfig: (): any => memoryDao.get(MemorySlot.CONFIG),
}
