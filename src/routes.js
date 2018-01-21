import Counter from './Counter'
import DefaultPropsComponent from './DefaultPropsComponent'
import REST from './REST'
import RestToDoList from "./RestToDoList";
import FirebaseComponent from './FirebaseComponent'

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
]

export default routes