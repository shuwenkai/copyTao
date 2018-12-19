<template>
  <div id="app">
    <i class="iconfont" @click="check">&#xe605</i><!--check事件绑定查看图标-->
    <i class="iconfont" @click="edit">&#xe636</i><!--edit事件绑定编辑图标-->
    <i class="iconfont" @click="mydelete">&#xe61d</i><!--mydelete事件绑定删除图标-->
  </div>
</template>

<script>
    export default {
        name: 'check',
      methods:{
          check(){
            this.$emit('check')
          },
        edit(){
          this.$emit('edit')
        },
        mydelete(){
          this.$emit('mydelete')
        },
      }
    }
</script>

<style scoped>
.iconfont{
  font-size: 16px;
  margin-left: 5px;
  color: #969696;
}
  .iconfont:hover{
    color: #5CB85C;
    cursor: pointer;
  }
#app{
  margin: 0;
}
</style>
