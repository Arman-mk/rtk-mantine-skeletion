import { TextInput as CoreInput, TextInputProps } from '@mantine/core'
import { FC } from 'react'

const FormInput: FC<TextInputProps> = ({ ...rest }: TextInputProps) => {
  return <CoreInput {...rest} />
}

export default FormInput
