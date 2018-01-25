import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import todoReducer from './state/todo'
import textReducer from './state/text'
import rectangleReducer from './state/rectangle'
import reduxCounterReducer from './state/reduxCounter'
import asyncActionsReducer from './state/asyncActions'
import loadingReducer from './state/loading'
import authReducer, {initAuth} from './state/auth'

const reducer = combineReducers({
    todo: todoReducer,
    text: textReducer,
    rectangle: rectangleReducer,
    reduxCounter: reduxCounterReducer,
    asyncActions: asyncActionsReducer,
    loading: loadingReducer,
    auth: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(initAuth)

export default store