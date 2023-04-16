import { TextInput as CoreInput, TextInputProps } from '@mantine/core'
import { FC } from 'react'

const Input: FC<TextInputProps> = ({ ...rest }: TextInputProps) => {
  return <CoreInput {...rest} />
}

export default Input
