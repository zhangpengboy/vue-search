<template>
  <div class="dl-search">
  <template :search="search">
    <el-select v-model="search.type" @change="change" id="dl-select">
      <el-option
        v-for="item in search.selectItems"
        :key="item.value"
        :lable="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div >
      <el-input :placeholder="search.placeholder"
                v-model="search.searchValue"
                :clearable="search.clearable"
                @keyup.enter.native="enter"
                id='dl-input'>

      </el-input>
    </div>
    <el-button icon="el-icon-search" @click="click" class="dl-btn" type="primary"></el-button>
  </template>
  </div>
</template>

<script>
  export default {
    name:'VueSearch',
    data () {
      return {
      }
    },
    props: {
      search:{
        type: Object,
        default() {
          return {
            selectItems:{//下拉菜单
              type:Array,
              default: [],
              require: true,
            },
            searchValue:{//搜索框内容的值
              type:String,
              default: '',
              require: true,
            },
            type:{//下拉菜单选中项的值
              type: String,
              default: '',
              require: true,
            },
            placeholder:{//搜索框提示文本
              type: String,
              default: '',
            },
            clearable: {//是否添加清空搜索框内容
              type: Boolean,
              default: true,
            },
          }
        }
      },
    },
    created(){
    },
    methods: {
      change (newType) {
        this.$emit('change', newType)
      },
      click () {
        this.$emit('click', this.search.searchValue)
      },
      enter(){
        this.$emit('enter',[this.search.searchValue])
      },
    }
  }
</script>

<style>
  .dl-search {
    display: flex;
  }
  #dl-select {
    width: 130px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 0;
  }
  #dl-input {
    width: 216px;
    height: 40px;
    box-sizing: border-box;
    font-size: 14px;
    color: #909399;
    border-radius: 0;
  }
  .dl-btn {
    width: 44px;
    height: 40px;
    padding: 0;
    border-radius: 0;
  }

</style>
