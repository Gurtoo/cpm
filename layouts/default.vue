<template>
  <div class="content_container">
    <Header/>
    <div class="content" :class="{ 'shown-menu' : !!(menu) }">
      <nuxt/>
    </div>
    <Footer :class="{ 'shown-menu' : !!(menu) }"/>
    <div class="hidden-menu" :class="{ 'shown-right' : !!(menu) }">
      <HiddenMenu/>
    </div>
    <div @click="toggleMenu" :class="{'active_mask' : !!(menu)}" class="mask"></div>
  </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Header from '~/components/Header.vue';
    import Footer from '~/components/Footer.vue';
    import HiddenMenu from '~/components/HiddenMenu.vue';

    export default {
        components: {
            Header,
            Footer,
            HiddenMenu,
        },

        computed: {
            ...mapState({
                menu: state => state.menu,
            })
        }
    }
</script>

<style>

</style>

