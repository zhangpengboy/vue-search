<template>
  <div class="search">
  <template :search="search">
    <el-select v-model="search.type" @change="change" id="select">
      <el-option
        v-for="item in search.selectItems"
        :key="item.value"
        :lable="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div >
      <el-input :placeholder="search.placeholder" v-model="search.searchValue" :clearable="search.clearable" id='search-input'></el-input>
    </div>
    <el-button icon="el-icon-search" @click="click" class="btn"></el-button>
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
    methods: {
      change (newType) {
        this.$emit('change', newType)
      },
      click () {
        this.$emit('click', this.search.searchValue)
      }
    }
  }
</script>

<style>
  .search {
    display: flex;
  }
  #select {
    width: 130px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 0;
  }
  #search-input {
    width: 216px;
    height: 40px;
    box-sizing: border-box;
    font-size: 14px;
    color: #909399;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }

  .btn {
    width: 44px;
    height: 40px;
    padding: 0;
    border: 1px solid #40b0ff;
    border-radius: 0;
    color: #fff;
    background-color: #40b0ff;
  }

  .btn:hover {
    background-color: #c4eaff;
    border: 1px solid #c4eaff;
  }

</style>
