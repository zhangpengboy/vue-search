<template>
    <div>
      <h2>测试</h2>
      <VueSearch :search="search" @change="changeType" @click="searchOK" @enter="onsubmit" style="margin-left:30%;"></VueSearch>
      <h4 style="margin-top: 150px;">示例：</h4>
      <a href="https://github.com/zhangpengboy/vue-search">
        https://git@github.com:zhangpengboy/vue-search.git</a>
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
          placeholder:'请输入内容:',//搜索框提示文本
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
        console.log(newType)
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
        alert('查询条件:' + this.search.type + ' ; ' +'输入内容:' + value)
      },
      onsubmit(value){
        console.log('enter')
        this.searchOK(value)
      }
    },
  }
</script>

<style scoped>

</style>
