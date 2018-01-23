import {createStore, combineReducers} from 'redux'
import todoRecucer from './state/todo'
import textRecucer from './state/text'

const reducer = combineReducers({
    todo: todoRecucer,
    text: textRecucer,
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store