import BaseLayout from '@app/layouts/base-layout/ui/base-layout'
import Login from '@features/auth/ui/login/login'
import HomePage from '@pages/home'
import Button from '@ui/button'
import { IModal } from '@ui/modal/modal'
import { ReactComponent, ReactNode } from 'react'

interface IRoute {
  key: string
  path?: string
  component: ReactNode | null
  exact?: boolean
  index?: boolean
  routes?: IRoute[]
}

interface IModalRoute {
  key: string
  path?: string
  Component: ReactComponent | null
  modalProps: IModal
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

export const modalRoutes: IModalRoute[] = [
  {
    path: 'home/form',
    Component: Login,
    modalProps: {
      size: 'lg',
    },
  },
  {
    path: 'button-view',
    Component: Button,
    modalProps: {
      size: 'xs',
    },
  },
]
