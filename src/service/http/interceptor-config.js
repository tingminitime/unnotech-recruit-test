import { errorMessageHandler } from './errorHandler'
import { storeToRefs } from 'pinia'
import { useOverlayStore } from '@/stores/overlay'
import { notify } from "notiwind"

const setInterceptors = (axiosInstance) => {
  const overlayStore = useOverlayStore()
  const { isLoading } = storeToRefs(overlayStore)
  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      isLoading.value = true
      return config
    },
    (error) => {
      isLoading.value = false
      return Promise.reject(error)
    }
  )

  // Response interceptor
  axiosInstance.interceptors.response.use(
    (config) => {
      isLoading.value = false
      return config
    },
    (error) => {
      const { response } = error
      if (response) {
        console.error(errorMessageHandler(response.status))
        notify({
          group: 'error',
          title: `伺服器錯誤 (${response.status})`
        })
      }
      isLoading.value = false
      return Promise.reject(error)
    }
  )
}

export default setInterceptors