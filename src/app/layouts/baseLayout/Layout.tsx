import { AppShell } from '@mantine/core'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
  return (
    <AppShell
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
