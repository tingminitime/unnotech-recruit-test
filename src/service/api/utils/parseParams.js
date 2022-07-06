// 物件轉 params
export const parseParams = (params) => {
  if (typeof params !== 'object') return false
  let urlEncode = ''
  for (const [key, value] of Object.entries(params)) {
    if (
      typeof value === 'string'
      || typeof value === 'number'
      || typeof value === 'boolean'
    ) {
      urlEncode += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`
    } else if (Array.isArray(value)) {
      value.forEach(val => {
        urlEncode += `${encodeURIComponent(key)}=${encodeURIComponent(val)}&`
      })
    } else {
      continue
    }
  }
  return urlEncode
}