import { PasswordInput as CoreInput, PasswordInputProps } from '@mantine/core'
import { FC } from 'react'

const PasswordInput: FC<PasswordInputProps> = ({ ...rest }: PasswordInputProps) => {
  return <CoreInput {...rest} />
}

export default PasswordInput
