import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Form} from "ant-design-vue";
import {Button} from "ant-design-vue";
import {Input} from "ant-design-vue";
import {Icon} from "ant-design-vue";
import {Checkbox} from "ant-design-vue";

Vue.use(Form)
Vue.use(Button)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Checkbox)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
