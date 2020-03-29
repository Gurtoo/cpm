<template>
  <div class="content_catalog_top justify-content-center">
    <div class="row no-gutters">
      <div class="col-sm-4" v-for="item in items" :key="item.id">
        <a class="content_catalog_top_url" href="#"  @click.prevent="setActive(item)">
          <img :src="`${item.img}`" alt="asd">
          <div v-show="active && item.id === active.id" class="content_catalog_info">
            <p>Термопереводное оборудование  для изделий <br/>  c плоской поверхностю</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    import img from '~/assets/img/IMG_7745.jpg';
    import img2 from '~/assets/img/IMG_7855.jpg';
    import img3 from '~/assets/img/IMG_7860.jpg';
    import img4 from '~/assets/img/IMG_7865.jpg';
    import img5 from '~/assets/img/IMG_7870.jpg';
    import img6 from '~/assets/img/IMG_7885.jpg';
    export default {
        name: "CatalogTop",
        data () {
            return {
                items: [
                    {
                        id: 1,
                        img: img,
                    },

                    {
                        id: 2,
                        img: img2,
                    },

                    {
                        id: 3,
                        img: img3,
                    },

                    {
                        id: 4,
                        img: img4,
                    },

                    {
                        id: 5,
                        img: img5,
                    },

                    {
                        id: 6,
                        img: img6,
                    },
                ],
                active: null,
                isVisible: false,
            }
        },
        methods: {
            setActive(item) {
                this.active = (this.active && this.active.id === item.id) ? null : item;
            },
        }
    }
</script>

<style scoped>

</style>
