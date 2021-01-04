const memory: any = {}

export enum MemorySlot {
  CONFIG = 'config',
}

export const memoryDao = {
  get: (memorySlot: MemorySlot): any => {
    return memory[memorySlot]
  },
  set: (memorySlot: MemorySlot, value: any): void => {
    memory[memorySlot] = value
  },
  clear: (memorySlot: MemorySlot): void => {
    delete memory[memorySlot]
  },
  isSet: (memorySlot: MemorySlot): boolean => {
    return typeof memoryDao.get(memorySlot) !== 'undefined'
  },
  setOnlyOnce: (memorySlot: MemorySlot, value: any): void => {
    if (memoryDao.isSet(memorySlot)) throw new Error(`Memory slog [${memorySlot}] is already set`)
    return memoryDao.set(memorySlot, value)
  },
}
