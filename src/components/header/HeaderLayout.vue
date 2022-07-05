<template>
  <div class="sticky top-0 left-0 z-10 w-full bg-white">
    <div class="mx-auto max-w-3xl">
      <div class="flex h-14 items-center justify-between">
        <div class="h-full">
          <!-- Back button -->
          <router-link
            :to="backPath"
            class="flex h-full w-16 items-center justify-center text-myDarkGray transition-colors md:hover:text-myBlue"
          >
            <span class="material-symbols-rounded align-middle text-3xl font-bold">
              arrow_back_ios_new
            </span>
          </router-link>
        </div>
        <!-- Header name -->
        <h2 class="text-center text-2xl font-medium text-myBlack md:text-3xl">
          {{ headerName }}
        </h2>
        <!-- Functional button -->
        <button
          type="button"
          class="block h-full w-16 text-myBlack transition-colors md:hover:text-myBlue"
        >
          <span class="material-symbols-outlined align-middle text-4xl font-bold">
            add
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useHeaderStore } from '@/stores/header'
const headerStore = useHeaderStore()
const { headerName, backPath } = storeToRefs(headerStore)

// const props = defineProps({
//   headerName: {
//     type: String,
//     default: ''
//   },
//   backRouteName: {
//     type: String,
//     default: 'BooksList'
//   },
//   bookId: {
//     type: [String, Number],
//     default: ''
//   }
// })


</script>

<style>
</style>