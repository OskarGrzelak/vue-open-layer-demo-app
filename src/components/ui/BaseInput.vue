<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="border-solid border-2 border-indigo-400 focus:border-indigo-700 rounded shadow px-3 py-1.5 w-full"
  />
</template>

<script>
export default {
  props: ['modelValue'],
}
</script>
