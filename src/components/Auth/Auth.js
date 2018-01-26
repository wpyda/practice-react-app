import React from 'react'
import Forms from './Forms'

import {connect} from 'react-redux'

const Auth = (props) => (
    props.userData ?
        props.children
        :
        <Forms/>
)

const mapStateToProps = state => ({
    userData: state.auth.user  // userData - nasza nazwa, auth - nasza nazwa ze store.js, user- z initialState z auth.js
})

export default connect(
    mapStateToProps
)(Auth)