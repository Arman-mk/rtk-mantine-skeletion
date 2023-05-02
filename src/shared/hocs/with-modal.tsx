import { ModalProps } from '@mantine/core'
import Modal from '../ui/modal'

interface IWithModal {
  inModal: boolean
  modalProps: ModalProps
}

const withModal =
  (Component: React.FC) =>
  ({ inModal, modalProps, ...rest }: IWithModal) => {
    if (inModal) {
      return (
        <Modal {...modalProps}>
          <Component {...rest} />
        </Modal>
      )
    }

    return <Component {...rest} />
  }
