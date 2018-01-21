import React, {Component} from 'react'

const databaseUrl = 'https://ad-snadbox.firebaseio.com/JFDDL3/restToDo/wojtek/'

class RestToDoList extends Component {
    state = {
        list: null,
        newTaskName: "Wpisz nowy task"
    }

    componentWillMount() {
        fetch(databaseUrl + 'list/.json')
            .then(response => response.json())
            .then(dataFromDatabase => this.setState({
                list: dataFromDatabase
            }))
    }

    handleInputChange = (event) => this.setState({
        newTaskName: event.target.value
    })

    handleButtonClick = () => {
        const newTaskObject = {name: this.state.newTaskName}

        fetch(
            databaseUrl + 'list/.json',
            {
                method: 'POST',
                body: JSON.stringify(newTaskObject)
            }
        )
            .then(() => alert('Dodano task!'))
            .catch((error) => alert('Cos poszlo nie tak')) // w catch zawsze jest error
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text"
                           onChange={this.handleInputChange}
                           value={this.state.newTaskName}
                    />
                    <button onClick={this.handleButtonClick}>Zapisz</button>

                </div>
                {
                    Object.entries(this.state.list || {})
                        .map(([key, task]) => (
                            <div key={key}>{task.name}</div>
                        ))
                }
            </div>
        )
    }
}

export default RestToDoList