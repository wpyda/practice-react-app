const ADD_TASK = 'todo/ADD_TASK'

let nextTaskId = 0

export const addTask = name => ({
    type: ADD_TASK,
    name: name,
    key: nextTaskId++
})

const initialState = {
    tasks: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat([{
                    name: action.name,
                    key: action.key
                }])
            }

        default:
            return state
    }
}