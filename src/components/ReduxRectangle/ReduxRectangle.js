import React from 'react'

import {connect} from 'react-redux'

class ReduxRectangle extends React.Component {
    render() {
        return (
            <div>
                <div
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: 'red'
                    }}>
                </div>

                <RaisedButton
                    label={"Toggle"}
                />
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