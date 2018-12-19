<template>
  <div id="app">
    <button id="add" @click="add()">{{myadd}}</button>
    <button id="unadd" @click="unadd()">{{mydel}}</button>
  </div>
</template>

<script>
    export default {
        name: "add",
      props:['myadd','mydel'],
      methods:{
        add(){
          this.$emit('add')
        },
        unadd(){
          this.$emit('unadd')
        }
      }
    }
</script>

<style scoped>
  button{
    width: 100px;
    height: 25px;
    border: none;
    border-radius: 5px;
    color: white;
    box-shadow: 5px 5px 0 2px;
    cursor: pointer;
    font-family: '幼圆';
  }
  #add{
    background-color: #5CB85C;
    cursor: pointer;
  }
  #add:hover{
    background-color: #6ecf6e;
  }
  #unadd{
    background-color: #D15B47;
    cursor: pointer;
  }
  #unadd:hover{
    background-color: #f00000
  }
</style>
