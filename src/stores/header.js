import { defineStore } from 'pinia'

const defaultHeaderName = '書本列表'

export const useHeaderStore = defineStore({
  id: 'header',
  state: () => ({
    headerName: defaultHeaderName,
    backPath: '',
  }),
  getters: {
  },
  actions: {
    updateHeaderName(newHeaderName) {
      this.headerName = newHeaderName
    },
    resetHeaderName() {
      this.headerName = defaultHeaderName
    },
    updateBackPath(backPath) {
      this.backPath = backPath
    }
  }
})
