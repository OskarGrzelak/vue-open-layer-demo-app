<template>
  <div class="max-w-xl mx-auto">
    <form @submit.prevent="setCoordinates">
      <base-control label="Latitude">
        <base-input v-model.number="lat"></base-input>
      </base-control>
      <base-control label="Longitude">
        <base-input v-model.number="lon"></base-input>
      </base-control>
      <base-button full>Set Coordinates</base-button>
    </form>
  </div>
</template>

<script>
import BaseControl from './ui/BaseControl.vue'
import BaseInput from './ui/BaseInput.vue'
export default {
  components: { BaseInput, BaseControl },
  data() {
    return {
      lon: 19.94753670197295,
      lat: 50.0637175819861,
    }
  },
  methods: {
    setCoordinates() {
      this.$emit('set-coordinates', { lon: this.lon, lat: this.lat })
    },
  },
}
</script>
