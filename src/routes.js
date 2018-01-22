import Counter from './Counter'
import DefaultPropsComponent from './DefaultPropsComponent'
import REST from './REST'
import RestToDoList from "./RestToDoList"
import FirebaseComponent from './FirebaseComponent'
import FirebaseToDo from './FirebaseToDo'
import FirebaseLogIn from './FirebaseLogIn'
import ReduxToDo from './ReduxToDo'

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
]

export default routes