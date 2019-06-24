search
----

### 说明：该组件基于element-ui库进行二次封装，提供search对象和change、click、enter方法，两个slot的插槽
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

slot：

* <slot name="select"></slot>
* <slot name="more"></slot>
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
      <VueSearch :search="search" @change="changeType" @click="searchOK" @enter="submit" style="margin-left:30%;">
        <div slot="more" style="margin-left:50px;width:120px;">
          <el-select  v-model="typeOne" @change="changeTypeOne" >
            <el-option
              v-for="item in selectItemsOne"
              :key="item.value"
              :lable="item.label"
              :value="item.value">
              {{item.label}}
            </el-option>
          </el-select>
        </div>
      </VueSearch>
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
            width:'120px ',
          },
          inputClass: {     //输入框的样式
            width:'250px'
          }
        },
        typeOne:'',
        selectItemsOne:[
          {
            value: 'eq',
            label: '相等'
          },
        ],
      }
    },
    created(){
      this.setSelectItems()
      this.setSelectItemsOne()
      this.search.type = '条件1'
      this.typeOne = '更多查询'
    },
    methods:{
      setSelectItems(){
        this.search.selectItems = [
          {
            value: 'id',
            label: 'id'
          },
          {
            value: 'code',
            label: '资源代码'
          },
          {
            value: 'name',
            label: '资源名称'
          },
          {
            value: 'content',
            label: '资源内容'
          }
        ]
      },
      setSelectItemsOne(){
        this.selectItemsOne = [
          {
            value: 'eq',
            label: '相等'
          },
          {
            value: 'lt',
            label: '小于'
          }, {
            value: 'gt',
            label: '大于'
          }
        ]
      },
      changeType(vlaue){
        console.log(vlaue)
        if(vlaue === 'id' ){
          this.search.type = 'id'
          this.search.placeholder = '请输入id'
        }else if(vlaue === 'code' ){
          this.search.type = '资源代码'
          this.search.placeholder = '请输入资源代码'
        }else if(vlaue === 'name' ){
          this.search.type = '资源名称'
          this.search.placeholder = '请输入资源名称'
        }else if(vlaue === 'content' ){
          this.search.type = '资源内容'
          this.search.placeholder = '请输入资源内容'
        }
      },
      changeTypeOne(vlaue){
        console.log(vlaue)
        if(vlaue === 'eq' ){
          this.typeOne = '相等'
        }else if(vlaue === 'lt' ){
          this.typeOne = '小于'
        }else if(vlaue === 'gt' ){
          this.typeOne = '大于'
        }
      },
      searchOK(value){
        //按钮点击发送请求
       alert('查询条件1:' + this.search.type + ' ; '+'查询条件2：'+this.typeOne+ ' ; ' +'输入内容:' + value)
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
