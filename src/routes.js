import Counter from './components/Counter'
import DefaultPropsComponent from './components/DefaultPropsComponent'
import REST from './components/REST'
import RestToDoList from "./components/RestToDoList"
import FirebaseComponent from './components/FirebaseComponent'
import FirebaseToDo from './components/FirebaseToDo'
import FirebaseLogIn from './components/FirebaseLogIn'
import ReduxToDo from './components/ReduxToDo'
import ReduxSimpleText from './components/ReduxSimpleText'

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
]

export default routes