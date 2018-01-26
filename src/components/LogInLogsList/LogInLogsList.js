import React from 'react'

import moment from 'moment'

import {connect} from 'react-redux'

const LogInLogsList = (props) => (
    <ul>
        {Object.entries(props.loginLogsList || {})
            .map(([key, value]) => (
                <li key={key}>{moment(value.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</li>
            ))
        }
    </ul>
)

const mapStateToProps = state => ({
    loginLogsList: state.auth.loginLogs
})

export default connect(
    mapStateToProps
)(LogInLogsList)