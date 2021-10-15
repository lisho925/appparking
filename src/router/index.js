import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/pago',
    name: 'Pago',
    component: () => import('../views/Pago.vue')
  },
  {
    path: '/formapago',
    name: 'FormaPago',
    component: () => import('../views/FormaPago.vue')
  },
  {
    path: '/tarifas',
    name: 'Tarifas',
    component: () => import('../views/Tarifas.vue')
  },
  {
    path: '/tipovehiculo',
    name: 'TipoVehiculo',
    component: () => import('../views/TipoVehiculo.vue')
  },
  {
    path: '/zonas',
    name: 'Zonas',
    component: () => import('../views/Zonas.vue')
  },
  {
    path: '/tipousuario',
    name: 'TipoUsuario',
    component: () => import('../views/TipoUsuario.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
