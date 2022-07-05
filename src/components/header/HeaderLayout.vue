<template>
  <div
    ref="headerRef"
    class="sticky top-0 left-0 z-10 w-full bg-white drop-shadow-lg transition-transform duration-200"
    :class="{ '-translate-y-full': onScrollDown }"
  >
    <div class="mx-auto max-w-5xl">
      <div class="flex h-14 items-center justify-between">
        <div class="h-full">
          <!-- Back button -->
          <router-link
            v-show="showBackButton"
            :to="backRoute"
            class="flex h-full w-16 items-center justify-center text-myDarkGray transition-colors md:hover:text-myBlue"
          >
            <span class="material-symbols-rounded align-middle text-3xl font-bold">
              arrow_back_ios_new
            </span>
          </router-link>
          <div
            v-show="!showBackButton"
            class="w-16"
          ></div>
        </div>
        <!-- Header name -->
        <h2 class="w-[218px] text-center text-2xl font-medium text-myBlack line-clamp-1 md:w-80 md:text-3xl">
          {{ headerName }}
        </h2>
        <div class="flex h-full">
          <!-- Create new book button -->
          <button
            v-if="$route.meta.showCreateButton"
            type="button"
            class="block h-full w-16 text-myBlack transition-colors md:hover:text-myBlue"
          >
            <span class="material-symbols-outlined align-middle text-4xl font-bold">
              add
            </span>
          </button>
          <!-- Edit book info button -->
          <button
            v-if="$route.meta.showEditButton"
            type="button"
            class="block h-full w-16 text-myBlack transition-colors md:hover:text-myBlue"
          >
            <span class="material-symbols-rounded align-middle text-3xl">
              border_color
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useHeaderStore } from '@/stores/header'
import _ from 'lodash'
const headerStore = useHeaderStore()
const { headerName, showBackButton, backRoute } = storeToRefs(headerStore)

const headerRef = ref(null)
const previousScrollY = ref(0)
const currentScrollY = ref(0)
const onScrollDown = ref(false)

// Hide header when scroll down and show header when scroll up
const useScroll = (onScroll) => {
  onMounted(() => {
    previousScrollY.value = window.scrollY
    window.addEventListener('scroll', onScroll)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })
}

useScroll(_.throttle(() => {
  currentScrollY.value = window.scrollY
  if (previousScrollY.value > currentScrollY.value) {
    onScrollDown.value = false
  } else {
    onScrollDown.value = true
  }

  if (currentScrollY.value <= 0) {
    onScrollDown.value = false
  }

  previousScrollY.value = currentScrollY.value
}, 300))

</script>

<style>
</style>