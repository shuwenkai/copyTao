<template>
  <div class="userClass">
    <span class="className">个人类:</span>
    <div class="userPermissions">
      <pcd label-msg="昵称修改" class="pcd"></pcd>
      <pcd label-msg="性别修改" class="pcd"></pcd>
      <pcd label-msg="年龄修改" class="pcd"></pcd>
      <pcd label-msg="邮箱修改" class="pcd"></pcd>
      <pcd label-msg="地址修改" class="pcd"></pcd>
      <pcd label-msg="电话修改" class="pcd"></pcd>
      <pcd label-msg="密码修改" class="pcd"></pcd>
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
  .userClass{
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
  .userPermissions{
    position: absolute;
    left:350px;
  }
</style>
