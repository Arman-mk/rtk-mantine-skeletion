import { Input as CoreInput, InputProps } from '@mantine/core'
import { FC } from 'react'

const Input: FC<InputProps> = ({ ...rest }: InputProps) => {
  return <CoreInput {...rest} />
}

export default Input
