import { TOKEN_KEY, USER_STORAGE_KEY } from '@shared/constants/app'
import CookieService from './CookieService'
import StorageService from './storageService'

interface ISessionUser {
  id: string
  username: string
  email: string
  name: string
}

interface ISessionAuth {
  token: string
  refreshToken?: string
  expiresIn?: number
}

interface ISession {
  user: ISessionUser
  auth: ISessionAuth
}

export default class SessionService {
  static save({ auth, user }: ISession): void {
    if (user) {
      StorageService.set(USER_STORAGE_KEY, user)
    }

    if (auth) {
      CookieService.set(TOKEN_KEY, auth)
    }
  }

  static remove(): void {
    StorageService.remove(USER_STORAGE_KEY)
    StorageService.remove(TOKEN_KEY)
  }
}
