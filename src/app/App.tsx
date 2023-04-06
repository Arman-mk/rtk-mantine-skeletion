import { useState } from 'react'
import './App.css'
import reactLogo from '@assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
import { store } from '@app/store'
import { Routing } from '@app/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Provider store={store}>
        <Routing />
      </Provider>
    </div>
  )
}

export default App
