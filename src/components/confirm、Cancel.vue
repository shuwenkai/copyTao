<template>
    <div id="app">
      <button id="confirm" @click="confirm()">确认</button> <!--confirm事件绑定确认按钮-->
      <button id="cancel" @click="cancel()">取消</button> <!--confirm事件绑定取消按钮-->
    </div>
</template>

<script>
    export default {
        name: "confirmAndCancel",
      methods:{
        confirm(){
            this.$emit('confirm')
          },
        cancel(){
            this.$emit('cancel')
        }
      }
    }
</script>

<style scoped>
  button{
    width: 50px;
    height: 25px;
    border: none;
    border-radius: 5px;
    color: white;
    box-shadow: 5px 5px 0 2px;
    cursor: pointer;
    font-family: '幼圆';
  }
  #confirm{
    background-color: #5CB85C;
    margin-right: 20px;
  }
  #confirm:hover{
    background-color: #6ecf6e;
  }
  #cancel{
    background-color: #e00000;
  }
  #cancel:hover{
    background-color: #f00000;
  }
</style>
