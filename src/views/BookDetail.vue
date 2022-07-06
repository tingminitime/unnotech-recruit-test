<template>
  <div class="mx-auto max-w-xl p-4">
    <div class="flex flex-col gap-4">
      <div class="rounded-lg bg-white p-4 drop-shadow-md">
        <div class="aspect-w-4 aspect-h-3 block overflow-hidden rounded-lg">
          <img
            class="w-full object-cover"
            :src="`https://picsum.photos/id/${bookId}/200/300`"
            alt="book cover image"
          >
        </div>
      </div>
      <div class="rounded-lg bg-white px-4 py-2 drop-shadow-md">
        <div class="flex items-center justify-between text-gray-700">
          <span>名稱</span>
          <button
            ref="copyBookTitleButton"
            type="button"
            class="rounded-full py-1 px-2 transition-all duration-200 ease-out hover:bg-gray-300 active:bg-gray-300"
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
            class="rounded-full py-1 px-2 transition-all duration-200 ease-out hover:bg-gray-300 active:bg-gray-300"
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
          class="block w-full rounded-full bg-red-500 p-2 px-4 text-white hover:bg-red-600"
          @click="deleteHandler"
        >
          刪除此書
        </button>
      </div>
    </div>
    <AlertModal
      v-bind="alertProps"
    ></AlertModal>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useHeaderStore } from '@/stores/header'
import { useOverlayStore } from '@/stores/overlay'
import tippy from 'tippy.js'
import AlertModal from '@/components/utils/AlertModal.vue'
import { getBookData, deleteBookData } from '@api/books'

const router = useRouter()
const headerStore = useHeaderStore()
const overlayStore = useOverlayStore()
const { isAlert } = storeToRefs(overlayStore)

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
const alertProps = ref({})

const fetchBookDataHandler = async () => {
  try {
    const { data } = await getBookData(props.bookId)
    bookData.value = data
    headerStore.updateHeaderName(data.title)
  } catch (err) {
    console.error(err)
    router.push({ name: 'NotFound' })
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

const deleteBookHandler = (bookId) => {
  return async () => {
    try {
      const { data } = await deleteBookData(bookId)
      console.log(data)
      router.push({ name: 'BookDetail', params: { bookId } })
    } catch (err) {
      console.error('刪除失敗', err)
    }
  }
}

const deleteHandler = () => {
  isAlert.value = true
  alertProps.value = {
    alertTitle: '確定刪除此書 ?',
    confirmTodo: deleteBookHandler(props.bookId),
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