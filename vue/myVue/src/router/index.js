import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import itemcontainer from '@/components/itemcontainer'
import Item from '@/components/Item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: itemcontainer
    }
   ,{
      path: '/',
      name: 'item',
      component: Item
    }
  ]
})
/*import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('../page/item')), 'item')
    }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('../page/score')), 'score')
    }]
}]
*/