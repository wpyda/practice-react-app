import React from 'react'

import {connect} from 'react-redux'

const LogInLogsList = (props) => (
    <div>
        {Object.entries(props.loginLogsList || {})
            .map(([key, value]) => (
                <div>{key} ::: {value.timestamp}</div>
            ))
        }
    </div>
)

const mapStateToProps = state => ({
    loginLogsList: state.auth.loginLogs
})

export default connect(
    mapStateToProps
)(LogInLogsList)