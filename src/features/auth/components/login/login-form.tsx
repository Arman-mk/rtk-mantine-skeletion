import { Flex } from '@core/flex'
import { FormInput, PasswordInput } from '@core/input'
import { ILoginUser } from '@features/auth/lib/types'
import { Form } from '@shared/components/forms'
import useAppForm from '@shared/hooks/use-app-form'
import useAppTranslation from '@shared/localization/use-app-translation'
import { FC } from 'react'
import LOGIN_FORM_SCHEMA from '@features/auth/lib/schemas'

interface ILoginForm {
  email?: string
  loading?: boolean
  onSubmitForm: (values: ILoginUser) => void
  onCancel?: () => void
}

const LoginForm: FC<ILoginForm> = ({ email, onCancel, loading, onSubmitForm }) => {
  const { t } = useAppTranslation()

  const { onSubmit, getInputProps } = useAppForm({
    schema: LOGIN_FORM_SCHEMA,
  })

  const submitForm = (values: ILoginUser) => {
    onSubmitForm(values)
  }

  return (
    <Form loading={loading} filledButtons onCancel={onCancel} onSubmit={onSubmit(submitForm)}>
      <Flex direction={{ base: 'column' }} gap={{ base: 'sm', sm: 'lg' }}>
        <FormInput
          label={t('EMAIL')}
          placeholder={t('EMAIL_TEXT')}
          type='email'
          {...getInputProps('email')}
        />
        <PasswordInput
          label={t('PASSWORD')}
          placeholder={t('PASSWORD_TEXT')}
          {...getInputProps('password')}
        />
      </Flex>
    </Form>
  )
}

export default LoginForm
