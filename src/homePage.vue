<template>
  <div>
    <myHeader></myHeader>
    <mynav class="mynav"></mynav>
    <div id="tab">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import mynav from './components/nav/proVue'
  import myHeader from './components/nav/topHeader'

  export default {
        name: "home-page",
    components:{
      mynav:mynav,
      myHeader:myHeader,
    }
    }
</script>

<style scoped>
  #tab{
    width: 1149px;
    height: 570px;
  }
</style>
