import React from 'react'
import {database} from './firebase'

class FirebaseComponent extends React.Component {

    componentWillMount() {
        console.log(database)
    }
    render() {
        return (
            <div>Firebase</div>
        )
    }
}

export default FirebaseComponent