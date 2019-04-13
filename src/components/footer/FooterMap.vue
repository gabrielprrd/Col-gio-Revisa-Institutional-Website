<template>
    <div id="my-map">
        <l-map :zoom="zoom" :center="center" @update:zoom="zoomUpdated" @update:center="centerUpdated"
            @update:bounds="boundsUpdated">
            <l-marker :lat-lng="[-22.8536738, -43.3200976]" />
            <l-tile-layer :url="url" />
        </l-map>
    </div>
</template>

<script>
import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
    name: 'FooterMap',
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 15,
      center: [-22.8536738, -43.3200976],
      staticAnchor: [16, 37],
      customText: 'Foobar',
      iconSize: 64,
      bounds: null
    };
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom
    },
    centerUpdated (center) {
      this.center = center
    },
    boundsUpdated (bounds) {
      this.bounds = bounds
    }
  },
  computed: {
      dynamicAnchor () {
      return [this.iconSize / 2, this.iconSize * 1.15]
    }
  }
}
</script>


