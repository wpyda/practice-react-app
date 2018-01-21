import Counter from './Counter'
import DefaultPropsComponent from './DefaultPropsComponent'
import REST from './REST'

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
    }
]

export default routes