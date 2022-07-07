<template>
  <!-- Global loading -->
  <Loading
    v-model:active="isLoading"
  ></Loading>

  <!-- Notify -->
  <NotiWind></NotiWind>

  <!-- Router view -->
  <router-view></router-view>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import Loading from 'vue-loading-overlay'
import { useOverlayStore } from '@/stores/overlay'
import NotiWind from '@/components/utils/NotiWind.vue'

const overlayStore = useOverlayStore()
const { isLoading } = storeToRefs(overlayStore)

</script>

<style></style>
