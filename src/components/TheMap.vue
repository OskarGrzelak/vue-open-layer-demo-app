<template>
  <div class="relative">
    <div ref="map" class="w-full h-72 md:h-96"></div>
    <map-info-box :name="name" :lat="lat" :lon="lon"></map-info-box>
  </div>
</template>

<script>
import MapInfoBox from './MapInfoBox.vue'
import View from 'ol/View'
import { fromLonLat } from 'ol/proj'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import 'ol/ol.css'

export default {
  components: {
    MapInfoBox
  },
  props: ['lon', 'lat', 'name'],
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
