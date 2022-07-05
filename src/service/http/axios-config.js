const setAxiosConfig = () => {
  return {
    baseURL: import.meta.env.VITE_APP_API,
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

export default setAxiosConfig