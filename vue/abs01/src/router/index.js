import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Index from '@/components/Index'
import IndexBody from '@/components/index/IndexBody'
import Investment from '@/components/investment/Investment'
import Information from '@/components/information/Information'
import Chain from '@/components/chain/Chain'
//import Item from '@/components/Item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children:[
	      {
	      	path: '/',
	      	component: IndexBody,
	      },
	      {
	      	path: '/IndexBody',
	      	component: IndexBody,
	      },
	      {
	      	path: '/Investment',
	      	component: Investment,
	      },
	      {
	      	path: '/Information',
	      	component: Information,
	      },
	      {
	      	path: '/Chain',
	      	component: Chain,
	      }
      ]
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