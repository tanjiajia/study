import Vue from 'vue'
import Router from 'vue-router'
import itemcontainer from '@/components/itemcontainer'
import Item from '@/components/Item'
import Score from '@/components/Score'
//import * as action from '../store/action'
//import * as mutations from '../store/mutations'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: itemcontainer
    }
   ,{
      path: '/item',
      name: 'item',
      component: Item
    },
   {
      path: '/score',
      name: 'score',
      component: Score
    }
  ]
})
