<template>
  <div>
    <header>
      <div id="header">
        <router-link to="/index">  首页</router-link>><router-link to="/">权限管理</router-link>
      </div>
    </header>
    <section>
      <div class="searchSec">
        <label for="searchInput">搜索管理员:</label>
        <input type="text" id="searchInput"  @keyup="keyupEvent($event)">
      </div>
      <hr class="hrCss">
      <div class="addAdmin">
        <addBtn myadd="添加管理员" mydel="批量删除" class="addbtn" @unadd="deleAll" @add="dialogFormVisible = true"></addBtn>
      </div>
      <!-- 添加管理员模态框 -->
      <el-dialog title="添加管理员" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="登录名" :label-width="formLabelWidth"  class="myHeight">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth" class="myHeight">
            <el-input v-model="form.phone" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth" class="myHeight">
            <el-input v-model="form.email" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="级别" :label-width="formLabelWidth" class="myHeight">
            <el-select v-model="form.rank" placeholder="请选择管理员等级" class="myWidth">
              <el-option label="普通管理员" value="普通管理员"></el-option>
              <el-option label="商品编辑管理员" value="商品编辑管理员"></el-option>
              <el-option label="客服管理员" value="客服管理员"></el-option>
              <el-option label="超级管理员" value="超级管理员"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态" :label-width="formLabelWidth" class="myHeight">
            <el-select v-model="form.state" placeholder="请选择账号状态" class="myWidth">
              <el-option label="已启用" value="已启用"></el-option>
              <el-option label="未启用" value="未启用"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false" class="mybutton">取 消</el-button>
          <el-button type="primary" @click="addAdmin" class="mybutton">确 定</el-button>
        </div>
      </el-dialog>

      <div class="leftNav">
        <ul>
          <li>管理员分类</li>
          <li @click="classAdmin($event)">超级管理员</li>
          <li @click="classAdmin($event)">普通管理员</li>
          <li @click="classAdmin($event)">商品编辑管理员</li>
          <li @click="classAdmin($event)">客服管理员</li>
        </ul>
        <table>
          <tr class="tableHeader">
            <th style="width: 2em"><input type="checkbox" @change="checkAll" id="allCheck"></th>
            <th style="width: 3em">编号</th>
            <th style="width: 4em">登录名</th>
            <th style="width: 8em">密码</th>
            <th style="width: 10em">邮箱</th>
            <th style="width: 7.5em">级别</th>
            <th>创建时间</th>
            <th style="width: 4em">状态</th>
            <th>操作</th>
          </tr>
          <tr v-for="item in adminData" class="odev">
            <td><input type="checkbox"></td>
            <td>{{item.amd_Id}}</td>
            <td>{{item.t_name}}</td>
            <td>{{item.t_phone}}</td>
            <td>{{item.t_email}}</td>
            <td>{{item.t_rank}}</td>
            <td>{{item.t_date}}</td>
            <td>{{item.t_state}}</td>
            <td>
              <el-button type="danger" plain @click="statuCheck($event)">禁用/启用</el-button>
            </td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
  import addBtn from '../add'
  import checkBtn from '../check'
    export default {
        name: "permiss-list",
      data(){
          return {
            adminData:'adminData',
            dialogFormVisible: false,
            form: {
              name: '',
              phone: '',
              email: '',
              rank: '',
              state: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            formLabelWidth: '80px'
          }
      },
      components:{
         addBtn:addBtn,
        checkBtn:checkBtn,
      },
      methods:{
          addAdmin(){
            console.log(this.form.state);
            let t_name=this.form.name;
            let t_phone=this.form.phone;
            let t_email=this.form.email;
            let t_state;
            if(this.form.state==''){
              t_state='未启用';
            }else{
              t_state=this.form.state;
            }
            let t_rank;
            if(this.form.state==''){
              t_rank='普通管理员';
            }else{
              t_rank=this.form.rank;
            }
            var t_date=new Date();
            let date=t_date.getFullYear()+'-'+(t_date.getMonth()+1)+'-'+t_date.getDate();
            this.$axios.post('api/addAdmin.do',{name:t_name,phone:t_phone,email:t_email,rank:t_rank,state:t_state,date:date})
              .then(resp=>{//添加管理员
                location.reload()
              });
            this.dialogFormVisible = false;
          },
        keyupEvent(event){//回车搜索管理员
          if(event.keyCode==13){
            let searchValue=document.getElementById("searchInput").value;
            this.$axios.post('/api/searchAdmin.do',{params:searchValue})//搜索admin请求
              .then(resp=>{
                this.adminData=resp.data;
                for(var i=0;i<this.adminData.length;i++){
                  this.adminData[i]["t_date"]=(new Date(this.adminData[i]["t_date"])).toLocaleDateString();
                }
              })
          }
        },
        classAdmin(even){//按分类查看管理员列表
          let par=even.target.innerText;
          this.$axios.post('/api/searchAdmin.do',{params:par})
            .then(resp=>{
              this.adminData=resp.data;
              for(var i=0;i<this.adminData.length;i++){
                this.adminData[i]["t_date"]=(new Date(this.adminData[i]["t_date"])).toLocaleDateString();
              }
            })
        },
        checkAll(){//复选框全选按钮
          let check=document.getElementsByTagName('input');
          let allCheck=document.getElementById('allCheck');
          for(var i=0;i<check.length;i++) {
            if(check[i].type == 'checkbox'&&allCheck.checked==true){
              check[i].checked=true;
            }else{
              check[i].checked=false
            }
          }
        },
        deleAll(){//批量删除
          this.adminData=null;
        },
        statuCheck(event){//停用、启用管理员
          let stateText=event.path[3].children[7].innerText;
          let stateNum=event.path[3].children[1].innerText;
          this.$axios.post('/api/state.do',{params:{stateText:stateText,stateNum:stateNum}})
            .then(resp=>{
              event.target.parentNode.parentNode.parentNode.children[7].innerText=resp.data;
            })
        },
      },
      created(){//获取当前管理员列表刷新
        this.$axios.get('/api/allAdmin.do')//设置前往获取数据的服务器地址
          .then(resp=>{
            let cc=document.getElementsByClassName('odev');
            // console.log(cc);
            for(var i=cc.length-1;i>0;i--){
              if(i%2==0){
                cc[i].className='odd';
              }else{
                cc[i].className='even';
              }
            }
            this.adminData=resp.data;//服务器返回的数据存放位置
            for(var i=0;i<this.adminData.length;i++){
              this.adminData[i]["t_date"]=(new Date(this.adminData[i]["t_date"])).toLocaleDateString();
            }
            // console.log(typeof this.adminData[0].t_date);
          });
      }
    }
</script>

<style scoped>
  .myWidth{
    width: 550px;
  }
  .myHeight{
    margin-top: 10px;
  }
  .mybutton{
    width: 100px;
    height: 30px;
  }
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
  .searchSec{
    height: 40px;
    line-height: 80px;
    text-align: left;
  }
  .searchSec label{
    margin-left: 20px;
  }
  .hrCss{
    border-top: 1px solid #797979;
    margin: 30px 20px;
    width: 80%;
  }
  .addAdmin{
    height: 40px;
    border: 1px solid rgba(228,228,228,1);
    line-height:40px;
    width: 98%;
    margin-left: 20px;
    position: relative;
  }
  .addbtn{
    position: absolute;
    left: 10px;
  }
  .leftNav{
    margin-top: 30px;
    margin-left: 20px;
    position: relative;
  }
  .leftNav ul li{
    list-style: none;
    cursor: pointer;
    width: 120px;
    height: 30px;
    background-color: #F2F2F2;
  }
  .leftNav ul li:nth-of-type(1){
    cursor: none;
    background-color: #66CCFF;
  }
  .leftNav table{
    position: absolute;
    left: 150px;
    top: 10px;
  }
  /*.tableHeader{*/
    /*background-color: #e4e4e4;*/
  /*}*/
  .tableHeader th{
    border: none;
    background-color: #e4e4e4;
    width: 100px;
  }
  td{
    height: 40px;
  }
  .odd{
    background: #fff;
  }
  .even{
    background: #eee;
  }
</style>
