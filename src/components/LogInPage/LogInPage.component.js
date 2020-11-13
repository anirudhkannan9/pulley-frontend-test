import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import * as styles from './LogInPageStyles'
import loginSchema from './LogInSchema'
import './LogInPage.css'

const LogInPage = (props) => {
    const classes = styles.useStyles()
    const [showpw, setShowPw] = useState(false)
    const handleClickShowPw = () => setShowPw(!showpw)
    const handleMouseDownPw = (event) => event.preventDefault()

    return (
        <styles.MuiThemeProvider theme={styles.theme}>
        <>
        <img src={styles.logo} alt='logo' class='images'/>
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
                {({ values, isSubmitting, touched, errors, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div className='email-input'>
                        <Field placeholder='Email *' name='email' type='input' as={styles.TextField}/>
                        {touched.email && errors.email 
                        ? (<div className='email-error'>{errors.email}</div>) 
                        : null}
                    </div>

                    <div className='password-input'>
                            <styles.FormControl className={styles.clsx(classes.margin, classes.textField)}>
                                <styles.Input
                                name='password'
                                placeholder='Password *'
                                id="standard-adornment-password"
                                type={showpw ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                endAdornment={
                                <styles.InputAdornment position='end'>
                                    <styles.IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPw}
                                    onMouseDown={handleMouseDownPw}
                                    >
                                    {showpw ? <styles.Visibility /> : <styles.VisibilityOff />}
                                    </styles.IconButton>
                                </styles.InputAdornment>
                                }
                                />
                            </styles.FormControl>     
                            {
                            touched.password && errors.password 
                            ? (<div className='password-error'>{ errors.password } </div>)
                            : null
                            }    
                            </div>

                <div className='login-btn'>
                    <styles.Button variant='outlined' disabled={isSubmitting} type='submit'>Log in</styles.Button>
                </div>
                </form>
            )}</Formik>
            <div className='forgot-password'> <h6>Forgot your password?</h6> </div>
            <div className='reset-password-btn'> <styles.Button variant='outlined'>Reset password</styles.Button> </div>
            <div className='sign-up'><h6>Already have a Pulley account?</h6></div>
            <div className='sign-up-btn'><styles.Button variant='outlined' onClick={() => props.decrement()}>Sign up!</styles.Button></div>
                
            
            
        </>
        </styles.MuiThemeProvider>
        )
}
  
export default LogInPage 
