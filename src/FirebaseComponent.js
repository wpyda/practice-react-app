import React from 'react'
import {database} from './firebase'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class FirebaseComponent extends React.Component {
    state = {
        text: null
    }

    setButtonHandler = () => {
        database.ref('/setExample').set(this.state.text).then(() => alert('Zapisano dane metodą set'))
    }

    typeText = (event) => {
        this.setState({text: event.target.value})
    }

    render() {
        return (
            <div>
                <h1>Firebase</h1>
                <div>
                    <TextField
                        floatingLabelText="JSON to send"
                        multiLine={true}
                        rows={2}
                        onChange={this.typeText}
                    />
                </div>

                <div>
                    <RaisedButton
                        label="SET"
                        secondary={true}
                        onClick={this.setButtonHandler}
                        fullWidth={true}
                    />
                </div>
            </div>
        )
    }
}

export default FirebaseComponent