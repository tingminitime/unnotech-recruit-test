<template>
  <div class="mx-auto max-w-xl p-4">
    <div class="flex flex-col gap-4">
      <InputText
        v-model="bookInfo.title"
        :focus="true"
        input-title="名稱"
        input-name="title"
        placeholder-text="請輸入書名"
        required-text="請填寫書名"
        @errors-info="errorsHandler"
      ></InputText>
      <InputText
        v-model="bookInfo.author"
        input-title="作者"
        input-name="author"
        placeholder-text="請輸入作者"
        required-text="請填寫作者"
        @errors-info="errorsHandler"
      ></InputText>
      <TextareaText
        v-model="bookInfo.description"
        input-name="description"
        max-length="500"
        @errors-info="errorsHandler"
      ></TextareaText>
      <div class="mt-4 flex items-center justify-evenly gap-4">
        <button
          type="button"
          class="block w-full max-w-[192px] rounded-full bg-gray-300 p-2 px-4 text-white hover:bg-gray-400"
          @click="cancelCheck"
        >
          取消
        </button>
        <button
          type="button"
          :disabled="isSomeInfoEmpty"
          class="block w-full max-w-[192px] rounded-full bg-myBlue p-2 px-4 text-white hover:bg-myDarkBlue disabled:bg-gray-300"
          @click="createHandler"
        >
          新增
        </button>
      </div>
    </div>
    <AlertModal
      v-bind="alertProps"
    ></AlertModal>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useHeaderStore } from '@/stores/header'
import { useOverlayStore } from '@/stores/overlay'
import { notify } from "notiwind"
import InputText from '@/components/form/InputText.vue'
import TextareaText from '@/components/form/TextareaText.vue'
import AlertModal from '@/components/utils/AlertModal.vue'
import { createNewBook } from '@api/books'

const router = useRouter()
const headerStore = useHeaderStore()
const overlayStore = useOverlayStore()
const { isAlert } = storeToRefs(overlayStore)

const bookInfo = reactive({
  title: '',
  author: '',
  description: '',
})

const bookInfoValidation = ref({
  title: false,
  author: false,
  description: true,
})

const alertProps = ref({})

const setBackRoute = () => {
  headerStore.$patch(state => {
    state.backRoute = {
      name: 'BooksList'
    }
  })
}

const errorsHandler = (errorsObj) => {
  Object.assign(bookInfoValidation.value, errorsObj)
}

const isSomeInfoEmpty = computed(() => {
  const { title, author } = bookInfo
  const bookInfoValue = Object.values({ title, author })
  const result = bookInfoValue.some(value => value.trim() === '')
  return result
})

const isBookInfoValid = computed(() => {
  const validations = Object.values(bookInfoValidation.value)
  const result = validations.every(value => value)
  return result
})


const createNewBookHandler = (bookInfo) => {
  return async () => {
    try {
      const { data } = await createNewBook(bookInfo)
      notify({
        group: 'success',
        title: '新增成功'
      })
      router.push({ name: 'BookDetail', params: { bookId: data.id } })
    } catch (err) {
      console.error('新增失敗', err)
    }
  }
}

const createHandler = () => {
  if (!isBookInfoValid.value) return
  isAlert.value = true
  alertProps.value = {
    alertTitle: '確認新增 ?',
    confirmTodo: createNewBookHandler(bookInfo),
  }
}

const cancelCheck = () => {
  isAlert.value = true
  alertProps.value = {
    alertTitle: '是否返回上一頁 ?',
    confirmTodo() {
      router.push({ name: 'BooksList' })
    },
  }
}

onMounted(() => {
  setBackRoute()
})

</script>

<style></style>