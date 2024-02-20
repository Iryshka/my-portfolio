import { defineStore } from 'pinia'

export const usePageSizesStore = defineStore('pageSizes', {
  state: () => ({
    pageWidth: 0,
    screenWidth: 0
  }),
  actions: {
    setPageWidth(width) {
      this.pageWidth = width
    },
    setScreenWidth(width) {
      this.screenWidth = width
    }
  }
})
