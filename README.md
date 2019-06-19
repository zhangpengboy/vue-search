#vue-search
说明：该组件提供search对象和change、click方法
search对象有5个属性：

selectItems	 ：  下拉菜单	              （Array）  
searchValue	 ：  搜索框内容的值	         （String）
placeholder	  ： 搜索框提示文本	        （String） 
type	      ：   下拉菜单选中项的值	    （String） 
clearable	   ：  是否添加清空搜索框内容	（Boolean） 

引入：在main.js文件中
import VueSearch from './components/vue-search/index'
Vue.use(VueSearch)

使用示例：（DevSearch.vue）
