<template>
  <div class="w-full bg-white">
    <div class="mx-auto max-w-3xl">
      <div class="flex h-14 items-center justify-between">
        <div class="h-full">
          <button
            type="button"
            class="block h-full px-4"
          >
            <span class="material-symbols-rounded align-middle text-3xl font-bold text-myDarkGray">
              arrow_back_ios_new
            </span>
          </button>
        </div>
        <h2 class="text-center text-3xl font-medium">
          書本列表
        </h2>
        <button
          type="button"
          class="block h-full px-4 text-myLightBlue transition-colors hover:text-myDarkBlue"
          @click="createBookHandler"
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

function createBookHandler() {
  console.log('click')
}

</script>

<style>
</style>