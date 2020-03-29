<template>
  <div class="content_index">
    <HeaderContent/>
    <ContentInfo/>
    <ContentCatalog/>
    <SliderCenter/>
    <OurClients/>
    <GoogleMap/>
  </div>
</template>

<script>

    import HeaderContent from '~/components/content/HeaderContent.vue'
    import ContentInfo from '~/components/content/ContentInfo.vue'
    import ContentCatalog from '~/components/content/ContentCatalog.vue'
    import SliderCenter from '~/components/slider/SliderCenter.vue'
    import OurClients from '~/components/content/OurClients.vue'
    import GoogleMap from '~/components/map/GoogleMap.vue'

    export default {
        components: {
            HeaderContent,
            ContentInfo,
            ContentCatalog,
            SliderCenter,
            OurClients,
            GoogleMap,
        },

        computed: {

        },
    }
</script>

<style lang="scss">
</style>

