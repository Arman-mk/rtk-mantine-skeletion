import { Box } from '@core/box'
import { Card } from '@core/card'
import { Flex } from '@core/flex'
import { ILoginUser } from '@features/auth/lib/types'
import { useLoginMutation } from '@store/auth/auth.api'
import { FC } from 'react'
import LoginForm from './login-form'

const Login: FC = () => {
  const [onLogin, { isLoading, errors }] = useLoginMutation()

  const submitHandler = (values: ILoginUser) => {
    onLogin(values)
  }

  return (
    <Flex gap='lg' align='center' justify='center' mih={'100vh'}>
      <Box
        component={Card}
        sx={{
          maxWidth: 400,
          margin: 'auto',
          flex: 1,
        }}
      >
        <h1>Login</h1>

        <LoginForm loading={isLoading} onSubmitForm={submitHandler} />
      </Box>
    </Flex>
  )
}

export default Login
