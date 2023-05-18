import { Modal, ModalsProvider } from '@core/modal'
import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { modalRoutes, routes } from './route-helpers'

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <ModalsProvider routes={modalRoutes} modal={{ Component: Modal }}>
        <Routes>
          {routes.map((route) => {
            return (
              <Route key={route.key} path={route.path} element={route.component}>
                {route.routes?.map((subRoute) => (
                  <Route
                    key={subRoute.key}
                    path={subRoute.path}
                    index={subRoute.index}
                    element={subRoute.component}
                  />
                ))}
                <Route path='*' element={<h1>Page not found...</h1>} />
              </Route>
            )
          })}
        </Routes>
      </ModalsProvider>
    </BrowserRouter>
  )
}

export default Routing
