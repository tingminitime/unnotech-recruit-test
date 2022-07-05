import { createRouter, createWebHashHistory } from 'vue-router'
import { useHeaderStore } from '@/stores/header'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    redirect: { name: 'BooksList' },
    components: {
      default: () => import('@/views/LandingPage.vue')
    },
    children: [
      // 書本列表
      {
        path: 'books',
        alias: 'index',
        name: 'BooksList',
        components: {
          default: () => import('@/views/BooksList.vue')
        },
        meta: {
          headerName: '書本列表',
          showBackButton: false,
          recordRouteName: false
        },
        props: {
          default(route) {
            return {
              // headerName: route.meta.headerName
            }
          }
        }
      },
      // 書本詳情
      {
        path: 'books/:bookId',
        name: 'BookDetail',
        components: {
          default: () => import('@/views/BookDetail.vue')
        },
        meta: {
          // headerName: '書本詳情',
          showBackButton: true,
          recordRouteName: true
        },
        props: {
          default(route) {
            return {
              // headerName: route.params.bookName,
              bookId: route.params.bookId
            }
          }
        },
      },
      // 修改書本
      {
        path: 'books/:bookId/edit',
        name: 'EditBook',
        components: {
          default: () => import('@/views/EditBook.vue')
        },
        meta: {
          headerName: '編輯書本',
          showBackButton: true,
          recordRouteName: false
        },
        props: {
          default(route) {
            return {
              // headerName: route.meta.headerName,
              bookId: route.params.bookId
            }
          }
        },
      },
      // 404 not found
      {
        path: '/:pathMatch(.*)',
        redirect: { name: 'NotFound', query: { status: 404 } }
      },
      {
        path: 'error',
        name: 'NotFound',
        components: {
          default: () => import('@/views/Exceptions/NotFound.vue')
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

router.beforeEach((to, from, next) => {
  console.log('beforeEach to:', to)
  const headerStore = useHeaderStore()
  if (to.meta.headerName) {
    headerStore.updateHeaderName(to.meta.headerName)
  } else {
    headerStore.resetHeaderName()
  }

  next()
})

export default router
