import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    redirect: { name: 'BooksPage' },
    components: {
      default: () => import('@/views/LandingPage.vue')
    },
    children: [
      {
        path: 'books',
        alias: 'index',
        name: 'BooksList',
        components: {
          default: () => import('@/views/BooksList.vue')
        },
      },
      {
        path: 'books/:bookId',
        name: 'BookDetail',
        components: {
          default: () => import('@/views/BookDetail.vue')
        },
        props: {
          default(route) {
            return {
              bookId: route.params.bookId
            }
          }
        }
      }
    ]
  },
]

const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return {
      el: to.hash,
      top: 100,
      behavior: 'smooth',
    }
  } else {
    return { top: 0, behavior: 'smooth' }
  }
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior,
})

export default router
