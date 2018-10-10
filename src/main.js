// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import {Button,Container,header,main,footer,menu,submenu,menuItem,carousel,carouselItem,row,col,card,Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'

Vue.prototype.$message = Message

Vue.prototype.$ELEMENT = { size: 'small', zIndex: '3000'}
Vue.use(Button)
Vue.use(Container)
Vue.use(header)
Vue.use(main)
Vue.use(footer)
Vue.use(menu)
Vue.use(submenu)
Vue.use(menuItem)
Vue.use(carousel)
Vue.use(carouselItem)
Vue.use(row)
Vue.use(col)
Vue.use(card)

Vue.use(VueLazyload, {
  error: 'assets/images/error.png',
  // loading: 'assets/images/loading.gif',
  loading: '<i class="el-icon-loading"></i>',
  try: 3 
})

Vue.config.productionTip = false
Vue.config.lang = 'zh-cn'
console.log(store)
/* eslint-disable no-new */
new Vue({
  el:'#app',
  router,
  store,
  components:{
    App
  },
  template:'<App/>'
})
