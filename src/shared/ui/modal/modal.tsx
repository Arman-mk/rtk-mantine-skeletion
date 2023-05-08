import { Modal as CoreModal, ModalProps } from '@mantine/core'
import { FC } from 'react'
import useModalNavigate from './use-navigate-modal'

export interface IModal extends ModalProps {
  children: React.ReactNode
  routeKey: string
}

const Modal: FC<IModal> = ({ children, onClose, opened, routeKey, ...rest }: IModal) => {
  const { match, close } = useModalNavigate()

  if (routeKey) {
    opened = Boolean(match(routeKey))
  }

  const closeHandler = () => {
    if (routeKey) {
      close()
    }
    onClose && onClose()
  }

  return (
    <CoreModal opened={opened} onClose={closeHandler} {...rest}>
      {children}
    </CoreModal>
  )
}

export default Modal
