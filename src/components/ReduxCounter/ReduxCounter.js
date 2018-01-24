import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import {connect} from 'react-redux'
import {counterInc} from "../../state/reduxCounter"
import {counterDec} from "../../state/reduxCounter"
import {counterReset} from "../../state/reduxCounter"

class ReduxCounter extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.counterValue}</h1>
                <RaisedButton
                    secondary={true}
                    label={'+'}
                    onClick={this.props.handleButtonIncrease}
                />
                <RaisedButton
                    primary={true}
                    label={'-'}
                    onClick={this.props.handleButtonDecrease}
                />

                <RaisedButton
                    label={'RESET'}
                    onClick={this.props.handleButtonReset}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counterValue: state.reduxCounter.counterValue
})

const mapDispatchToProps = dispatch => ({
    handleButtonIncrease: () => dispatch(counterInc()),
    handleButtonDecrease: () => dispatch(counterDec()),
    handleButtonReset: () => dispatch(counterReset())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxCounter)