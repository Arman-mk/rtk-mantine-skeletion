import { Box, NavLink } from '@mantine/core'
import { NavLink as RouteNavLink } from 'react-router-dom'

import { FC, memo } from 'react'
import { INavMenuItem } from '../lib/types'

interface INavMenu {
  menuItems: Array<INavMenuItem>
}

const NavMenu: FC<INavMenu> = ({ menuItems }) => {
  return (
    <Box>
      {menuItems.map((item: INavMenuItem, index: number) => {
        return (
          <NavLink
            key={item.path}
            label={item.title}
            component={RouteNavLink}
            to={item.path}
            icon={item.icon}
          >
            {item.children &&
              item.children.map((child: INavMenuItem, index: number) => {
                return (
                  <NavLink
                    key={child.path}
                    label={child.title}
                    component={RouteNavLink}
                    to={child.path}
                    icon={child.icon}
                  />
                )
              })}
          </NavLink>
        )
      })}
    </Box>
  )
}

export default memo(NavMenu)
