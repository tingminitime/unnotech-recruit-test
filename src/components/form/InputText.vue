<template>
  <div class="relative">
    <label class="relative flex items-center gap-2 rounded-lg bg-white px-4 py-2 drop-shadow-md">
      <span class="inline-block shrink-0 text-gray-700">{{ inputTitle }}</span>
      <input
        v-focus="focus"
        type="text"
        :name="inputName"
        :placeholder="placeholderText"
        :value="modelValue"
        class="peer block w-full py-1 px-2 placeholder:text-myBlack/25 focus:outline-0"
        @input="inputHandler"
        @blur="blurHandler"
      >
    </label>
    <span
      v-if="errors[inputName]"
      class="absolute top-1/2 right-4 inline-block -translate-y-1/2 text-sm text-red-400"
    >{{ errors[inputName] }}</span>
  </div>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  focus: {
    type: Boolean,
    default: false
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
  requiredText: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'errors-info'])

const schema = yup.object({
  [props.inputName]: yup.string().trim().required(props.requiredText)
})

const { meta, errors } = useForm({
  validationSchema: schema,
})

const { handleChange, handleBlur } = useField(props.inputName)

const inputHandler = (e) => {
  handleChange(e)
  emit('update:modelValue', e.target.value)
}

const blurHandler = (e) => {
  emit('errors-info', { [props.inputName]: meta.value.valid })
}

</script>

<style></style>