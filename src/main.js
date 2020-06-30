import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import composition from './plugins/composition';
import lodash from './plugins/lodash';

Vue.config.productionTip = false

new Vue({
  vuetify,
  composition,
  lodash,
  render: h => h(App)
}).$mount('#app')
