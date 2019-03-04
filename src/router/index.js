import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/reset.css'
import '../assets/css/header.css'
import '../assets/css/goodsList.css'
import Shop from '../views/shop'
import Home from '../views/home'
import MPhone from '../views/mPhone'
import Pageone from '../views/page_one'
import Pagetwo from '../views/page_two'
import Pagethree from '../views/page_three'
import Pagefour from '../views/page_four'
import Pagefive from '../views/page_five'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component:Home},
    {path: '/home', component:Home},
    {path: '/shop',component: Shop},
    {path: '/mPhone', component: MPhone},
    {path: '/one', component:Pageone},
    {path: '/two', component:Pagetwo},
    {path: '/three', component:Pagethree},
    {path: '/four', component:Pagefour},
    {path: '/five',component:Pagefive}
  ]
})
