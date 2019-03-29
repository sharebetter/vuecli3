const Detail = () => import(/* webpackChunkName: "Home" */ '@/views/detail/Index')
const Introduction = () => import(/* webpackChunkName: "Home" */ '@/views/introduction/Index')
const Syllabus = () => import(/* webpackChunkName: "Home" */ '@/views/syllabus/Index')

export default [
    {
        path: '/Home',
        name: 'home',
        component: Detail,
        meta: { keepAlive: true }
    },
    {
        path: '/Introduction',
        name: 'introduction',
        component: Introduction,
        meta: { keepAlive: true }
    },
    {
        path: '/Syllabus',
        name: 'syllabus',
        component: Syllabus,
        meta: { keepAlive: true }
    }
]
