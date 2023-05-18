import ThemeSwitcher from '@app/layouts/shared/ui/theme-switcher'
import { Burger, Group, Header, MediaQuery } from '@mantine/core'
import { selectApp, toggleNavbar } from '@store/app/app.slice'
import { useAppDispatch } from '@store/hooks/use-app-dispatch'
import { useAppSelector } from '@store/hooks/use-app-selector'
import { memo } from 'react'

const AppHeader = () => {
  const { navbarIsCollapsed } = useAppSelector(selectApp)
  const dispatch = useAppDispatch()

  const onToggleBurger = () => {
    dispatch(toggleNavbar())
  }

  return (
    <Header height={80}>
      <Group sx={{ height: '100%' }} px={20} position='apart'>
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger opened={!navbarIsCollapsed} onClick={onToggleBurger} size='sm' mr='xl' />
        </MediaQuery>
        <h1 className='m-0'>Logo</h1>
        <ThemeSwitcher />
      </Group>
    </Header>
  )
}

export default memo(AppHeader)
