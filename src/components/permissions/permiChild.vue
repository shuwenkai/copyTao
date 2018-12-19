<template>
  <div id="app">
    <div class="checkbox">
      <input id="check_input" type="checkbox" value="checkbox" :placeholder="labelMsg"/>
      <label for="check_input"><span>{{labelMsg}}</span></label>
    </div>
  </div>
</template>


<script>
    export default {
        name: "permi-child",
      props:[
        'labelMsg'
      ]
    }
</script>

<style scoped>
  input{
    cursor: pointer;
  }
</style>
