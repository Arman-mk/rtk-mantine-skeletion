import { selectApp, setTheme } from '@shared/store/app/appSlice'
import { useAppSelector } from '@shared/store/hooks/useAppSelector'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MantineProviderProps,
} from '@mantine/core'
import { useState } from 'react'
import { useAppDispatch } from '@shared/store/hooks/useAppDispatch'

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
