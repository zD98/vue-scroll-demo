// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueAlloyTouch from './plugins/v-alloytouch'

import VueScroll from './plugins/v-scroll.js'
Vue.use(VueScroll)
// Vue.use(VueAlloyTouch)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	render: h => h(App)
})
