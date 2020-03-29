<template>
  <div>
    <div class="menu" id="menu">
      <button class="offcanvas-close menu_btn" @click="toggleMenu">
        ×
      </button>
      <ul class="navbar-nav menu_navbar">
        <li class="nav-item">
          <a class="nav-link menu_navbar_nav-link" href="#">Главная<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu_navbar_nav-link" href="#">О компании</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link menu_navbar_nav-link dropdown-toggle" @click.prevent="toggleChildMenu">
            Каталог продукции
          </a>

          <transition name="slide">
            <div class="nav-link-dropdown" v-show="isShow">
              <a class="dropdown-item menu_navbar_collapse_item" href="#">Тепловое оборудование</a>
            </div>
          </transition>
        </li>
        <li class="nav-item">
          <a class="nav-link menu_navbar_nav-link" href="#">Сервис</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu_navbar_nav-link" href="#">Услуги</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu_navbar_nav-link" href="#">Доставка</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu_navbar_nav-link" href="#">Контакты</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

    export default {
        name: "HiddenMenu",
        data() {
            return {
                isShow: false,
            }
        },



        methods: {
            toggleChildMenu() {
                this.isShow = !this.isShow
            },
        }
    }
</script>

<style scoped lang="scss">
  .slide-enter-active {
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }

  .slide-leave-active {
    transition-duration: 0.5s;
    transition-timing-function: ease;
  }

  .slide-enter-to, .slide-leave {
    max-height: 100px;
    overflow: hidden;
  }

  .slide-enter, .slide-leave-to {
    overflow: hidden;
    max-height: 0;
  }
</style>
