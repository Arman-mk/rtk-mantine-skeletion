import { useAppSelector } from '@store/hooks/use-app-selector'
import { useMemo } from 'react'
import { selectCurrentUser } from '@store/auth/auth.slice'

export const useAuth = () => {
  const user = useAppSelector(selectCurrentUser)
  const isAuthenticated = useMemo(() => user !== null, [user])
  return { user, isAuthenticated }
}
