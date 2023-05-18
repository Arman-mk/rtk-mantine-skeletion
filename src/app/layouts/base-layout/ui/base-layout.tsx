import { AppShell } from '@mantine/core'
import { useAuth } from '@store/hooks/use-auth'
import { Suspense } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AppHeader from './app-header'
import AppNavbar from './app-navbar'

const BaseLayout = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      {!isAuthenticated && <Navigate to='/auth/login' replace />}
      <AppShell
        header={<AppHeader />}
        navbar={<AppNavbar />}
        padding='md'
        navbarOffsetBreakpoint='sm'
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
      >
        <main className='main-section  container m-auto'>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
          </Suspense>
        </main>
      </AppShell>
    </>
  )
}

export default BaseLayout
