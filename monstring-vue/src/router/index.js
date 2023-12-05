import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SoldiersView from '../views/SoldiersView.vue'
import VehiclesView from '../views/VehiclesView.vue'
import WeaponsView from '../views/WeaponsView.vue'

const routes = [
    {
        path: '/',
        name: 'hjem',
        component: HomeView
    },
    {
        path: '/soldiers',
        name: 'soldater',
        component: SoldiersView
    },
    {
        path: '/vehicles',
        name: 'kjøretøy',
        component: VehiclesView
    },
    {
        path: '/weapons',
        name: 'våpen',
        component: WeaponsView
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router