import { Modal as CoreModal, ModalProps } from '@mantine/core'
import { FC, useEffect } from 'react'

interface IModal extends ModalProps {
  children: React.ReactNode
  routeKey: string
}

const Modal: FC<IModal> = ({ children, opened, routeKey, ...rest }: IModal) => {
  useEffect(() => {
    const url = new URL(window.location.href)
    if (routeKey) {
      if (opened) {
        url.searchParams.set(routeKey, 'opened')
      } else {
        url.searchParams.delete(routeKey)
      }
      window.history.replaceState(null, '', url)
    }
  }, [routeKey, opened])

  return (
    <CoreModal opened={opened} {...rest}>
      {children}
    </CoreModal>
  )
}

export default Modal
