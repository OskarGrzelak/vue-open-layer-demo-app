<template>
  <div class="max-w-xl mx-auto">
    <form @submit.prevent="search">
      <base-control label="City" :errorText="error">
        <base-input v-model="city"></base-input>
      </base-control>
      <base-button full>Search City</base-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
      error: '',
    }
  },
  methods: {
    async search() {
      this.error = ''
      const data = await this.fetchCityCoordinates(this.city)
      if (data) {
        this.$emit('city-search', { lon: data[0].lon, lat: data[0].lat })
      }
    },
    async fetchCityCoordinates(city) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.VUE_APP_OPEN_WEATHER_API_KEY}`
        )
        if (!response.ok) {
          const errorMsg = `Error ${response.status}. Something went wrong. Try later.`
          throw new Error(errorMsg)
        }
        const data = await response.json()
        if (!data.length > 0) {
          const errorMsg = "Can't find this city. Try again."
          throw new Error(errorMsg)
        }
        return data
      } catch (error) {
        this.error = error.message
      } finally {
        this.city = ''
      }
    },
  },
}
</script>
