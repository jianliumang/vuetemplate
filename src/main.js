// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/style/common.css'
import utis from './common/utis/utis.js'
import * as api from './config'

Vue.use(ElementUI)
Vue.use(Vueaxios,axios)
Vue.use(utis)

Vue.config.productionTip = false
Vue.prototype.$api = api

router.beforeEach((to,from,next) => {
  // if(to.matched.some(res => res.meta.requireAuth)){
  //   if(localStorage.getItem('token')) {
  //     next();
  //   } else {
  //     next({
  //       path: '/login'
  //     });
  //   }
  // } else {
    next();
  // }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
