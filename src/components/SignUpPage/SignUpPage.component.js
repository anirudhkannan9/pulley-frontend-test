import React from 'react'
import { Formik, Field, Form, FormItem } from 'formik'
import * as styles from './SignUpPageStyles'
import signupSchema from './SignUpSchema'
import './SignUpPage.css'

const SignUpPage = (props) => {

  return (
    <div>
      <Formik 
      initialValues={{ name: '', email: '', password: '', confirmPassword: ''}} 
      validationSchema={signupSchema}
      onSubmit={(data, { setSubmitting}) => {
        setSubmitting(true)
        // make async request
        console.log('submit', data)
        setSubmitting(false)
      }}>
        {({ values, isSubmitting, touched, errors }) => (
        <Form>
          <Field 
            placeholder='Name' 
            required
            name='name' 
            type='input' 
            as={styles.TextField} 
          />
          {
          touched.name && errors.name 
          ? (<div className='name-error'>{ errors.name } </div>)
          : null
          }
          <Field 
            placeholder='Email'
            required
            name='email' 
            type='input' 
            as={styles.TextField} 
          />
          {
          touched.email && errors.email 
          ? (<div className='email-error'>{ errors.email } </div>)
          : null
          }
          <Field 
            placeholder='Password'
            required
            name='password' 
            type='input' 
            as={styles.TextField} 
          />
          {
          touched.password && errors.password 
          ? (<div className='password-error'>{ errors.password } </div>)
          : null
          }
          <Field 
            placeholder='Confirm password' 
            required
            name='confirmPassword' 
            type='input' 
            as={styles.TextField} 
          />
          {
          touched.confirmPassword && errors.confirmPassword 
          ? (<div className='confirmPassword-error'>{ errors.confirmPassword } </div>)
          : null
          }

          <div>
            <styles.Button type='submit'>Sign up</styles.Button>
          </div>
          <pre>
            {JSON.stringify(values, null, 2)}
          </pre>
        </Form>
        )}</Formik>
  
    </div>
  )

}

export default SignUpPage  