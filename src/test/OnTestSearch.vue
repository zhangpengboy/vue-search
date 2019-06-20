<template>
  <div>
    <h2>打包发布测试</h2>
    <VueSearch :search="search" @change="changeType" @click="searchOK" @enter="submit" style="margin-left:30%;"></VueSearch>
    <h4 style="margin-top: 150px;">示例：</h4>
    <a href="https://github.com/zhangpengboy/vue-search">
      https://git@github.com:zhangpengboy/vue-search.git</a>
  </div>
</template>

<script>
  export default {
    name: 'OnTestSearch',
    components: {},
    data(){
      return {
        search:{
          selectItems:[],//下拉菜单
          searchValue:'',//搜索框内容的值
          placeholder:'请输入内容',//搜索框提示文本
          type:'',//下拉菜单选中项的值
          clearable: true,//是否添加清空搜索框内容
        },

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
        //下拉列表的点击事件
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

<style scoped>

</style>

