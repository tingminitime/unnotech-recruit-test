<template>
  <div class="mx-auto max-w-5xl p-4">
    <ul class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <BookCard
        v-for="book in booksListData"
        :key="book.id"
        :book-id="book.id"
        :book-title="book.title"
        :book-author="book.author"
        :quick-select="selectMode"
        @select-mode="selectModeHandler"
        @select-target="selectHandler"
      ></BookCard>
    </ul>
    <div class="fixed bottom-8 left-1/2 z-20 flex w-full max-w-[172px] -translate-x-1/2 items-center justify-around rounded-lg bg-white px-4 py-2 drop-shadow-lg">
      <span class="inline-block text-myBlack">已選取 {{ selectBooks.length }} 個</span>
      <button
        type="button"
        class="flex h-9 w-9 items-center justify-center rounded-full p-2 text-red-500 transition-all duration-200 ease-out hover:bg-gray-300 active:bg-gray-300"
        @click="deleteManyHandler"
      >
        <span class="material-symbols-rounded align-middle">
          delete
        </span>
      </button>
    </div>
    <AlertModal v-bind="alertProps"></AlertModal>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useOverlayStore } from '@/stores/overlay'
import BookCard from '@/components/books/BookCard.vue'
import AlertModal from '@/components/utils/AlertModal.vue'
import { getBookList } from '@api/books'

const overlayStore = useOverlayStore()
const { isAlert } = storeToRefs(overlayStore)

const booksListData = ref([])
const selectMode = ref(false)
const selectBooks = ref([])
const alertProps = ref({})

const fetchBookListHandler = async () => {
  try {
    const { data } = await getBookList()
    booksListData.value = data
  } catch (err) {
    console.error(err)
  }
}

const selectModeHandler = (status) => {
  selectMode.value = status
}

const selectHandler = (bookId) => {
  const bookIndex = selectBooks.value.findIndex(id => id === bookId)
  if (bookIndex !== -1) {
    selectBooks.value.splice(bookIndex, 1)
  } else {
    selectBooks.value.push(bookId)
  }

  if (selectBooks.value.length === 0) {
    selectMode.value = false
  }
  console.log(selectBooks.value)
}

const deleteManyHandler = () => {

}

onMounted(() => {
  fetchBookListHandler()
})

</script>

<style></style>