import MySearch from './VueSearch.vue'
let VueSearch = {}
VueSearch.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
  }
  // 2. 添加全局资源
  Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
      }
    }
  )
  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
    }
  })
  // 4. 添加实例方法和全局属性
  Vue.prototype.$msg = 'Hello I am search.js'
  Vue.prototype.$myMethod = function (arr) {
    // 逻辑...
    if (arr.length < 0) {
      return false
    } else {
      arr = arr.join('连接你我')
      return arr
    }
  }
  //添加组件名
  Vue.component('VueSearch',MySearch)
}
//导出组件
export default VueSearch
