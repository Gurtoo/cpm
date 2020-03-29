<template>
  <header class="header_index header_fixed-top" :class="{ 'shown-menu' : !!(menu) }">
    <div class="container-fluid">
      <div class="header_index_fixed header_fixed">
        <div class="row align-items-center">
          <div class="col-5">
            <div class="nav-link header_fixed_menu-contacts">
              <span class="icon-phone"></span><a href="tel:+82-31-988-8302~3">82-31-988-8302~3</a>
            </div>
          </div>
          <div class="col">
            <div class="header_fixed_logo text-center">
              <nuxt-link to="/"><img src="~/assets/img/logo.png" alt="logo"></nuxt-link>
            </div>
          </div>
          <div class="col-5">
            <div class="header_fixed_menu">
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <button class="nav-link header_fixed_menu-other btn_menu" id="menu-transform"
                          @click.prevent="toggleMenu">
                    <span class="icon-menu header_fixed_menu-other-icon"></span>
                  </button>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link header_fixed_menu-other"
                     @click.prevent="toggleVariable('displayLangMenu')" data-toggle="dropdown"
                     href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <span class="icon-lang header_fixed_menu-other-icon"></span>
                  </a>
                  <div class="dropdown-menu" v-show="displayLangMenu">
                    <NuxtLink v-if="$i18n.locale === 'ru'" :to="`/en` + $route.fullPath" class="dropdown-item" active-class="none" exact>
                      {{ $t('links.english') }}
                    </NuxtLink>
                    <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="dropdown-item" active-class="none" exact>
                      {{ $t('links.russian') }}
                    </NuxtLink>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
    import {mapState} from 'vuex';
  export default {
      name: "Header",
      data() {
          return {
              displayLangMenu: false,
          }
      },
      computed: {
          ...mapState({
              menu: state => state.menu,
          })
      },
      methods: {
          toggleVariable(variable) {
              this[variable] = !this[variable];
          }
      }
  }
</script>
<style lang="scss" scoped>
  .dropdown-menu {
    display: block;
    right: 0;
    left: auto;
  }
</style>

