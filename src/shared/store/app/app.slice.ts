import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { THEME_STORAGE_KEY } from '@shared/constants/app'
import StorageService from '@shared/services/storage.service'
import { RootState } from '@shared/store'

type ThemeType = 'light' | 'dark'
const theme = StorageService.get(THEME_STORAGE_KEY) || 'light'

interface AppState {
  theme: ThemeType
  navbarIsCollapsed?: boolean
  appDrawerCollapsed?: boolean
  language: string
}

const initialState: AppState = {
  theme,
  navbarIsCollapsed: false,
  appDrawerCollapsed: false,
  language: 'en',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      StorageService.set(THEME_STORAGE_KEY, action.payload)
      state.theme = action.payload
    },
    toggleNavbar: (state) => {
      state.navbarIsCollapsed = !state.navbarIsCollapsed
    },
  },
})

export const selectApp = (state: RootState) => state.app
export const { setTheme, toggleNavbar } = appSlice.actions
export default appSlice.reducer
