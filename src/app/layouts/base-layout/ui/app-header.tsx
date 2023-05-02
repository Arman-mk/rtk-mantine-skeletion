import ThemeSwitcher from '@app/layouts/shared/ui/theme-switcher'
import { Group, Header } from '@mantine/core'
import { memo } from 'react'

const AppHeader = () => {
  return (
    <Header height={80}>
      <Group sx={{ height: '100%' }} px={20} position='apart'>
        <h1 className='m-0'>Logo</h1>
        <ThemeSwitcher />
      </Group>
    </Header>
  )
}

export default memo(AppHeader)
