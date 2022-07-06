import { createRouter, createWebHashHistory } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useHeaderStore } from '@/stores/header'
import { useOverlayStore } from '@/stores/overlay'

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
          showCreateButton: true,
        },
        props: {
          default(route) {
            return {
              headerName: route.meta.headerName,
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
          showBackButton: true,
          showEditButton: true,
        },
        props: {
          default(route) {
            return {
              bookId: route.params.bookId,
            }
          }
        },
      },
      // 新增書本
      {
        path: 'books/create',
        name: 'BookCreate',
        components: {
          default: () => import('@/views/BookCreate.vue')
        },
        meta: {
          headerName: '新增書本',
          showBackButton: true,
        },
      },
      // 修改書本
      {
        path: 'books/:bookId/edit',
        name: 'BookEdit',
        components: {
          default: () => import('@/views/BookEdit.vue')
        },
        meta: {
          headerName: '編輯書本',
          showBackButton: true,
        },
        props: {
          default(route) {
            return {
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
  const headerStore = useHeaderStore()
  const { showBackButton } = storeToRefs(headerStore)

  if (to.meta.headerName) {
    headerStore.updateHeaderName(to.meta.headerName)
  } else {
    headerStore.resetHeaderName()
  }

  if (to.meta.showBackButton) {
    console.log('showBackButton true')
    showBackButton.value = true
  } else {
    showBackButton.value = false
  }

  next()
})

router.afterEach((to, from, next) => {
})

export default router
