import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import '@/assets/style/app.scss'
import '@/plugins/element'
import '@/plugins/highCharts'
import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')