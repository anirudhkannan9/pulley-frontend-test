import React from "react";
import { connect, Provider } from "react-redux";
import LogInPage from './LogInPage.component'
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

const Connected = connect(mapStateToProps, mapDispatchToProps)(LogInPage)

const LogInPageContainer = (props) => {
    return (
    <Provider store={store}>
        <Connected {...props}/>
    </Provider>
    )
}

export default LogInPageContainer
// Can (theoretically) access state and dispatch as props from LogInPage after connecting them 