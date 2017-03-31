// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios'

/* eslint-disable no-new */
FastClick.attach(document.body)
//
//
//
//Vue.directive("showx", {
//  inserted: function (el, binding) {
//    var scrollHeight = el.scrollHeight;
//    el.onscroll = function () {
//      var scrollTop = el.scrollTop;
//      var offsetHeight = el.offsetHeight;
//      if (scrollTop + offsetHeight == scrollHeight) {
//        el.className+=" "+"div3"
//      }
//    }
//  }
//}
//)
Vue.prototype.$http = axios
Vue.prototype.$qs= require('qs')
//Vue.prototype.$router= router
//Vue.http.options.emulateHTTP =true;
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
})
