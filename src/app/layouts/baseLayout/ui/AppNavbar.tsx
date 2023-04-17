import { Navbar } from '@mantine/core'
import { memo } from 'react'
import { navMenuItems } from '../../shared/lib/helpers'
import NavMenu from '../../shared/ui/NavMenu'

const AppNavbar = () => {
  return (
    <Navbar width={{ base: 250 }} height={'100%'} p='xs'>
      <Navbar.Section>
        <NavMenu menuItems={navMenuItems} />
      </Navbar.Section>
    </Navbar>
  )
}

export default memo(AppNavbar)
