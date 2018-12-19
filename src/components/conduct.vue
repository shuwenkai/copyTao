<template>
<div id="app">
  <i class="iconfont" @click="home()">&#xe60d</i>
  <span id="home" @click="home()">首页</span><!--home事件绑定点击跳转回主页事件-->
  <span>>{{position}}</span><!--position属性表示引导现在的位置-->
</div>
</template>

<script>
    export default {
        name: "conduct",
      props:['position'],
      methods:{
          home(){
            this.$emit('home')
          }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    position: absolute;
    top: 0;
    left: 10px;
  }
.iconfont{
  font-size: 18px;
  cursor: pointer;
}
  span{
    font-weight: bold;
    font-size: 16px;
  }
  #home{
    cursor: pointer;
  }
</style>
