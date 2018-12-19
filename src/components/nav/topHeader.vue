<template>
<div id="app">
  <div class="headerTop">
    <img src="../../assets/Taologo.png" alt="logo">
    <h2>Tao家居后台管理系统</h2>
    <p>系统时间:<span>{{myDate}}</span></p>
    <span class="userTop">您好： <router-link to="/">{{admin}}</router-link></span>
  </div>
</div>
</template>

<script>
    export default {
        name: "top-header",
      data(){
          let date=new Date();
          return {
            myDate:date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日'+date.getHours()+':'+date.getMinutes(),
            admin:"管理员"
          }
      }
    }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  font-family: '微软雅黑';
}
  .headerTop{
    width: 1349px;
    height: 75px;
    background-color: #33383E;
    position: relative;
    line-height: 45px;
  }
  .headerTop img{
    position: absolute;
    left: 70px;
    top: 20px;
  }
  .headerTop h2{
    color: white;
    display: inline-block;
    position: absolute;
    left: 300px;
    top: 20px;
  }
  .headerTop p{
    color: white;
    position: absolute;
    left: 850px;
    top: 20px;
  }
  .userTop{
    position: absolute;
    right: 80px;
    top: 20px;
  }
  .userTop,.userTop a{
    text-decoration: none;
    color: white;
  }
</style>
