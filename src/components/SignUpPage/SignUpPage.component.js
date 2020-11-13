import React, {useState} from 'react'
import { Formik, Field, Form, FormItem } from 'formik'
import * as styles from './SignUpPageStyles'
import signupSchema from './SignUpSchema'
import './SignUpPage.css'

const SignUpPage = (props) => {
  const classes = styles.useStyles()
  const [showpw, setShowPw] = useState(false)
  const handleClickShowPw = () => setShowPw(!showpw)
  const handleMouseDownPw = (event) => event.preventDefault()
  const [showconfirmpw, setShowConfirmPw] = useState(false)
  const handleClickShowConfirmPw = () => setShowConfirmPw(!showconfirmpw)
  const handleMouseDownConfirmPw = (event) => event.preventDefault()

  return (
    <styles.MuiThemeProvider theme={styles.theme}>
    <>
    <img src={styles.logo} alt='logo' className='logo'/>
    <img src={styles.line} alt='line' className='line'/>
    <h1 className='createac'>Create your account</h1>
      <div className='logindiv'>
        <h3 className='already'>Already have a Pulley account?</h3>
        <styles.Button variant='outlined' onClick={() => props.increment()} className='loginbtn'>Log in</styles.Button>
      </div>


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
        {({ values, isSubmitting, touched, errors, handleChange, handleBlur, handleSubmit }) => (
          
        <form onSubmit={handleSubmit}>
          <div className='name-input'> 
              <styles.Input 
                placeholder='Name *'
                name='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />

            {
            touched.name && errors.name 
            ? (<div className='name-error'>{ errors.name } </div>)
            : null
            }
          </div>

          <div className='email-input'>
            <Field 
              placeholder='Email *'
              name='email' 
              type='input' 
              as={styles.TextField} 
            />
            {
            touched.email && errors.email 
            ? (<div className='email-error'>{ errors.email } </div>)
            : null
            }
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
           

          <div className='confirmPassword-input'>
          <styles.FormControl className={styles.clsx(classes.margin, classes.textField)}>
            <styles.Input
            name='confirmPassword'
            placeholder='Confirm password *'
            id="standard-adornment-password"
            type={showconfirmpw ? 'text' : 'password'}
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            endAdornment={
              <styles.InputAdornment position='end'>
                <styles.IconButton
                  aria-label="toggle confirm password visibility"
                  onClick={handleClickShowConfirmPw}
                  onMouseDown={handleMouseDownConfirmPw}
                >
                  {showconfirmpw ? <styles.Visibility /> : <styles.VisibilityOff />}
                </styles.IconButton>
              </styles.InputAdornment>
            }
            />
          </styles.FormControl>     
          {
          touched.confirmPassword && errors.confirmPassword 
          ? (<div className='confirmPassword-error'>{ errors.confirmPassword } </div>)
          : null
          }    
          </div>
          

          <div className='signup-btn'>
            <styles.Button variant='outlined' disabled={isSubmitting} type='submit'>Sign Up</styles.Button>
          </div>
        </form>
        
        )}</Formik>
    </div>

    <div className='tandc'>
      <h6>By clicking "Sign Up", you agree to Pulley Terms and Conditions and Privacy Policy.</h6>
    </div>
    
    </>
    </styles.MuiThemeProvider>
  )

}

export default SignUpPage  