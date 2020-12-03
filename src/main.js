import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Popup,Search,Col,Row,Icon,CellGroup,Cell,List,Lazyload,Pagination,Progress,Toast,PullRefresh,Empty } from 'vant'
import 'vant/lib/index.css'


Vue.use(Button).use(Popup).use(Search).use(Col).use(Row).use(Icon).use(CellGroup).use(Cell).use(List).use(Lazyload).use(Pagination).use(Progress).use(Toast).use(PullRefresh).use(Empty)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
