import { IAuthState } from '@features/auth/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_STORAGE_KEY } from '@shared/constants/app'
import SessionService, { ISession } from '@shared/services/session.service'
import StorageService from '@shared/services/storage.service'
import { RootState } from '@shared/store'

const user = SessionService.getUser()

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: user,
    token: SessionService.getToken(),
  } as IAuthState,
  reducers: {
    setUser: (state, action: PayloadAction<ISession>) => {
      StorageService.set(USER_STORAGE_KEY, action.payload)
      SessionService.save(action.payload)
      state.user = action.payload.user
      state.token = action.payload?.auth.token
    },
    logout: (state) => {
      StorageService.remove(USER_STORAGE_KEY)
      state.user = null
    },
  },
})

export const selectCurrentUser = (state: RootState) => state.auth.user
export const { setUser, logout } = authSlice.actions
export default authSlice.reducer
