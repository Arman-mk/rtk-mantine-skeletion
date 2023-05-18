import { navMenuItems } from '@app/layouts/shared/lib/helpers'
import NavMenu from '@app/layouts/shared/ui/nav-menu'
import { Navbar } from '@mantine/core'
import { selectApp } from '@store/app/app.slice'
import { memo } from 'react'
import { useAppSelector } from '@store/hooks/use-app-selector'

const AppNavbar = () => {
  const { navbarIsCollapsed } = useAppSelector(selectApp)

  return (
    <Navbar
      hiddenBreakpoint='sm'
      hidden={navbarIsCollapsed}
      width={{ base: 250 }}
      height={'100%'}
      p='xs'
    >
      <Navbar.Section>
        <NavMenu menuItems={navMenuItems} />
      </Navbar.Section>
    </Navbar>
  )
}

export default memo(AppNavbar)
