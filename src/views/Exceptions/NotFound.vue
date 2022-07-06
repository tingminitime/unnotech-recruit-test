<template>
  <div class="mx-auto flex max-w-xl items-center justify-center p-4">
    404 Not Found !
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useHeaderStore } from '@/stores/header'

const headerStore = useHeaderStore()


const setBackRoute = () => {
  headerStore.$patch(state => {
    state.backRoute = {
      name: 'BooksList'
    }
  })
}

onMounted(() => {
  setBackRoute()
})


</script>