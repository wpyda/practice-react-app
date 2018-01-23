import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List'
import ActionDelete from 'material-ui/svg-icons/action/delete'

import {connect} from 'react-redux'
import {addTask, deleteTask} from "../state/todo"

const style = {
    margin: 20,
    padding: 20,
    textAlign: 'center',
}

const Task = (props) => (

    <ListItem
        primaryText={props.taskName}
        rightIcon={
            <ActionDelete
                onClick={() => props.deleteTask(props.taskId)}/>}
    />
)

class ReduxToDo extends React.Component {

    state = {
        newTaskName: '',
    }

    render() {
        return (
            <Paper style={style}>
                <TextField
                    hintText='Nowe Zadanie'
                    fullWidth={true}
                    onChange={(e,value)=> this.setState({newTaskName: value})}
                    value={this.state.newTaskName}
                />
                <RaisedButton
                    label='Dodaj'
                    secondary={true}
                    fullWidth={true}
                    onClick={() => this.props.addTask(this.state.newTaskName)}
                />
                <List style={{textAlign: 'left'}}>
                    {
                        this.props.tasks
                        &&
                        this.props.tasks.map((task) => (
                            <Task
                                key={task.key}
                                taskName={task.name}
                                taskId={task.key}
                                deleteTask={this.props.deleteTask}
                            />
                        ))
                    }

                </List>

            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.todo.tasks
})

const mapDispatchToProps = dispatch => ({
    addTask: name => dispatch(addTask(name)),
    deleteTask: key => dispatch(deleteTask(key))
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ReduxToDo)