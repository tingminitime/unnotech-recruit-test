<template>
  <li
    v-longpress="{
      longPress: longPressHandler,
      cancelPress: cancelPressHandler
    }"
    class="mx-auto h-full min-h-[256px] w-full max-w-[256px] rounded-lg bg-white p-2 drop-shadow-lg transition-all md:min-h-[320px]"
    :class="{ 'outline outline-4 outline-myBlue -translate-x-1 -translate-y-1': isSelected }"
  >
    <div class="flex h-full flex-col items-center justify-between">
      <div class="flex h-full w-full flex-col">
        <router-link
          class="aspect-w-4 aspect-h-3 mb-2 block overflow-hidden rounded-lg"
          :to="{ name: 'BookDetail', params: { bookId: bookId } }"
        >
          <img
            v-img-src="`https://picsum.photos/id/${bookId}/200/300`"
            class="w-full object-cover"
          >
        </router-link>
        <div class="flex grow flex-col">
          <h3 class="mb-1 h-10 select-none text-sm line-clamp-2 md:h-12 md:text-base">
            {{ bookTitle }}
          </h3>
          <p class="select-none border-t border-gray-200 py-1 text-xs font-medium text-black/75 md:text-sm">
            <span class="line-clamp-1">作者 : {{ bookAuthor }}</span>
          </p>
        </div>
      </div>
      <router-link
        class="block w-full rounded-lg bg-myBlue p-1.5 text-center text-white shadow transition-all hover:-translate-y-0.5 hover:bg-myLightBlue hover:shadow-md md:p-2"
        :to="{ name: 'BookDetail', params: { bookId: bookId } }"
      >
        <span class="tracking-wider">查看更多</span>
      </router-link>
    </div>
  </li>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  bookId: {
    type: [String, Number],
    default: ''
  },
  bookTitle: {
    type: String,
    default: ''
  },
  bookAuthor: {
    type: String,
    default: ''
  },
  quickSelect: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['select-mode', 'select-target'])

const isSelected = ref(false)
const selectedEl = ref(null)

const cancelPressHandler = (el) => {
  selectedEl.value = el
  selectedEl.value.addEventListener('click', pressHandler)
}

const pressHandler = (e) => {
  e.preventDefault()
  if (props.quickSelect) {
    isSelected.value = !isSelected.value
    emit('select-target', props.bookId)
  }
}

const longPressHandler = (el) => {
  emit('select-mode', true)
}

watch(() => props.quickSelect, (newVal) => {
  if (!newVal) {
    isSelected.value = newVal
  }
})

</script>

<style></style>