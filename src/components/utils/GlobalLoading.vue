<template>
  <div v-if="show">
    <div></div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  }
})

</script>

<style></style>