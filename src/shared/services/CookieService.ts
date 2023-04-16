import { getCookie, setCookie, Types } from 'typescript-cookie'
import { isJsonString } from '@shared/lib/helpers'

interface ICookieOptions extends Types.CookieAttributes {}

export default class CookieService {
  static get(key: string) {
    const value = getCookie(key)
    if (value && isJsonString(value)) {
      return JSON.parse(value)
    }
    return value
  }

  static getIn(key: string, subKey: string) {
    const storeObj = getCookie(key)
    if (!storeObj || !isJsonString(storeObj)) return null
    const jsonValue = JSON.parse(storeObj)
    if (!subKey) return jsonValue
    return jsonValue[subKey]
  }

  static set(key: string, value: string | object, options: ICookieOptions = {}) {
    return setCookie(key, JSON.stringify(value), {
      ...options,
      sameSite: 'strict',
    })
  }

  static remove(key: string) {
    return localStorage.removeItem(key)
  }

  static getAll() {
    return localStorage.get()
  }
}
