import Vue from 'vue';

Vue.directive('format-price', {
    update: function (el) {
        if (el.value) {
            let val = el.value.replace(/[^0-9.]/g, '');
            el.value = new Intl.NumberFormat().format(parseInt(val));
        }
    }
});

Vue.directive('max', {
    update: function (el, number) {
        if (el.value) {
            let value = el.value.replace(/[^0-9.]/g, '');
            el.value = (value <= number.value) ? value : number.value;
        }
    }
});