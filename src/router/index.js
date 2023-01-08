import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TodoLists from "@/views/TodoLists";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/todoLists',
    name: 'todoLists',
    component: TodoLists
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes
})

export default router
