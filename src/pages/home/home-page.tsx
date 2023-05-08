import { useToggle } from '@shared/hooks/use-toggle'
import Modal from '@shared/ui/modal'
import { Button, Input } from '@shared/ui'
import { FC } from 'react'
import useModalNavigate from '@ui/modal/use-navigate-modal'
import useRouterModal from '@ui/modal/use-router-modal'

const HomePage: FC = () => {
  const [opened, setOpened] = useToggle(false)
  const { open } = useRouterModal()

  return (
    <div className='font-thin'>
      <h1 className='mb-4'>Home Page</h1>
      <Button
        onClick={() => open('home/form', { props: { children: 'asda', variant: 'gradient' } })}
      >
        open
      </Button>
      <Button onClick={() => close()}>close</Button>
      <Input placeholder='Home Page' error='babas a bas ' />
      <Button variant='gradient' className='mt-3' onClick={() => open('xz')}>
        Click here...
      </Button>
      <Modal routeKey='xz'>sda</Modal>
    </div>
  )
}

export default HomePage
