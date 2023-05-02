import { selectApp, setTheme } from '@store/app/app-slice'
import { useAppSelector } from '@store/hooks/use-app-selector'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MantineProviderProps,
} from '@mantine/core'
import { useState } from 'react'
import { useAppDispatch } from '@store/hooks/use-app-dispatch'

interface ThemeProviderProps extends MantineProviderProps {
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...rest }) => {
  const { theme } = useAppSelector(selectApp)
  const [colorScheme, setColorScheme] = useState<ColorScheme>(theme)
  const dispatch = useAppDispatch()

  const toggleColorScheme = (scheme?: ColorScheme) => {
    const value = scheme || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(value)
    dispatch(setTheme(value))
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} {...rest}>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default ThemeProvider
