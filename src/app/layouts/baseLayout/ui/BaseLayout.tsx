import { AppShell } from '@mantine/core'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from './AppHeader'
import AppNavbar from './AppNavbar'

const BaseLayout = () => {
  return (
    <AppShell
      header={<AppHeader />}
      navbar={<AppNavbar />}
      padding='md'
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
  )
}

export default BaseLayout
