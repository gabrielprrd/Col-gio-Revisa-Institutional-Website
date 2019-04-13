<template>
    <div class="carousel-container">
       <b-carousel controls indicators id="home-carousel"
      background="#ababab"
      :interval="4000"
      img-width="1024"
      img-height="480"
      v-model="slide"
      fade
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

        <b-carousel-slide
        id="slide1"
            caption="Aulas práticas para potencializar o ensino"
            :img-src="require('../../images/carousel/children-classroom-1.jpg')"
        />
        <b-carousel-slide
        id="slide2"
            caption="Aulas que visam interação entre aluno e professor"
            :img-src="require('../../images/carousel/children-classroom-2.jpg')"
        />
        <b-carousel-slide
        id="slide3"
            caption="Laboratórios modernos"
            :img-src="require('../../images/carousel/tech-lab.jpg')"
        />
        <b-carousel-slide
        id="slide4"
            caption="Espaços de convivência"
            :img-src="require('../../images/carousel/space-fun.jpg')"
        />
      </b-carousel>
    <div>
</div>
    </div>
</template>

<script>
import BCarousel from 'bootstrap-vue/es/components/carousel/carousel'
import BCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide'

export default {
  name: 'Carousel',
  components: {
  BCarousel,
  BCarouselSlide
},
  data(){
    return {
      slide: 0,
      sliding: null
      }
    },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
