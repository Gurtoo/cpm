<template>
  <section class="content_top_carousel">
      <div class="content_top_swip_info">
        <div class="content_top_swip_info_text">
          <h2>{{ $t('home.title') }}</h2>
          <h2>{{ $t('home.introduction') }}</h2>
        </div>
        <nuxt-link class="btn" to="/catalog">смотреть каталог</nuxt-link>
      </div>
      <div v-swiper:mySlideHeader="swiperOption" class="swiper-container swiper-top">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="baner in baners">
            <div class="slide_img">
              <img v-bind:src="`${baner}`" alt="swiper-top-slide">
            </div>
          </div>
        </div>
        <div class="swiper-pagination">
        </div>
      </div>
      <div class="content_top_block-orange"></div>
    </section>
</template>

<script>
    import baner1 from '~/assets/img/top-slider.jpg';
    import baner2 from '~/assets/img/top-slider2.jpg';
    import baner3 from '~/assets/img/top-slider.jpg';
    export default {
        name: "HeaderContent",
        data(){
            return{
                baners:[
                    baner1,
                    baner2,
                    baner3,
                ],
                swiperOption: {
                    loop: true,
                    slidesPerView: 1,
                    effect:'fade',
                    autoplay: {
                        delay: 5000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                },
                title: this.$t('home.title')
            }
        }
    }
</script>

<style scoped>

</style>
