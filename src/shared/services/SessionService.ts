import { TOKEN_KEY, USER_STORAGE_KEY } from '@shared/constants/app'
import CookieService from './CookieService'
import StorageService from './StorageService'

export interface ISessionUser {
  id: string
  username: string
  email: string
  password: string
  profilePicture: string
  createdAt?: string
}

interface ISessionAuth {
  token: string
  refreshToken?: string
  expiresIn?: number
}

export interface ISession {
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

  static getToken(): string | null {
    return CookieService.get(TOKEN_KEY)
  }

  static getUser(): ISessionUser | null {
    return StorageService.get(USER_STORAGE_KEY)
  }

  static remove(): void {
    StorageService.remove(USER_STORAGE_KEY)
    StorageService.remove(TOKEN_KEY)
  }
}
