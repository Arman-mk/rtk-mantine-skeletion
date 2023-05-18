import BaseLayout from '@app/layouts/base-layout/ui/base-layout'
import Login from '@features/auth/components/login/login'
import HomePage from '@pages/home'
import { ReactNode, FC } from 'react'
import { Button } from '@core/button'
import { IModalRoute } from '@core/modal/types'
import BlankLayout from '@app/layouts/blank-layout/blank-layout'
import LoginPage from '@pages/home/auth/login.page'

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
    key: 'auth',
    path: '/auth',
    component: <BlankLayout />,
    routes: [
      {
        index: true,
        key: 'login',
        path: 'login',
        component: <LoginPage />,
      },
    ],
  },

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

export const modalRoutes: IModalRoute[] = [
  {
    path: 'home/form',
    Component: Login,
    props: {
      size: 'lg',
    },
  },
  {
    path: 'button-view',
    Component: Button,
    props: {
      size: 'xs',
    },
  },
]
