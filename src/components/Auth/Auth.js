import React from 'react'

import LogIn from './LogIn'
import SignUp from './SignUp'

import {connect} from 'react-redux'
import {logIn, logInByGoogle, createUser} from '../../state/auth'

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

    createUserHandler = () => {
        if (this.state.signUpPassword !== this.state.signUpRetypePassword) {
            alert('Podane hasła nie są jednakowe')
            return
        }
        this.props.onSignUpClick(
            this.state.signUpEmail,
            this.state.signUpPassword
        )
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
                        onLogInClick={() => this.props.onLogInClick(this.state.loginEmail, this.state.loginPassword)}
                        onLogInByGoogleClick={this.props.onLogInByGoogleClick}    // bez () => gdyż nie przekazujemy argumentów = nie wywołujemy funkcji
                    />

                    <SignUp
                        onEmailChange={(event, value) => (this.handleInput('signUpEmail', event, value))}
                        onPasswordChange={(event, value) => (this.handleInput('signUpPassword', event, value))}
                        onSignUpClick={this.createUserHandler}
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
    onLogInClick: (email, password) => dispatch(logIn(email, password)),
    onLogInByGoogleClick: () => dispatch(logInByGoogle()),
    onSignUpClick: (email, password) => dispatch(createUser(email, password))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)