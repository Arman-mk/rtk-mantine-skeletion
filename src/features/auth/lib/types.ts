export interface IUser {
  id: string
  username: string
  email: string
  password: string
  profilePicture: string
  createdAt?: string
}

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
