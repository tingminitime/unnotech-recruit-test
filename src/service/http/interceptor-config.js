import { errorMessageHandler } from './errorHandler'

const setInterceptors = (axiosInstance) => {
  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // Response interceptor
  axiosInstance.interceptors.response.use(
    (config) => {
      return config
    },
    (error) => {
      const { response } = error
      if (response) {
        console.error(errorMessageHandler(response.status))
      }
      return Promise.reject(error)
    }
  )
}

export default setInterceptors