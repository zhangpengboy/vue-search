import Vue from 'vue'
import Router from 'vue-router'
import DevSearch from '@/dev/DevSearch.vue'
import TestSearch from '@/test/TestSearch.vue'
import OnTestSearch from '@/test/OnTestSearch.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/dev-search',
      name:DevSearch,
      component:DevSearch,
    },
    {
      path:'/test-search',
      name:TestSearch,
      component:TestSearch,
    },
    {
      path:'/on-test-search',
      name:OnTestSearch,
      component:OnTestSearch,
    },
    {
      path:'/',
      redirect:'/on-test-search',
    }
  ]
})
