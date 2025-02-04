import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import AddMovieView from '@/views/AddMovieView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/addmovie',
      name: 'AddMovieView',
      component: AddMovieView,
    }

  ],
})

export default router
