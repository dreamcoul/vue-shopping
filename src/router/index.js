import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/reset.css'
import '../assets/css/header.css'
import '../assets/css/goodsList.css'
import Shop from '../views/shop'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Shop}
  ]
})
