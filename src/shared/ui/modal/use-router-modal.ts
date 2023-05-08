import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom'

interface IadditionalOptions {
  'child-route'?: string
}

interface Iparams {
  replace?: boolean | undefined
  props?: object
}

const useRouterModal = () => {
  const navigate = useNavigate()
  const { pathname, state } = useLocation()
  let [searchParams] = useSearchParams()
  const activeRoute = searchParams.get('route')

  return {
    activeRoute,
    activeRouteProps: state?.props || {},
    match: (key: string) => {
      return searchParams.get(key) === `opened`
    },
    open: (key: string, params: Iparams = {}) => {
      const additionalOptions: IadditionalOptions = {}
      if (activeRoute) {
        additionalOptions['child-route'] = key
      }
      navigate(
        {
          pathname,
          search: `?${createSearchParams({
            modal: 'active',
            route: key,
            ...additionalOptions,
          })}`,
        },
        {
          replace: params.replace,
          state: {
            props: params.props || {},
          },
        },
      )
    },
    close: () => {
      navigate({ hash: '' }, { state: { props: {} } })
    },
  }
}
export default useRouterModal
