import Vue from 'vue'
import Router from 'vue-router'
import devSearch from '@/dev/devSearch.vue'
import vueSearch from '@/components/vue-search/VueSearch.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/dev-search',
      name:devSearch,
      component:devSearch,
    },
    {
      path:'/vue-search',
      name:vueSearch,
      component:vueSearch,
    },
    {
      path:'/',
      redirect:'/dev-search',
    }
  ]
})
