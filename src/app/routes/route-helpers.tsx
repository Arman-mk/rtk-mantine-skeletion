import HomePage from '@pages/home'
import { ReactNode } from 'react'
import BaseLayout from '@app/layouts/base-layout/ui/base-layout'

interface IRoute {
  key: string
  path?: string
  component: ReactNode | null
  exact?: boolean
  index?: boolean
  routes?: IRoute[]
}

export const routes: IRoute[] = [
  {
    key: 'home',
    path: '/',
    component: <BaseLayout />,
    routes: [
      {
        index: true,
        key: 'home',
        component: <HomePage />,
      },
    ],
  },
]
