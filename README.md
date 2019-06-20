vue-search
----

### 说明：该组件基于element-ui库进行二次封装，提供search对象和change、click、enter方法
```bash

search对象有5个属性：

* selectItems	   下拉菜单	              （Array，默认为[]） 

* searchValue	   搜索框内容的值	       （String，默认为''）

* placeholder	   搜索框提示文本	       （String，默认为''） 

* type	          下拉菜单选中项的值	     （String，默认为''） 

* clearable	   是否添加清空搜索框内容	    （Boolean，默认为true） 

三个方法：

* change      下拉菜单点击事件            funaction（newType）

* click       按钮点击事件                funaction（value）

* enter       enter键盘事件              funaction（[value]）
```

### 下载
```javascript
npm install dl_searchs --save
```


### 引入：在main.js文件中
```JavaScript

import VueSearch from 'dl_searchs'

Vue.use(VueSearch)
```


### 使用示例：（\vue_search\src\dev\DevSearch.vue）
```JavaScript
<template>
    <div>
      <VueSearch :search="search" @change="changeType" @click="searchOK" @enter="submit" style="margin-left:30%;"></VueSearch>
    </div>
</template>

<script>
  export default {
    name: 'DevSearch',
    components: {},
    data(){
      return {
        search:{
          selectItems:[],//下拉菜单
          searchValue:'',//搜索框内容的值
          placeholder:'请输入内容',//搜索框提示文本
          type:'',//下拉菜单选中项的值
          clearable: true,//是否添加清空搜索框内容
        }
      }
    },
    created(){
      this.setSelectItems()
      this.search.type = '所有'
    },
    methods:{
      setSelectItems(){
        this.search.selectItems = [
          {
            value: '所有',
            label: 'all'
          },
          {
            value: '根据名称',
            label: 'name'
          }, {
            value: '根据ID',
            label: 'ID'
          }
        ]
      },
      changeType(newType){
        if(newType === '根据名称' ){
          this.search.type = '根据名称'
          this.search.placeholder = '请输入名称'
        }else if(newType === '根据ID' ){
          this.search.type = '根据ID'
          this.search.placeholder = '请输入ID'
        }else if(newType === '所有' ){
          this.search.type = '所有'
          this.search.placeholder = '请输入内容'
        }
      },
      searchOK(value){
        //按钮点击发送请求
        alert('查询条件:' + this.search.type + ' ; ' +'输入内容:' + value)
      },
      submit(value){
        //enter键发请求
        // this.searchOK(this.search.searchValue)
        alert('查询条件:' + this.search.type + ' ; ' +'输入内容:' + value)
      },
    },
  }
</script>


```
