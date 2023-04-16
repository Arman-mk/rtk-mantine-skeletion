/**
 *
 * @param str
 * @returns
 */
export const isJsonString = (str: string | undefined): boolean => {
  if (!str) return false
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}
