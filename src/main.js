import Vue from 'vue';
import App from './App.vue';
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

import { createElement } from '@vue/composition-api';

Vue.config.productionTip = false;

new Vue({
  render: () => createElement(App),
}).$mount('#app');
