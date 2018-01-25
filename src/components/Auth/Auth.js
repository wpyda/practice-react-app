import React from 'react'

import LogIn from './LogIn'
import SignUp from './SignUp'

import {connect} from 'react-redux'

const Auth = (props) => (
    props.userData ?
        props.children
        :
        <div>
            <LogIn/>
            <SignUp/>
        </div>
)

const mapStateToProps = state => ({
    userData: state.auth.user  // userData - nasza nazwa, auth - nasza nazwa ze store.js, user- z initialState z auth.js
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)