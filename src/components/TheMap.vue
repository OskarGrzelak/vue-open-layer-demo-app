<template>
  <h2
    class="text-5xl font-medium uppercase tracking-wide text-indigo-900 text-center my-4"
  >
    The Map App
  </h2>
  <p class="text-lg text-center my-4">This is my first OpenLayer map.</p>
  <div ref="map" class="w-full h-96"></div>
</template>

<script>
import View from 'ol/View'
import { fromLonLat } from 'ol/proj'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import 'ol/ol.css'

export default {
  props: ['lon', 'lat'],
  mounted() {
    new Map({
      target: this.$refs.map,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        zoom: 12,
        center: fromLonLat([this.lon, this.lat]),
        constrainRotation: true,
      }),
    })
  },
}
</script>
