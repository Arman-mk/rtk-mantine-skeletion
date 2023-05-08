import { FC, useMemo } from 'react'
import Modal from './modal'
import useRouterModal from './use-router-modal'

interface IModalsProvider {
  routes: any[]
  children: React.ReactNode
}

const ModalsProvider: FC<IModalsProvider> = ({ routes, children }) => {
  const { activeRoute, activeRouteProps, close } = useRouterModal()
  const routesMap = useMemo(
    () => routes.reduce((acc, route) => ({ ...acc, [route.path]: route }), {}),
    [],
  )
  const currentRoute = useMemo(() => (activeRoute ? routesMap[activeRoute] : null), [activeRoute])

  return (
    <>
      {children}
      {currentRoute && (
        <Modal {...currentRoute.modalProps} onClose={close} opened={!!currentRoute}>
          {<currentRoute.Component {...activeRouteProps} />}
        </Modal>
      )}
    </>
  )
}

export default ModalsProvider
