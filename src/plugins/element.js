import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Checkbox,
  Radio,
  Table,
  TableColumn,
  Slider,
  Button,
  Loading
} from 'element-ui'

Vue.use(Checkbox)
Vue.use(Button)
Vue.use(Radio)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Slider)
Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service