<template>
  <div class="productClass">
    <span class="className">售后类:</span>
    <div class="productPermissions">
      <pcd label-msg="退款处理" class="pcd"></pcd>
      <pcd label-msg="删除订单" class="pcd"></pcd>
      <pcd label-msg="修改订单" class="pcd"></pcd>
    </div>
  </div>
</template>

<script>
  import pcd from './permiChild'
    export default {
        name: "permiss-four",
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
