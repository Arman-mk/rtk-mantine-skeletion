import { useToggle } from '@shared/hooks/use-toggle'
import { Button, Input, Modal } from '@core/index'
import { FC } from 'react'
import useRouterModal from '@core/modal/use-router-modal'

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
