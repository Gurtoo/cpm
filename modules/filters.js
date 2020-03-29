import Vue from 'vue';

const Filters = {
  install(Vue) {
    Vue.mixin({
      filters: {
        formatPrice(price) {
          return new Intl.NumberFormat().format(price);
        }
      }
    })
  }
};

Vue.use(Filters);
