<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
  data(){
    return {
      checkMsg:"checkMsg",
    }
  },
  methods:{

  },
  components:{
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .mynav{
    float: left;
  }
  #tab{
    width: 1149px;
    height: 580px;
    background-color: #fff;
    float: left;
    overflow: hidden;
  }
</style>
