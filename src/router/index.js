import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Carros from '../views/Carros/Carros.vue'
import SwalFire from '../views/SwalFire.vue'
import SelectGame from '../views/SelectGame.vue'
import TamCarro from '../views/Carros/Tam.vue'
import Frutas from '../views/Frutas/Frutas.vue'
import Aviones from '../views/Aviones/Aviones.vue'
import Anime from '../views/Anime/Anime.vue'
import Juegos from '../views/Juegos/Juegos.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {

        path: '/carros',
        name: 'carros',
        component: Carros
    },

    {
        path: '/prueba',
        name: 'Prueba',
        component: SwalFire
    },

    {
        path: '/selectgame',
        name: 'Selectgame',
        component: SelectGame
    },
    {
        path: '/tamCarro',
        name: 'TamCarro',
        component: TamCarro

    },
    {
        path: '/frutas',
        name: 'frutas',
        component: Frutas

    },
    {
        path: '/aviones',
        name: 'aviones',
        component: Aviones

    },
    {
        path: '/anime',
        name: 'anime',
        component: Anime

    },
    {
        path: '/juegos',
        name: 'juegos',
        component: Juegos

    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router