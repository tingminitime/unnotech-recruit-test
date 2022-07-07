<template>
  <div class="mx-auto max-w-5xl p-4">
    <div class="mx-auto mb-4 flex max-w-lg items-center justify-center gap-2">
      <div class="grow">
        <input
          ref="keywordInput"
          class="inline-block w-full rounded-lg px-3 py-2 focus:outline-myBlue"
          type="text"
          @keyup.enter="searchHandler"
        >
      </div>
      <button
        type="button"
        class="block rounded-lg p-2 hover:bg-gray-300"
        @click="searchHandler"
      >
        <span class="material-symbols-rounded align-middle font-bold text-myBlue">
          search
        </span>
      </button>
    </div>
    <ul class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <BookCard
        v-for="book in filterBooksData"
        :key="book.id"
        :book-id="book.id"
        :book-title="book.title"
        :book-author="book.author"
        :quick-select="selectMode"
        @select-mode="selectModeHandler"
        @select-target="selectHandler"
      ></BookCard>
    </ul>
    <transition
      mode="out-in"
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform opacity-0 translate-y-48"
      enter-to-class="transform opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 translate-y-48"
    >
      <div
        v-if="selectMode"
        class="fixed bottom-8 left-1/2 z-20 w-full -translate-x-1/2 md:bottom-0 md:bg-white md:px-8 md:py-2"
      >
        <div class="mx-auto flex max-w-sm items-center justify-center gap-3 md:max-w-5xl md:justify-between">
          <div class="rounded-full bg-white px-4 py-2 drop-shadow-lg md:drop-shadow-none">
            <span class="inline-block text-base md:text-lg">已選取 {{ selectedBooks.length }} 個</span>
          </div>
          <div class="flex items-center justify-center gap-3 md:gap-4">
            <button
              type="button"
              class="flex w-11 items-center justify-center rounded-full bg-white p-2 text-red-500 drop-shadow-lg transition-all duration-200 ease-out hover:bg-gray-200 active:bg-gray-300 md:h-11 md:w-auto md:px-4 md:py-2 md:drop-shadow-none"
              @click="deleteManyHandler"
            >
              <span class="material-symbols-rounded align-middle text-xl md:text-2xl">
                delete
              </span>
              <span class="hidden text-base md:inline-block md:text-lg">刪除多筆</span>
            </button>
            <button
              type="button"
              class="block rounded-full bg-white px-4 py-2 text-base drop-shadow-lg transition-colors hover:bg-gray-200 md:text-lg md:drop-shadow-none"
              @click="cancelSelectModeHandler"
            >
              取消選取
            </button>
          </div>
        </div>
      </div>
    </transition>
    <AlertModal v-bind="alertProps"></AlertModal>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useHeaderStore } from '@/stores/header'
import { useOverlayStore } from '@/stores/overlay'
import BookCard from '@/components/books/BookCard.vue'
import AlertModal from '@/components/utils/AlertModal.vue'
import { notify } from "notiwind"
import { getBookList, deleteBookData } from '@api/books'

const headerStore = useHeaderStore()
const overlayStore = useOverlayStore()
const { isAlert } = storeToRefs(overlayStore)

const booksListData = ref([])
const filterBooksList = ref([])
const keywordInput = ref(null)
const keyword = ref('')
const selectMode = ref(false)
const selectedBooks = ref([])
const alertProps = ref({})

const fetchBookListHandler = async () => {
  try {
    const { data } = await getBookList()
    booksListData.value = data
    filterBooksList.value = data
  } catch (err) {
    console.error(err)
  }
}

// --- Keyword search ---

const searchHandler = () => {
  filterBooksData.value = keywordInput.value.value
}

const filterBooksData = computed({
  get() {
    console.log('filterBooksData get')
    return booksListData.value.filter(book => {
      return book.title.match(keyword.value)
    })
  },
  set(newKeyword) {
    console.log('filterBooksData set')
    keyword.value = newKeyword
  }
})

// --- Multiple select ---
const selectModeHandler = (status) => {
  if (status) {
    headerStore.updateHeaderName('多選模式')
  }
  selectMode.value = status
}

const selectHandler = (bookId) => {
  const bookIndex = selectedBooks.value.findIndex(id => id === bookId)
  if (bookIndex !== -1) {
    selectedBooks.value.splice(bookIndex, 1)
  } else {
    selectedBooks.value.push(bookId)
  }

  if (selectedBooks.value.length === 0) {
    headerStore.resetHeaderName()
    selectMode.value = false
  }
}

const cancelSelectModeHandler = () => {
  selectedBooks.value = []
  selectMode.value = false
  headerStore.resetHeaderName()
}

const deleteManyPromise = (deleteIds) => {
  const fetches = deleteIds.reduce((ary, id) => {
    ary.push(deleteBookData(id))
    return ary
  }, [])

  const iterator = fetches[Symbol.iterator]()
  return () => Promise.all(iterator)
}

const deleteManyBooksHandler = (selectedBooksId) => {
  return async () => {
    try {
      const promiseAllProcess = deleteManyPromise(selectedBooksId)
      await promiseAllProcess()
      cancelSelectModeHandler()
      fetchBookListHandler()
      notify({
        group: 'success',
        title: '刪除成功'
      }, 2500)
    } catch (err) {
      console.error('刪除失敗', err)
    }
  }
}

const deleteManyHandler = () => {
  isAlert.value = true
  alertProps.value = {
    alertTitle: '確定刪除所選書本 ?',
    confirmTodo: deleteManyBooksHandler(selectedBooks.value),
  }
}

onMounted(() => {
  fetchBookListHandler()
})

</script>

<style></style>