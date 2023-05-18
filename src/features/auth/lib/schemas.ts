import * as yup from 'yup'

const LOGIN_FORM_SCHEMA = yup.object().shape({
  email: yup.string().email().max(80).required().label('Email'),
  password: yup.string().required().label('Password'),
})

export default LOGIN_FORM_SCHEMA
