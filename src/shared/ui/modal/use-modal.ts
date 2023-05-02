const useModal = () => {
  const open = (routeKey: string, {}) => {
    const url = new URL(window.location.href)
    url.searchParams.set(routeKey, 'opened')
    window.history.replaceState(null, '', url)
  }

  // return url.searchParams.get(routeKey) === "opened"

  return { open }
}

export default useModal
