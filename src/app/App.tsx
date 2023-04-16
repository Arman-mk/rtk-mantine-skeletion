import { Routing } from '@app/routes'
import { store } from '@shared/store'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'

import './App.css'

function App() {
  return (
    <div id='arm-app'>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Provider store={store}>
          <Routing />
        </Provider>
      </MantineProvider>
    </div>
  )
}

export default App
