import { isJsonString } from '@shared/lib/helpers'

interface IStorageOptions {
  expires?: string | number | Date
}

interface IStorageValue {
  expires?: number | null
  data: unknown
}

const storageValueFactory = (value: unknown, options: IStorageOptions): IStorageValue => {
  const dateNow = new Date()
  const { expires } = options
  return {
    data: value,
    expires: expires ? new Date(expires).getTime() || dateNow.getTime() + 86400000 : null,
  }
}

export default class StorageService {
  static get(key: string) {
    const storageObj = localStorage.getItem(key)
    // if the item doesn't exist, return null
    if (!storageObj) return null
    const item = JSON.parse(storageObj)
    const dateNow = new Date()

    if (item.expires && item.expires < dateNow.getTime()) {
      localStorage.removeItem(key)
      return null
    }
    if (isJsonString(item.data)) {
      return JSON.parse(item.data)
    }
    return item.data
  }

  static getIn(key: string, subKey: string) {
    const jsonValue = StorageService.get(key)
    if (!subKey) return jsonValue
    return jsonValue[subKey]
  }

  static set(key: string, value: string | object, options: IStorageOptions = {}) {
    const item = storageValueFactory(value, options)
    localStorage.setItem(key, JSON.stringify(item))
  }

  static remove(key: string) {
    return localStorage.removeItem(key)
  }

  static getAll() {
    return localStorage.get()
  }
}
