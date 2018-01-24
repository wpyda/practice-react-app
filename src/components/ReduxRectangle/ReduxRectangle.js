import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import {connect} from 'react-redux'
import {toggleRect} from '../../state/rectangle'

class ReduxRectangle extends React.Component {
    render() {
        return (

            <div>
                {
                    this.props.isRectVisible ?
                        <div
                            style={{
                                width: 200,
                                height: 200,
                                backgroundColor: 'red'
                            }}>
                        </div>
                        :
                        null
                }

                <RaisedButton
                    label={"Toggle"}
                    onClick={this.props.handleButtonClick}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    //nazwa propsa: kawałek.stanu.który.przypinamy
    isRectVisible: state.rectangle.isRectVisible
    // rectangle z 'rectangle: rectangleReducer' ze store.js
    // isRectVisible z initial state z rectangle.js
})

const mapDispatchToProps = dispatch => ({
    //nazwa propsa: funkcja.która.wywoła.dispatch (z akcją z kreatora z rectangle.js)
    handleButtonClick: () => dispatch(toggleRect())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxRectangle)