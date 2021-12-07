<template>
  <div class="my-2 md:my-4 relative">
    <label
      v-if="label"
      class="block text-xs md:text-sm font-medium text-indigo-900 pl-3"
      >{{ label }}</label
    >
    <slot></slot>
    <p
      v-if="errorText"
      class="absolute text-xs md:text-sm text-red-500 font-medium pl-3 pt-1"
    >
      {{ errorText }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
    },
    errorText: {
      type: String,
      required: false,
    },
  },
}
</script>
