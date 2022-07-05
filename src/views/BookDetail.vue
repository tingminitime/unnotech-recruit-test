<template>
  <div class="mx-auto max-w-xl p-4">
    <div class="flex flex-col gap-4">
      <div class="rounded-lg bg-white px-4 py-2">
        <div class="text-gray-700">
          名稱
        </div>
        <p class="text-lg">
          XXX
        </p>
      </div>
      <div class="rounded-lg bg-white px-4 py-2">
        <div class="text-gray-700">
          作者
        </div>
        <p class="text-lg">
          Tim
        </p>
      </div>
      <div class="rounded-lg bg-white px-4 py-2">
        <div class="text-gray-700">
          備註
        </div>
        <p class="pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima quas veniam quod facilis animi, sint, eius sit praesentium, debitis cum! Hic sed temporibus sint esse. Alias nisi quos voluptas! Sequi recusandae quia explicabo impedit eum, voluptas itaque ipsam illo, consequatur ullam ducimus optio labore dolor ut! Fuga, ipsum voluptatibus.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  headerName: {
    type: String,
    default: '',
  },
  bookId: {
    type: [String, Number],
    default: ''
  }
})

onMounted(() => {

})

</script>

<style></style>