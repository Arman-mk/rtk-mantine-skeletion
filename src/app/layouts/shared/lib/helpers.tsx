import { IconGauge, IconUsers, IconHome } from '@tabler/icons-react'
import { INavMenuItem } from './types'

export const navMenuItems: INavMenuItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <IconHome />,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <IconGauge />,
  },
  {
    title: 'Users',
    path: '/users',
    icon: <IconUsers />,
  },
]
