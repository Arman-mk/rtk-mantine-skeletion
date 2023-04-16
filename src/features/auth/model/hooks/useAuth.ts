import { useAppSelector } from '@shared/store/hooks/useAppSelector'
import { useMemo } from 'react'
import { selectCurrentUser } from '@features/auth/model/store/authSlice'

export const useAuth = () => {
  const user = useAppSelector(selectCurrentUser)
  const isAuthenticated = useMemo(() => user !== null, [user])
  return { user, isAuthenticated }
}
