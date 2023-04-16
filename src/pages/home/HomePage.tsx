import { Button, Input } from '@shared/ui'
import { FC } from 'react'

const HomePage: FC = () => {
  return (
    <div className='font-thin'>
      <h1 className='mb-4'>Home Page</h1>
      <Input placeholder='Home Page' error='babas a bas ' />
      <Button variant='gradient' className='mt-3'>
        Click here...
      </Button>
    </div>
  )
}

export default HomePage
