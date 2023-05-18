import { Button as CoreButton, ButtonProps } from '@mantine/core'
import { FC } from 'react'

interface IButton extends  ButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {

}


const Button: FC<IButton> = ({ children, ...rest }) => {
  return <CoreButton {...rest}>{children}</CoreButton>
}

export default Button
