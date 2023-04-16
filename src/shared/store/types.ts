import { store } from '@app/store.config'

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
