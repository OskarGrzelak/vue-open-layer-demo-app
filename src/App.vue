<template>
  <div class="container mx-auto px-10">
    <h2
      class="text-xl md:text-5xl font-medium uppercase tracking-wide text-indigo-900 text-center my-2 md:my-4"
    >
      The Map App
    </h2>
    <p class="text-base md:text-lg text-center my-2 md:my-4">
      This is my first OpenLayer map.
    </p>
    <the-map :name="name" :lon="lon" :lat="lat" :key="lon + lat"></the-map>
    <menu class="list-none flex flex-wrap justify-center p-0">
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
      name: '',
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
    async fetchName() {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${this.lat}&lon=${this.lon}&limit=5&appid=${process.env.VUE_APP_OPEN_WEATHER_API_KEY}`
      )
      const data = await response.json()
      this.name = data[0].name
    },
  },
  mounted() {
    this.fetchName()
  },
  updated() {
    this.fetchName()
  },
}
</script>
