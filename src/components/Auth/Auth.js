import React from 'react'

import LogIn from './LogIn'
import SignUp from './SignUp'

import {connect} from 'react-redux'
import {logIn} from '../../state/auth'

class Auth extends React.Component {
    state = {
        loginEmail: '',
        loginPassword: '',
        signUpEmail: '',
        signUpPassword: '',
        signUpRetypePassword: ''
    }

    handleInput = (nameInState, event, value) => {
        const newState = {}
        newState[nameInState] = value
        this.setState(newState)
    }

    render() {
        return (
            this.props.userData ?
                this.props.children
                :
                <div>
                    <LogIn
                        onEmailChange={(event, value) => (this.handleInput('loginEmail', event, value))}
                        onPasswordChange={(event, value) => (this.handleInput('loginPassword', event, value))}
                        onLogInClick={()=> this.props.onLogInClick(this.state.loginEmail, this.state.loginPassword)}
                        onLogInByGoogleClick={() => {}}
                    />

                    <SignUp
                        onEmailChange={(event, value) => (this.handleInput('signUpEmail', event, value))}
                        onPasswordChange={(event, value) => (this.handleInput('signUpPassword', event, value))}
                        onSignUpClick={() => {}}
                        onRetypePasswordChange={(event, value) => (this.handleInput('signUpRetypePassword', event, value))}
                    />
                </div>
        )
    }

}

const mapStateToProps = state => ({
    userData: state.auth.user  // userData - nasza nazwa, auth - nasza nazwa ze store.js, user- z initialState z auth.js
})

const mapDispatchToProps = dispatch => ({
    onLogInClick: (email, password) => dispatch(logIn(email, password))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)