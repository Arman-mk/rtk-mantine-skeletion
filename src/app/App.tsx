import '@shared/localization/i18n'
import './App.css'

import { Routing } from '@app/routes'
import { store } from '@shared/store'
import { Provider } from 'react-redux'

import ThemeProvider from './theme/theme-provider'

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
