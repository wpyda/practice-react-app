import React from 'react'
import {database} from './firebase'

import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List'
import ActionDelete from 'material-ui/svg-icons/action/delete'

const style = {
    margin: 20,
    padding: 20,
    textAlign: 'center'
}

const Task = (props) => (

    <ListItem
        primaryText={props.taskName}
        rightIcon={
            <ActionDelete
                onClick={() => props.deleteTask(props.taskId)}/>}
    />
)

class FirebaseToDo extends React.Component {

    state = {
        tasks: null,
        newTaskName: '',
    }

    componentWillMount() {
        database.ref('/firebaseToDo').on(
            'value', (snapshot) => {
                const tasksArray = Object.entries(
                    snapshot.val() || {}
                ).map(([key, value]) => {
                    value.key = key
                    return value
                })

                this.setState({tasks: tasksArray})
            }
        )
    }

    deleteTask = (taskId) => {
        database.ref(`/firebaseToDo/${taskId}`).remove()
    }

    updateState = (event, value) => {
        this.setState({newTaskName: value})
    }

    addTask = () => {
        if(!this.state.newTaskName) {
            alert('Nie można zapisać pustego taska')
            return
        }

        database.ref('/firebaseToDo').push({name: this.state.newTaskName})
        this.setState({
            newTaskName: ''
        })
    }

    render() {
        return (
            <Paper style={style}>
                <TextField
                    hintText='Nowe Zadanie'
                    fullWidth={true}
                    onChange={this.updateState}
                    value={this.state.newTaskName}
                />
                <RaisedButton
                    label='Dodaj'
                    secondary={true}
                    fullWidth={true}
                    onClick={this.addTask}
                />
                <List style={{textAlign: 'left'}}>
                    {
                        this.state.tasks
                        &&
                        this.state.tasks.map((task) => (
                            <Task
                                key={task.key}
                                taskName={task.name}
                                taskId={task.key}
                                deleteTask={this.deleteTask}
                            />
                        ))
                    }

                </List>

            </Paper>
        )
    }
}

export default FirebaseToDo