export const objectUtil = {
  sortObjectByKeys: <T extends { [k: string]: any }>(unordered: T): T => {
    return Object.keys(unordered)
      .sort()
      .reduce((obj, key) => {
        obj[key] = unordered[key]
        return obj
      }, {}) as T
  },
}
