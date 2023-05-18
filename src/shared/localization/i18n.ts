import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from './translations'

/////////////////////////////////////////////////  /////

const config = {
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
}

/////////////////////////////////////////////////  /////

i18n.use(initReactI18next).init({ ...config, resources })

export default i18n
