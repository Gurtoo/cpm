<template>
  <section class="content_center_carousel" v-if="sliders.length>0">
    <div v-swiper:mySlideCenter="swiperOption" class="swiper-container swiper-center">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slider in sliders">
          <nuxt-link to="/" class="content_center_carousel-slide">
            <img v-bind:src="`${slider}`" alt="banner-center">
          </nuxt-link>
        </div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"><span class="icon-active"></span></div>
      <div class="swiper-button-prev"><span class="icon-active" style="transform: rotateY(180deg);"></span></div>
      </div>
    </div>
  </section>
</template>

<script>
    import slide1 from '~/assets/img/declarat.jpg';
    import slide2 from '~/assets/img/declarat.jpg';
    import slide3 from '~/assets/img/declarat.jpg';
    import slide4 from '~/assets/img/declarat.jpg';
    export default {
        name: "SliderCenter",
        data(){
            return{
                sliders:[
                    slide1,
                    slide2,
                    slide3,
                    slide4,
                ],
                swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 48,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        525: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        },
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
