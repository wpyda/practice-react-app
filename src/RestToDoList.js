import React, {Component} from 'react'

const databaseUrl = 'https://wpd-sandbox.firebaseio.com/restToDo/wojtek/'

class RestToDoList extends Component {
    state = {
        list: null,
        newTaskName: "",
        currentlyEditedTaskId: null,
        currentlyEditedTaskName: ''
    }

    getDataFromDatabase = () => {
        fetch(databaseUrl + 'list/.json')
            .then(response => response.json())
            .then(dataFromDatabase => this.setState({
                list: dataFromDatabase,
                newTaskName: '',
                currentlyEditedTaskId: null,
                currentlyEditedTaskName: ''
            }))
    }

    deleteTask = (taskId) => {
        fetch(
            databaseUrl + 'list/' + taskId + '/.json',
            {method: 'DELETE'}
        )
            .then(() => this.getDataFromDatabase())
    }

    componentWillMount() {
        this.getDataFromDatabase()
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
            .then(() => this.getDataFromDatabase())
            .catch((error) => alert('Cos poszlo nie tak')) // w catch zawsze jest error
    }

    handleTaskNameClick = (taskId, taskName) => {
        this.setState({
            currentlyEditedTaskId: taskId,
            currentlyEditedTaskName: taskName
        })
    }

    handleEditInputChange = (e) => this.setState({
        currentlyEditedTaskName: e.target.value
    })

    handleSaveButtonClick = () => {
        const newTaskObject = {name: this.state.currentlyEditedTaskName}
        fetch(
            databaseUrl + 'list/' + this.state.currentlyEditedTaskId + '.json',
            {
                method: 'PATCH',
                body: JSON.stringify(newTaskObject)
            }
        )
            .then(() => {this.getDataFromDatabase()})
            .catch((error) => alert('Cos poszlo nie tak'))
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
                            <div key={key}>
                                <span onClick={() => this.handleTaskNameClick(key, task.name)}>
                                    {
                                        this.state.currentlyEditedTaskId === key ?
                                            <span>
                                            <input
                                                value={this.state.currentlyEditedTaskName}
                                                onChange={this.handleEditInputChange}
                                            />
                                                <button onClick={this.handleSaveButtonClick}>
                                                    Zapisz
                                                </button>
                                            </span>
                                            :
                                            task.name
                                    }
                                </span>
                                <button onClick={() => this.deleteTask(key)}>
                                    Usun
                                </button>
                            </div>
                        ))
                }
            </div>
        )
    }
}

export default RestToDoList