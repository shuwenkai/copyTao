<template>
<div id="app">
  <div id="login">
    <h3>欢迎登录Tao家居后台管理系统</h3>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="登录名" class="inputLogin">
        <el-input v-model="formLabelAlign.name" class="loginName"></el-input>
      </el-form-item>
      <el-form-item label="密 码" class="inputLogin">
        <el-input v-model="formLabelAlign.region" type="password" class="loginPwd"></el-input>
      </el-form-item>
    <el-button type="primary"  style="width: 100px;height: 35px" @click="login">登录</el-button>

    </el-form>
    <span style="display: inline-block;margin-top: 5px">{{msga}}</span>
    <span class="msg">{{msg}}</span>
  </div>
</div>
</template>

<script>
    export default {
        name: "login-in",
      data() {
        return {
          labelPosition: 'right',
          msg:'',
          msga:'忘记密码？请联系超级管理员',
          formLabelAlign: {
            name: '',
            region: '',
            type: ''
          }
        };
      },
      methods:{
        login(){
            let name=document.getElementsByTagName('input')[0].value;
            let pwd=document.getElementsByTagName('input')[1].value;
            this.$axios.post('/api/login.do',{name:name,pwd:pwd})//登录
              .then(resp=>{
                if(resp.data.length>0){
                  window.location='#/homePage/index';
                }else{
                  this.msga='';
                  this.msg="请检查你的账户名或者密码";
                }
              })
          },
      }
    }
</script>

<style scoped>
#login{
  width: 500px;
  height: 300px;
  /*outline: 1px solid red;*/
  background-color: #dcdddd;
  margin: 50px auto;
  padding-top:20px ;
}
  .inputLogin{
    width: 400px;
    margin: 30px auto;
  }
  .msg{
    display: inline-block;
    margin-top: 15px;
    color: red;
  }
</style>
