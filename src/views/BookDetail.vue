<template>
  <div class="mx-auto max-w-xl p-4">
    <div class="flex flex-col gap-4">
      <div class="rounded-lg bg-white px-4 py-2 drop-shadow-md">
        <div class="flex items-center justify-between text-gray-700">
          <span>名稱</span>
          <button
            ref="copyBookTitleButton"
            type="button"
            class="rounded-full py-1 px-2 transition-all duration-200 ease-out active:bg-gray-300"
            @click="copyHandler('bookTitle')"
          >
            <span class="material-symbols-rounded align-middle text-xl md:text-2xl">
              content_copy
            </span>
          </button>
        </div>
        <p class="pb-2 text-lg">
          {{ bookData.title }}
        </p>
      </div>
      <div class="rounded-lg bg-white px-4 py-2 drop-shadow-md">
        <div class="flex items-center justify-between text-gray-700">
          <span>作者</span>
          <button
            ref="copyBookAuthorButton"
            type="button"
            class="rounded-full py-1 px-2 transition-all duration-200 ease-out active:bg-gray-300"
            @click="copyHandler('bookAuthor')"
          >
            <span class="material-symbols-rounded align-middle text-xl md:text-2xl">
              content_copy
            </span>
          </button>
        </div>
        <p class="pb-2 text-lg">
          {{ bookData.author }}
        </p>
      </div>
      <div class="rounded-lg bg-white px-4 py-2 drop-shadow-md">
        <div class="py-2 text-gray-700">
          備註
        </div>
        <p
          class="pb-2 text-justify tracking-wide"
          v-text="bookData.description"
        ></p>
      </div>
      <div class="mx-auto mt-4 w-1/2">
        <button
          type="button"
          class="block w-full rounded-lg bg-red-500 p-2 px-4 text-white hover:bg-red-600"
        >
          刪除此書
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useHeaderStore } from '@/stores/header'
import tippy from 'tippy.js'
import { getBookData, deleteBookData } from '@api/books'

const headerStore = useHeaderStore()

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

const bookData = ref({})
const copyBookTitleButton = ref(null)
const copyBookAuthorButton = ref(null)
const copyContent = ref('')

const fetchBookDataHandler = async () => {
  try {
    const { data } = await getBookData(props.bookId)
    bookData.value = data
    headerStore.updateHeaderName(data.title)
  } catch (err) {
    console.error(err)
  }
}

const setBackRoute = () => {
  headerStore.$patch(state => {
    state.backRoute = {
      name: 'BooksList'
    }
  })
}

const copyHandler = (copyTarget) => {
  switch (copyTarget) {
    case 'bookTitle':
      copyContent.value = bookData.value.title
      break
    case 'bookAuthor':
      copyContent.value =  bookData.value.author
      break
    default:
      break
  }
}

onMounted(() => {
  fetchBookDataHandler()
  setBackRoute()

  tippy([copyBookTitleButton.value, copyBookAuthorButton.value], {
    async onTrigger(instance, event) {
      const clipboardObj = navigator.clipboard
      await navigator.clipboard.writeText(copyContent.value)
      instance.setContent('已複製')
      setTimeout(() => {
        instance.hide()
      }, 1500)
    },
    offset: [0, 0],
    inertia: true,
    placement: 'left',
    animation: 'scale-subtle',
    trigger: 'click'
  })
})

</script>

<style>
</style>