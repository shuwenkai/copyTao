// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  axios from 'axios'
import router from './router'
import echarts from 'echarts'

Vue.config.productionTip = false;
Vue.use(element);
Vue.prototype.$axios=axios;
Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})