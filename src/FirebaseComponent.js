import React from 'react'
import {database} from './firebase'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class FirebaseComponent extends React.Component {
    state = {
        text: null
    }

    setButtonHandler = () => {
        let parsedData = null

        try {
            parsedData = JSON.parse(this.state.text)
        } catch(error){
            alert('Wpisałeś niepoprawnego JSONa')
            return
        }

        database.ref('/setExample').set(parsedData)
            .then(() => alert('Zapisano dane metodą SET'))
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
                        fullWidth={true}
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