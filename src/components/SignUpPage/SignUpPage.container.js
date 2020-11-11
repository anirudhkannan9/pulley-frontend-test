import React from "react";
import { connect, Provider } from "react-redux";
import SignUpPage from './SignUpPage.component'
import { increment, decrement, logIn, logOut } from '../../actions/index'
import store from '../../store'


const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        isLogged: state.isLogged
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(increment()), 
        decrement: () => dispatch(decrement()), 
        logIn: () => dispatch(logIn()), 
        logOut: () => dispatch(logOut())
    }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(SignUpPage)

const SignUpPageContainer = (props) => {
    return (
    <Provider store={store}>
        <Connected {...props}/>
    </Provider>
    )
}

export default SignUpPageContainer
// Can (theoretically) access state and dispatch as props from SignUpPage after connecting them 