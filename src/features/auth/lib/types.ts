import { ISessionUser } from '@shared/services/SessionService'

export interface IUser extends ISessionUser {}

export interface IAuthState {
  user: IUser | null
  token: string | null
}

export interface ILoginUser {
  email: string
  password: string
}

export interface ILoginUser {
  email: string
  password: string
}

export interface IRegisterUser {
  email: string
  username: string
  name: string
  password: string
  passwordConfimation: string
}
