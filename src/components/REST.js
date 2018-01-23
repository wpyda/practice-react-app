import React from 'react'

class REST extends React.Component {
    state = {
        data: 'Ładowanie...'
    }

    componentWillMount() {
        fetch('https://wpd-sandbox.firebaseio.com/restToDo/wojtek/')
            .then(response => response.json())
            .then(dataFromDatabase => this.setState({
                data: dataFromDatabase
            }))
    }

    render() {
        return (
            <div>{this.state.data}</div>
        )
    }
}

export default REST