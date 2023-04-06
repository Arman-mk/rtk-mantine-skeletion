import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
  console.log('xx')
  return (
    <div className='flex flex-auto min-w-0'>
      fdsfd
      <div className='app-layout flex flex-col flex-auto min-h-screen min-w-0 relative w-full'>
        <div className='app-layout--content'>
          <main className='main-section  container m-auto'>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  )
}

export default BaseLayout
