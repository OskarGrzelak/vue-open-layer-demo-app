<template>
  <div class="container mx-auto px-10">
    <the-map :lon="lon" :lat="lat" :key="lon + lat"></the-map>
    <menu class="list-none flex justify-center">
      <li class="mx-4">
        <base-button @click="setIsCitySearchActive(false)"
          >Set coordinates</base-button
        >
      </li>
      <li class="mx-4">
        <base-button @click="setIsCitySearchActive(true)"
          >Search for a city</base-button
        >
      </li>
    </menu>
    <coordinates-inputs
      v-if="!isCitySearchActive"
      @setCoordinates="setCoordinates"
    ></coordinates-inputs>
    <city-search v-else @citySearch="setCoordinates"></city-search>
  </div>
</template>

<script>
import CoordinatesInputs from './components/CoordinatesInputs.vue'
import CitySearch from './components/CitySearch.vue'
import TheMap from './components/TheMap.vue'

export default {
  name: 'App',
  components: {
    TheMap,
    CoordinatesInputs,
    CitySearch,
  },
  data() {
    return {
      isCitySearchActive: false,
      lon: 19.94753670197295,
      lat: 50.0637175819861,
    }
  },
  methods: {
    setCoordinates(coordinates) {
      this.lon = coordinates.lon
      this.lat = coordinates.lat
    },
    setIsCitySearchActive(state) {
      this.isCitySearchActive = state
    },
  },
}
</script>
