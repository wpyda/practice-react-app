import React, {Component} from 'react'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {connect} from 'react-redux'
import {changeText} from "../../state/text";

class ReduxSimpleText extends Component {
    state = {
        currentText: ''
    }

    changeText = (event, value) => {
        this.setState({currentText: value})
    }

    render() {
        return (
                <div>
                    <h1>{this.props.displayedText}</h1>
                    <TextField
                        hintText="Enter text"
                        fullWidth={true}
                        value={this.state.currentText}
                        onChange={this.changeText}
                    />

                    <RaisedButton
                        label="Change Text"
                        secondary={true}
                        fullWidth={true}
                        onClick={() => this.props.handleButtonClick(this.state.currentText)}
                    />
                </div>
        )
    }
}

const mapStateToProps = state => ({
    displayedText: state.text.text
})

const mapDispatchToProps = dispatch => ({
    handleButtonClick: (newText) => dispatch(changeText(newText))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxSimpleText)