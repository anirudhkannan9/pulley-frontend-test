import React, { useState, useEffect } from 'react'
import { Formik, Field, Form, FormItem } from 'formik'
import * as styles from './LogInPageStyles'
import loginSchema from './LogInSchema'
import './LogInPage.css'




const LogInPage = (props) => {
    const classes = styles.useStyles()

    return (
        <styles.MuiThemeProvider theme={styles.theme}>
        <>
        <img src={styles.logo} alt='logo' class='images'/>
        <styles.Box border={1} borderRadius={16} borderColor={'black'} className='login-box'>
            <h2 className='login'>Log in to Pulley</h2>
            <Formik 
                initialValues={{ email: '', password: ''}}
                validationSchema={loginSchema} 
                onSubmit={(data, {setSubmitting}) => {
                    setSubmitting(true)
                    // make async call
                    console.log('submit', data)
                    setSubmitting(false)
            }}
            >
                {({ values, isSubmitting, touched, errors}) => (
                <Form className='login-form'>
                    <Field required label='Email' name='email' type='input' as={styles.TextField}/>
                    {touched.email && errors.email 
                    ? (<div className='email-error'>{errors.email}</div>) 
                    : null}

                    <div>
                        <Field required label='Password' name='password' type='input' as={styles.TextField}/>
                        {touched.password && errors.password 
                        ? (<div className='password-error'>{errors.password}</div>)
                        : null}
                    </div>
                <div>
                    <styles.Button disabled={isSubmitting} type='submit'>Log in</styles.Button>
                </div>
                {/* <pre>
                    {JSON.stringify(values, null, 2)}
                </pre> */}
                </Form>
            )}</Formik>
            <div className='signupdiv'>
                <h6 className='noaccount'>Don't have a Pulley account?</h6>
                <styles.Button className='signup-btn' onClick={() => props.decrement()}>Sign up!</styles.Button>
            </div>
            
        </styles.Box>
        </>
        </styles.MuiThemeProvider>
        )
}
  
export default LogInPage 
