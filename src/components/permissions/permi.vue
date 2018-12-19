<template>
<div id="app">
  <header>
    <div id="header">
      <router-link to="/index">  首页</router-link>><router-link to="#">权限管理</router-link>
    </div>
  </header>
  <section style="text-align:center" class="sectionPer">
    <span id="adminPage">为管理员
      <select name="adminList" id="adminList">
        <option value="aaa" v-for="item in adminData">{{item.t_name}}</option>
      </select>
      分配权限
      <button @click="checkAdmin">更换</button></span>
    <hr class="hrCss">
    <pcs class="pcs"></pcs>
    <hr class="hrCss">
    <pct class="pct"></pct>
    <hr class="hrCss">
    <pcf class="pcf"></pcf>
    <mybtn @confirm="confirmFn" @cancel="cancelFn"></mybtn>
  </section>
</div>
</template>

<script>
  import pcs from './permiSecond'
  import pct from './permiThird'
  import pcf from './permissFour'
  import mybtn from '../confirm、Cancel'
    export default {
        name: "permi",
      data(){
          return {
            adminData:"adminData"
          }
      },
      methods:{
        checkAdmin(){
          let adminList=document.getElementsByName('adminList');
          let index=adminList[0].selectedIndex;
          let adminName=document.getElementsByTagName('input');
          this.$axios.post('/api/assignAdmin.do',{params:(index+1)})
            .then(resp=>{
                adminName[0].checked=resp.data[0].t_nickname==='true';
                adminName[1].checked=resp.data[0].t_sex==='true';
                adminName[2].checked=resp.data[0].t_age==='true';
                adminName[3].checked=resp.data[0].t_mailbox==='true';
                adminName[4].checked=resp.data[0].t_address==='true';
                adminName[5].checked=resp.data[0].t_phone==='true';
                adminName[6].checked=resp.data[0].t_password==='true';
                adminName[7].checked=resp.data[0].t_add==='true';
                adminName[8].checked=resp.data[0].t_delete==='true';
                adminName[9].checked=resp.data[0].t_change==='true';
                adminName[10].checked=resp.data[0].chang_indent==='true';
                adminName[11].checked=resp.data[0].delete_indent==='true';
                adminName[12].checked=resp.data[0].t_reimburse==='true';
            })
          },
        confirmFn(){
          let adminName=document.getElementsByTagName('input');
          let par=[];
          let adminList=document.getElementsByName('adminList');
          let index=adminList[0].selectedIndex;
          for(var i=0;i<adminName.length;i++){
              par.push(adminName[i].checked);
          }
          this.$axios.post("/api/permiss.do",{params:{par:par,amdId:(index+1)}})//修改，添加权限
            .then(resp=>{
              console.log(resp.data);
            });
        },
        cancelFn(){
          location.reload();
          console.log("取消");
        }
      },
      components:{
          pcs:pcs,
          pct:pct,
          pcf:pcf,
        mybtn:mybtn,
      },
      created(){
        this.$axios.get('/api/allAdmin.do')//设置前往获取数据的服务器地址
          .then(resp=>{
            this.adminData=resp.data;//服务器返回的数据存放位置
            let adminName=document.getElementsByTagName('input');
            for(var i=0;i<adminName.length;i++){
              adminName[i].checked=true;
            }
          });
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #header{
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #d3d3d3;
    text-align: left;
  }
  #header a:nth-of-type(1){
    margin-left: 20px;
  }
  #header a{
    font-size: 1em;
    text-decoration: none;
    color: #333;
  }
  .pcs{
    height: 80px;
  }
  .pct,.pcf{
    height: 80px;
    line-height: 80px;
  }
  .hrCss{
    border-top: 1px solid #797979;
    margin: 30px auto;
    width: 80%;
  }
  #adminPage{
    margin-top: 30px;
    display: inline-block;
    text-align: left;
    width: 80%;
  }
  #adminPage button{
    border: none;
    color: #0086b3;
    cursor: pointer;
  }
</style>
