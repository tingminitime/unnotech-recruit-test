import { defineStore } from 'pinia'

export const useOverlayStore = defineStore({
  id: 'overlay',
  state() {
    return {
      isLoading: false,
      isAlert: false,
    }
  }
})