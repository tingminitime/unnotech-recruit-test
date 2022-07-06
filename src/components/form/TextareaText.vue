<template>
  <div class="flex flex-col gap-2 rounded-lg bg-white px-4 pt-4 pb-2 drop-shadow-md">
    <span class="inline-block shrink-0 text-gray-700">備註</span>
    <textarea
      :name="inputName"
      rows="10"
      :maxlength="maxLength"
      :placeholder="placeholderText"
      :value="modelValue"
      class="block resize-y py-1 placeholder:text-myBlack/25 focus:outline-none"
      @input="inputHandler"
      @blur="blurHandler"
    ></textarea>
    <div class="flex justify-between">
      <span class="inline-block text-sm text-gray-700">字數 : {{ textLength }} ( 限制 300 字元 )</span>
      <span class="inline-block text-sm text-red-400">{{ errors[inputName] }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import _ from 'lodash'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  inputTitle: {
    type: String,
    default: ''
  },
  inputName: {
    type: String,
    default: ''
  },
  placeholderText: {
    type: String,
    default: ''
  },
  maxLength: {
    type: [String, Number],
    default: 0,
  },
})

const emit = defineEmits(['update:modelValue', 'errors-info'])

const schema = yup.object({
  description: yup.string().trim().max(300, '超過限制字元數量上限')
})

const { meta, errors } = useForm({
  validationSchema: schema
})

const { handleChange } = useField(props.inputName)

const textLength = ref(0)

const inputHandler = _.throttle((e) => {
  handleChange(e)
  emit('update:modelValue', e.target.value)
}, 1000)

const blurHandler = (e) => {
  emit('errors-info', { [props.inputName]: meta.value.valid })
}

watch(() => props.modelValue, (newVal) => {
  console.log('watch')
  textLength.value = props.modelValue.length
})

</script>

<style></style>