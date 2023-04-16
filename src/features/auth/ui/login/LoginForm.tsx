import { Box } from '@mantine/core'
import { FC } from 'react'

interface ILoginForm {
  email?: string
  onSubmit: () => void
}

const LoginForm: FC<ILoginForm> = ({ email, onSubmit }) => {
  return (
    <Box>
      <h1>Login Form</h1>
    </Box>
  )
}

export default LoginForm
