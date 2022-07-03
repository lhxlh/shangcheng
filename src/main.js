import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入仓库
import store from './store'
// 引入插件
import './mock/mockServe'
import 'swiper/css/swiper.css'
// 全局组件
import TypeNav from './components/TypeNav'
Vue.component(TypeNav.name, TypeNav)
import Carousel from './components/Carousel'
Vue.component(Carousel.name, Carousel)
import Pagination from './components/Pagination'
Vue.component(Pagination.name, Pagination)

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
