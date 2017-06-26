// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from "vue-resource"
import Header from './components/public/Header'
import Footer from './components/public/Footer'
import Content from './components/public/Content'
//iconfont
import "./iconfont/iconfont.css"
//mint-ui组件库
import MintUI from 'mint-ui'


//全局注册公用组件
Vue.component(Footer.name, Footer)
Vue.component(Header.name, Header)
Vue.component(Content.name, Content)


Vue.use (Resource)
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
