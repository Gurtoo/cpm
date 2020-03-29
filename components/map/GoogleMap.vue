<template>
    <section class="content_map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3755.9216825275544!2d126.5970114755306!3d37.664692560229064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1575799815500!5m2!1sru!2s" allowfullscreen=""></iframe>
    </section>
</template>

<script>
    export default {
        name: "GoogleMap"
    }
</script>

<style scoped lang="scss">
    .content_map{
      font-size: 0;
      iframe{
        pointer-events: auto;
        width: 100%;
        height: 100%;
        min-height: 350px;
        border: 0;
      }
    }
</style>
