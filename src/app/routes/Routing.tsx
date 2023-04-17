import { FC } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routeHelpers'

const Routing: FC = () => {
  return (
    <HashRouter>
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
    </HashRouter>
  )
}

export default Routing
