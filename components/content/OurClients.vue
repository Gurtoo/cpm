<template>
  <section class="our_clients">
    <div class="our_clients_header">
      <h2>наши клиенты</h2>
    </div>
    <div class="our_clients_content">
      <div class="container-fluid">
        <div class="row">
          <div class="col" v-for="firm in firms">
            <nuxt-link to="/" class="our_clients_content_url">
              <img :src="`${firm}`" alt="">
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import firm1 from '~/assets/img/sam.jpg'
  import firm2 from '~/assets/img/lg.jpg'
    export default {
        name: "OurClients",
        data(){
            return{
                firms:[
                    firm1,
                    firm2,
                    '/_nuxt/assets/img/sam.jpg',
                    '/_nuxt/assets/img/lg.jpg',
                    '/_nuxt/assets/img/sam.jpg',
                    '/_nuxt/assets/img/lg.jpg',
                ]
            }
        }
    }
</script>

<style scoped>

</style>
