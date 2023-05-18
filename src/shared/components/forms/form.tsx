import { Button } from '@core/button'
import { Flex } from '@core/flex'
import { FC } from 'react'

interface IFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onCancel?: () => void
  children: React.ReactNode
  submitButtonLabel?: string
  cancelButtonLabel?: string
  loading?: boolean
  filledButtons?: boolean
  hideButtons?: boolean
}

const Form: FC<IFormProps> = ({
  onSubmit,
  onCancel,
  loading,
  submitButtonLabel,
  cancelButtonLabel,
  children,
  filledButtons,
  hideButtons,
}) => {
  return (
    <form className='app-form' onSubmit={onSubmit}>
      {children}
      {!hideButtons && (
        <Flex justify='end' mt={35} gap={10}>
          {onCancel && (
            <Button
              uppercase
              fullWidth={filledButtons}
              variant='outline'
              type='reset'
              onClick={onCancel}
            >
              {cancelButtonLabel}
            </Button>
          )}
          <Button uppercase fullWidth={filledButtons} loading={loading} type='submit'>
            {submitButtonLabel}
          </Button>
        </Flex>
      )}
    </form>
  )
}

Form.defaultProps = {
  submitButtonLabel: 'Submit',
  cancelButtonLabel: 'Cancel',
}

export default Form
