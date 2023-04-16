import { RootState } from '@shared/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuthState, IUser } from '@features/auth/lib/types'

const user = JSON.parse(localStorage.getItem('user') || 'null') // TODO: fix this

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: user,
    token: user ? user.token : null,
  } as IAuthState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      localStorage.setItem('user', JSON.stringify(action.payload))
      state.user = action.payload
      state.token = user?.token
    },
    logout: (state) => {
      localStorage.clear()
      state.user = null
    },
  },
})

export const selectCurrentUser = (state: RootState) => state.auth.user
export const { setUser, logout } = authSlice.actions
export default authSlice.reducer
