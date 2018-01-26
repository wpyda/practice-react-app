import Counter from './components/Counter'
import DefaultPropsComponent from './components/DefaultPropsComponent'
import REST from './components/REST'
import RestToDoList from "./components/RestToDoList"
import FirebaseComponent from './components/FirebaseComponent'
import FirebaseToDo from './components/FirebaseToDo'
import FirebaseLogIn from './components/FirebaseLogIn'
import ReduxToDo from './components/ReduxToDo'
import ReduxSimpleText from './components/ReduxSimpleText'
import ReduxRectangle from './components/ReduxRectangle'
import ReduxCounter from './components/ReduxCounter'
import ReduxAsyncActions from './components/ReduxAsyncActions'
import LogInLogsList from './components/LogInLogsList'

const routes = [
    {
        path: '/component/counter',
        text: 'Counter',
        component: Counter
    },
    {
        path: '/component/default-props',
        text: 'defaultProps example',
        component: DefaultPropsComponent
    },
    {
        path: '/component/rest',
        text: 'Simple REST GET data',
        component: REST
    },
    {
        path: '/component/rest-to-do',
        text: 'REST To Do List',
        component: RestToDoList
    },
    {
        path: '/component/firebase',
        text: 'Firebase basics',
        component: FirebaseComponent
    },
    {
        path: '/component/firebase-to-do',
        text: 'FirebaseToDo',
        component: FirebaseToDo
    },
    {
        path: '/component/firebase-log-in',
        text: 'FirebaseLogIn',
        component: FirebaseLogIn
    },
    {
        path: '/component/redux-to-do',
        text: 'ReduxToDo',
        component: ReduxToDo
    },
    {
        path: '/component/redux-simple-text',
        text: 'ReduxSimpleText',
        component: ReduxSimpleText
    },
    {
        path: '/component/redux-rectangle',
        text: 'ReduxRectangle',
        component: ReduxRectangle
    },
    {
        path: '/component/redux-counter',
        text: 'ReduxCounter',
        component: ReduxCounter
    },
    {
        path: '/component/redux-async-actions',
        text: 'ReduxAsyncActions',
        component: ReduxAsyncActions
    },
    {
        path: '/component/login-logs-list',
        text: 'LogInLogsList',
        component: LogInLogsList
    },
]

export default routes