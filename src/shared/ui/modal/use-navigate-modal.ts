import { useNavigate, useLocation } from 'react-router-dom'

const useModalNavigate = () => {
  const navigate = useNavigate()
  const { pathname, hash } = useLocation()
  return {
    match: (checkHash: string) => {
      return hash === `#${checkHash}`
    },
    open: (hash: string, params: object) => {
      navigate({ pathname, hash, ...params })
    },
    close: () => {
      navigate({ hash: '', state: '' })
    },
  }
}
export default useModalNavigate
