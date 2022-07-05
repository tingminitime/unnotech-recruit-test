import axios from 'axios'
import setAxiosConfig from './axios-config'
import setInterceptors from './interceptor-config'

const http = axios.create(setAxiosConfig())
setInterceptors(http)

export default http