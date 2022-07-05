import http from '@/service/http'

export const getBookList = () => {
  return http.get(`books`)
}