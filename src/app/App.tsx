import { Routing } from '@app/routes'
import { store } from '@shared/store'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'

import './App.css'
import ThemeProvider from './theme/ThemeProvider'

function App() {
  return (
    <div id='arm-app'>
      <Provider store={store}>
        <ThemeProvider withGlobalStyles withNormalizeCSS>
          <Routing />
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App
