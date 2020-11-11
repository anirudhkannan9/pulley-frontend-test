import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Invalid email')
        .required('This field is required'),
    password: Yup
        .string()
        .min(8, '8 characters minimum')
        .max(128, '128 characters maximum')
        .required('This field is required')
})

export default loginSchema 
