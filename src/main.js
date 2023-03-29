import Vue from 'vue'
import VueRouter from 'vue-router'
import microApp from '@micro-zoe/micro-app'

import App from './App.vue'
import App1 from './App1.vue'
import App2 from './App2.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', component: App1 },
  { path: '/ide', component: App2 }
];

const router = new VueRouter({
  mode: "hash",
  routes
});



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

microApp.start();
