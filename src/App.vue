<template>
  <Loading
    v-model:active="isLoading"
  ></Loading>
  <router-view></router-view>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import Loading from 'vue-loading-overlay'
import { useOverlayStore } from '@/stores/overlay'

const overlayStore = useOverlayStore()
const { isLoading } = storeToRefs(overlayStore)

</script>

<style></style>
