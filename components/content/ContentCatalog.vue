<template>
  <section class="content_catalog">
    <div class="container-fluid">
      <div class="content_catalog_header">
        <h2>производственное термопереводное оборудование</h2>
      </div>
      <CatalogTop/>
    </div>
  </section>
</template>

<script>
    import CatalogTop from '~/components/content/CatalogTop.vue';
    export default {
        name: "ContentCatalog",
        components: {
            CatalogTop,
        },
    }
</script>

<style scoped>

</style>
