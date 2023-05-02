import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { THEME_STORAGE_KEY } from '@shared/constants/app'
import StorageService from '@shared/services/StorageService'
import { RootState } from '@shared/store'

type ThemeType = 'light' | 'dark'
const theme = StorageService.get(THEME_STORAGE_KEY) || 'light'

interface AppState {
  theme: ThemeType
}

const appSlice = createSlice({
  name: 'app',
  initialState: {
    theme,
  } as AppState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      StorageService.set(THEME_STORAGE_KEY, action.payload)
      state.theme = action.payload
    },
  },
})

export const selectApp = (state: RootState) => state.app
export const { setTheme } = appSlice.actions
export default appSlice.reducer
