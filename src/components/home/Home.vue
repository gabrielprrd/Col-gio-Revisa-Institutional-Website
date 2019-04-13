<template>
  <div id="home-page" class="page" key="1">
    <Carousel />
    <Features />
  </div>
</template>

<script>
import Carousel from './Carousel.vue'
import Features from './Features.vue'
export default {
  name: 'Home',
  components: {
    Carousel,
    Features
  }
}
</script>
