import React, { useState, useEffect } from 'react'
import './SignUpPage.css'
import * as styles from './SignUpPageStyles'
import * as SignUpSchema from './SignUpSchema'
import { Formik } from 'formik'

const SignUpPage = (props) => {
  const classes = styles.useStyles()

// TODO: more economical State from: https://codesandbox.io/s/material-demo-forked-m7b7u?file=/demo.js
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [confirmpw, setConfirmPw] = useState('')
  const [showpw, setShowPw] = useState(false)
  const [showconfirmpw, setShowConfirmPw] = useState(false)
  const handleNameChange = (event) => {
    setName(event.target.value)
    console.log('this is the new name:', event.target.value )
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    console.log('this is the new email:', event.target.value)
  }
  const handlePwChange = (event) => {
    setPw(event.target.value)
    console.log('this is the new pw:', event.target.value)
  }
  const handleConfirmPwChange = (event) => {
    setConfirmPw(event.target.value)
    console.log('this is the new confirm pw:', event.target.value)
  }
  const handleClickShowPw = () => setShowPw(!showpw)
  const handleClickShowConfirmPw = () => setShowConfirmPw(!showconfirmpw)
  const handleMouseDownPw = (event) => event.preventDefault()
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


      <div className='input-form'>
        <div>
            <styles.TextField required id="standard-required" label="Name" defaultValue="" name={name} onChange={handleNameChange}/>
        </div>
        <div>
          <styles.TextField required id="standard-required" label="Email" defaultValue="" email={email} onChange={handleEmailChange}/>
        </div>
        <div>
          <styles.FormControl className={styles.clsx(classes.margin, classes.textField)}>
          
            <styles.InputLabel htmlFor="standard-adornment-password"> Password * </styles.InputLabel>
              <styles.Input 
                id="standard-adornment-password"
                type={ showpw ? "text" : "password" } 
                value={pw}
                onChange={handlePwChange}
                endAdornment={
                  <styles.InputAdornment position='end'>
                    <styles.IconButton onClick={handleClickShowPw} onMouseDown={handleMouseDownPw}>
                      { showpw ? <styles.Visibility /> : <styles.VisibilityOff />}
                    </styles.IconButton>
                  </styles.InputAdornment>
                  }
              />
          </styles.FormControl>
        </div>

        <div>
            <styles.FormControl className={styles.clsx(classes.margin, classes.textField)}>
              <styles.InputLabel htmlFor="standard-adornment-password"> Confirm Password * </styles.InputLabel>
                <styles.Input 
                  id="standard-adornment-password"
                  type={ showconfirmpw ? "text" : "password" } 
                  value={ confirmpw }
                  onChange={ handleConfirmPwChange }
                  endAdornment={
                    <styles.InputAdornment position='end'>
                      <styles.IconButton onClick={handleClickShowConfirmPw} onMouseDown={handleMouseDownConfirmPw}>
                        { showconfirmpw ? <styles.Visibility /> : <styles.VisibilityOff />}
                      </styles.IconButton>
                    </styles.InputAdornment>
                  }
                />
            </styles.FormControl>
        </div>
        <br></br>
          <styles.Button variant='outlined' color='primary' size='large'>Sign Up</styles.Button>
        <br></br>
        <h6>By clicking "Sign Up", you agree to Pulley <strong>Terms & Conditions</strong> and <strong>Privacy Policy</strong></h6>
      </div>
    </>
    </styles.MuiThemeProvider>
  )

}

export default SignUpPage  