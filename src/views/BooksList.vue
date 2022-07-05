<template>
  <div class="mx-auto max-w-5xl p-4">
    <ul class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <li
        v-for="(book, index) in bookListData"
        :key="book.id"
        class="mx-auto h-full min-h-[256px] w-full max-w-[256px] rounded-lg bg-white p-2 drop-shadow-lg md:min-h-[320px]"
      >
        <div class="flex h-full flex-col items-center justify-between">
          <div class="flex h-full w-full flex-col">
            <router-link
              class="aspect-w-4 aspect-h-3 mb-2 block overflow-hidden rounded-lg"
              :to="{ name: 'BookDetail', params: { bookId: book.id } }"
            >
              <img
                class="w-full object-cover"
                :src="`https://picsum.photos/200/300?random=${index}`"
                alt="book cover image"
              >
            </router-link>
            <div class="flex grow flex-col">
              <h3 class="mb-1 h-10 text-sm line-clamp-2 md:h-12 md:text-base">
                {{ book.title }}
              </h3>
              <p class="border-t border-gray-200 py-1 text-xs font-medium text-black/75 md:text-sm">
                <span class="line-clamp-1">作者 : {{ book.author }}</span>
              </p>
            </div>
          </div>
          <router-link
            class="block w-full rounded-lg bg-myBlue p-1.5 text-center text-white shadow transition-all hover:-translate-y-0.5 hover:bg-myLightBlue hover:shadow-md md:p-2"
            :to="{ name: 'BookDetail', params: { bookId: book.id } }"
          >
            <span class="tracking-wider">查看更多</span>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { getBookList } from '@api/books'

const bookListData = ref([])

const getBookListHandler = async () => {
  try {
    const res = await getBookList()
    bookListData.value = res.data
    console.log(bookListData.value)
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  getBookListHandler()
})

</script>

<style></style>