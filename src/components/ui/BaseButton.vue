<template>
  <button
    class="transition-colors border-solid border-2 border-indigo-400 focus:border-indigo-700 hover:border-indigo-700 bg-indigo-400 hover:bg-indigo-700 text-white font-medium uppercase tracking-wide rounded shadow px-3 py-1.5 mt-6"
    :class="{ 'w-full': full }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    full: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
