import { useTranslation } from 'react-i18next'

const useAppTranslation = () => {
  const translation = useTranslation()
  return translation
}

export default useAppTranslation
