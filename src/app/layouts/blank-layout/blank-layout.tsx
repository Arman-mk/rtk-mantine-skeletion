import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const BlankLayout = () => {
  return (
    <div>
      <main className='main-section  m-auto'>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

export default BlankLayout
