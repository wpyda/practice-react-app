import React from 'react'

import {connect} from 'react-redux'

class ReduxRectangle extends React.Component {
    render() {
        return (
            <div>
                dadadad
            </div>
        )
    }
}

const mapStateToProps = state => ({
    //nazwa propsa: kawałek.stanu.który.przypinamy
})

const mapDispatchToProps = dispatch => ({
    //nazwa propsa: funkcja.która.wywoła.dispatch (z akcją)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxRectangle)