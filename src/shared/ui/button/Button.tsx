import { Button as CoreButton, ButtonProps } from '@mantine/core'
import { FC } from 'react'

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <CoreButton {...rest}>{children}</CoreButton>
}

export default Button
