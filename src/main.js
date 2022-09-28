import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.filter('limit', function (arr, limit) {
  if (!Array.isArray(arr)) return false;
  return arr.slice(0, limit);
})

Vue.filter('offset', function (arr, offset) {
  if (!Array.isArray(arr)) return false;
  return arr.slice(offset, arr.length)
});

new Vue({
  router,
  vuetify,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')
