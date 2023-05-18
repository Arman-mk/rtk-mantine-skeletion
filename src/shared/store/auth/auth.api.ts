import { IUser, ILoginUser, IRegisterUser } from '@features/auth/lib/types'
import { api } from '@shared/store/api/server-api'

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<IUser, IRegisterUser>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),
    login: build.mutation<IUser, ILoginUser>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
})

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = authApi
