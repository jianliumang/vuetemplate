import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/home',
      name: 'home',
      component: (resolve) => {require(['@/view/main/home/home.vue'],resolve)},
      hidden:true,
      children:[
        {
          path: '/index',
          name: '首页',
          component: (resolve) => {require(['@/view/main/index/index.vue'],resolve)},
          hidden:true
        },
        {
          path: '/map',
          name: '地图',
          component: (resolve) => {require(['@/view/map/map.vue'],resolve)},
          hidden:true,
          children:[
            {
              path: '/map1',
              name: '地图1',
              component: (resolve) => {require(['@/view/map/map1.vue'],resolve)},
              hidden:true
            },
          ]
        },
      ]
    },
    
  ]
})
