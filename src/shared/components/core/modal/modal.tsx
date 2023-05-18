import { Modal as CoreModal, ModalProps } from '@mantine/core'
import { FC } from 'react'

export interface IModal extends ModalProps {
  children: React.ReactNode
  routeKey: string
}

const Modal = ({ children, onClose, opened, routeKey, ...rest }: IModal) => {
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
