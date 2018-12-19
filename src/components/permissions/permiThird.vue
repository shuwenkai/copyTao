<template>
  <div class="productClass">
    <span class="className">商品类:</span>
    <div class="productPermissions">
      <pcd label-msg="添加商品" class="pcd"></pcd>
      <pcd label-msg="删除商品" class="pcd"></pcd>
      <pcd label-msg="修改商品" class="pcd"></pcd>
    </div>
  </div>
</template>

<script>
  import pcd from './permiChild'
    export default {
        name: "permi-second",
      components:{
        pcd:pcd,
      }
    }
</script>

<style scoped>
  .productClass{
    text-align: left;
    position: relative;
  }
  .pcd{
    width: 200px;
    height: 35px;
    display: inline-block;
  }
  .className{
    position: absolute;
    left: 250px;
  }
  .productPermissions{
    position: absolute;
    left:350px;
  }
</style>
