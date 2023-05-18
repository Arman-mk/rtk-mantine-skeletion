import { Box as CoreBox, BoxProps } from '@mantine/core'
import { FC } from 'react'

interface IBoxProps extends BoxProps {
  children: React.ReactNode
}

const Box: FC<IBoxProps> = ({ children, ...rest }) => {
  return <CoreBox {...rest}>{children}</CoreBox>
}

export default Box
