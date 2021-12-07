<template>
  <div
    class="absolute top-0 right-0 bg-white opacity-80 p-4 font-medium text-sm"
  >
    {{ name }} ({{ lat }}, {{ lon }})
  </div>
</template>

<script>
export default {
  props: ['name', 'lat', 'lon'],
}
</script>
