import {createStore, combineReducers} from 'redux'
import todoRecucer from './state/todo'

const reducer = combineReducers({
    todo: todoRecucer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store