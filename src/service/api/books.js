import http from '@/service/http'
import { parseParams } from './utils/parseParams'

/**
 * [GET] Get books list
 */
export const getBookList = () => {
  return http.get(`books`)
}

/**
 * [GET] Get single book data
 * @param {string|number} bookId - The book id
 */
export const getBookData = (bookId) => {
  return http.get(`books/${bookId}`)
}

/**
 * [POST] create a book
 * @param {object} data - New book information
 */
// export const createNewBook = (params) => {
//   return http.post(`books?${parseParams(params)}`)
// }
export const createNewBook = (data) => {
  return http.post(`books`, data)
}

/**
 * [PATCH] Update single book data
 * @param {string|number} bookId - The book id
 * @param {object} data - Updated book information
 */
export const updateBookData = (bookId, data) => {
  return http.patch(`books/${bookId}`, data)
}

/**
 * [DELETE] Delete single book data
 * @param {string|number} bookId - The book id
 */
export const deleteBookData = (bookId) => {
  return http.delete(`books/${bookId}`)
}