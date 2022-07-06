<template>
  <TransitionRoot
    appear
    :show="isAlert"
    as="template"
  >
    <Dialog
      as="div"
      class="relative z-10"
      @close="closeAlertModal"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25"></div>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-xs overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-center text-lg font-medium leading-6 text-myBlack"
              >
                {{ alertTitle }}
              </DialogTitle>
              <div class="mt-4 flex justify-evenly">
                <button
                  type="button"
                  class="block w-full max-w-[96px] rounded-lg bg-myBlue px-4 py-2 text-white transition-colors hover:bg-myDarkBlue"
                  @click="confirmHandler"
                >
                  確認
                </button>
                <button
                  type="button"
                  class="block w-full max-w-[96px] rounded-lg bg-gray-300 px-4 py-2 text-white transition-colors hover:bg-gray-400"
                  @click="closeAlertModal"
                >
                  取消
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useOverlayStore } from '@/stores/overlay'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const overlayStore = useOverlayStore()

const props = defineProps({
  alertTitle: {
    type: String,
    default: ''
  },
  confirmTodo: {
    type: Function,
    default: () => {}
  }
})

const { isAlert } = storeToRefs(overlayStore)

const confirmHandler = () => {
  props.confirmTodo()
  isAlert.value = false
}

const closeAlertModal = () => {
  isAlert.value = false
}


</script>

<style></style>