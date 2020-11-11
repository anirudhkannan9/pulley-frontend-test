import * as Yup from 'yup'

const SignUpSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    // email: Yup.string().email('Invalid email').required('This field is required'),
    // password: Yup.string().min(8, '8 characters minimum').max(128, '128 characters maximum').required('This field is required'),
    // shopifyShop: Yup.string()
    //     .matches(/^[a-z-:\/]+.myshopify.com\/?(admin)?$/,
    //     'Please use format of: example-store.myshopify.com').required('This field is required for Shopify users')
})

export default SignUpSchema