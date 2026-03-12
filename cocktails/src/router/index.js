// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Cocktail from '@/pages/Cocktail.vue'
import CocktailRandom from '@/pages/CocktailRandom.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    alias: ['/home', '/main', '/index'], // массив альтернативных путей на Home
  },
  {
    path: '/cocktail/:rid',
    name: 'cocktail',
    component: Cocktail,
  },
  {
    path: '/random',
    name: 'cocktailRandom',
    component: CocktailRandom,
  },
]

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(), // вместо с createWebHistory,
  routes
})

export default router