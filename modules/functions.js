import Vue from 'vue';
import {mapState, mapMutations} from 'vuex';

const Functions = {
  install(Vue) {
    Vue.mixin({
      methods: {
        ...mapMutations([
          'setMenu',
        ]),

        toggleMenu() {
          document.body.classList.toggle('modal-open');
          this.setMenu(!(this.menu));
        }
      },

      computed: {
        ...mapState({
          menu: state => state.menu,
        })
      }
    })
  }
};

Vue.use(Functions);
