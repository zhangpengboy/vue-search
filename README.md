vue-search
----

### 说明：该组件基于element-ui库进行二次封装，提供search对象和change、click、enter方法
```bash

search对象有5个属性：

* selectItems	      下拉菜单	                     （Array，默认为[]，必选） 

* searchValue	      搜索框内容的值	             （String，默认为''，必选）

* placeholder	      搜索框提示文本	             （String，默认为''） 

* type	             下拉菜单选中项的值	             （String，默认为''，必选） 

* clearable	     是否添加清空搜索框内容	      （Boolean，默认为true）

* selectClass	     下拉菜单的样式	              （Object）

* inputClass	     输入框的样式	              （Object）

三个方法：

* change      下拉菜单值改变时触发            funaction（newType）

* click       按钮点击时触发                 funaction（value）

* enter       enter键触发                   funaction（[value]）
```

### 下载
```javascript
npm i dl_searchs --s
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
          clearable: true,//是否添加清空搜索框内容,
          selectClass: {    //下拉菜单的样式
            width:'100px ',
          },
          inputClass: {     //输入框的样式
            width:'250px'
          }
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
            value: 'all',
            label: '所有'
          },
          {
            value: 'name',
            label: '根据名称'
          }, {
            value: 'ID',
            label: '根据ID'
          }
        ]
      },
      changeType(vlaue){
        if(vlaue === 'name' ){
          this.search.type = '根据名称'
          this.search.placeholder = '请输入名称'
        }else if(vlaue === 'ID' ){
          this.search.type = '根据ID'
          this.search.placeholder = '请输入ID'
        }else if(vlaue === 'all' ){
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
