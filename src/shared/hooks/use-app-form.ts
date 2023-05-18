import { useForm, yupResolver, UseFormReturnType } from '@mantine/form'
import { Schema } from 'yup'

interface UseAppFormProps {
  schema: Schema<any>
  [key: string]: any
}

const useAppForm = ({ schema, ...props }: UseAppFormProps): UseFormReturnType<any> => {
  const form = useForm<any>({
    validate: yupResolver(schema),
    ...props,
  })

  return form
}

export default useAppForm
