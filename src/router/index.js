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


import Carros9X8 from '../views/Carros/Carros9X8.vue'
import Carros8X7 from '../views/Carros/Carros8X7.vue'
import Carros6X5 from '../views/Carros/Carros6X5.vue'
import Carros5X4 from '../views/Carros/Carros5X4.vue'
import Carros4X3 from '../views/Carros/Carros4X3.vue'
import Carros3X2 from '../views/Carros/Carros3X2.vue'





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

        path: '/carros9x8',
        name: 'Carros9X8',
        component: Carros9X8
    },
    {

        path: '/carros8x7',
        name: 'Carros8X7',
        component: Carros8X7
    },
    {

        path: '/carros6x5',
        name: 'Carros6X5',
        component: Carros6X5
    },
    {

        path: '/carros5x4',
        name: 'Carros5X4',
        component: Carros5X4
    },
    {

        path: '/carros4x3',
        name: 'Carros4X3',
        component: Carros4X3
    },
    {

        path: '/carros3x2',
        name: 'Carros3X2',
        component: Carros3X2
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