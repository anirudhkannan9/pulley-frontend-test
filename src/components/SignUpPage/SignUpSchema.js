import * as Yup from 'yup'

const signupSchema = Yup.object().shape({
    name: Yup
        .string()
        .required('This field is required'),
    email: Yup
        .string()
        .email('Invalid email')
        .required('This field is required'),
    password: Yup
        .string()
        .min(8, '8 characters minimum')
        .max(128, '128 characters maximum')
        .required('This field is required'),
    confirmPassword: Yup
        .string()
        .required('This field is required')
        .oneOf([Yup.ref('password'), null], 'Please make sure your passwords match')
    
 

        
})

export default signupSchema 