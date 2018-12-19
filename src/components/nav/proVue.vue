<template>
<div id="app">
  <nav>
    <ul class="father_ul">
      <router-link to="/homePage/index" tag="li"><span @click="clickIndex">系统首页</span></router-link>
      <router-link to="#" tag="li"><span @click="clickEvent($event)">商品管理</span>
        <ul class="son_ul">
          <router-link to="#" tag="li">配置商品</router-link>
          <router-link to="#" tag="li">上线商品</router-link>
          <router-link to="#" tag="li">品类管理</router-link>
          <router-link to="#" tag="li">定制管理</router-link>
          <router-link to="#" tag="li">图片管理</router-link>
        </ul>
      </router-link>
      <router-link to="#" tag="li"><span @click="clickEvent($event)">权限管理</span>
          <ul class="son_ul">
          <router-link to="/homePage/permi" tag="li">分配权限</router-link>
          <router-link to="/homePage/permiList" tag="li">管理员列表</router-link>
          </ul>
      </router-link>
      <router-link to="#" tag="li"><span @click="clickEvent($event)">会员管理</span>
        <ul class="son_ul">
          <router-link to="#" tag="li">用户管理</router-link>
          <router-link to="#" tag="li">用户记录</router-link>
          <router-link to="#" tag="li">购物车管理</router-link>
          <router-link to="#" tag="li">收藏管理</router-link>
        </ul>
      </router-link>
      <router-link to="#" tag="li"><span @click="clickEvent($event)">交易管理</span>
        <ul class="son_ul">
          <router-link to="/homePage/orderTrade" tag="li">订单分布</router-link>
          <router-link to="#" tag="li">订单管理</router-link>
          <router-link to="/homePage/orderMoney" tag="li">交易金额</router-link>
          <router-link to="#" tag="li">退款处理</router-link>
        </ul>
      </router-link>
    </ul>
  </nav>
</div>
</template>

<script>
    export default {
        name: "pro-vue",
      data(){
          return {}
      },
      methods:{
          clickIndex(){
            let all=document.getElementsByClassName('father_ul')[0].children;
            for(var i=0;i<all.length;i++){
              all[i].style.height='45px';
            }
          },
        clickEvent(event){
          let num=event.target.parentNode.children[1].children.length;
          let doc=event.target.parentNode;
          let all=document.getElementsByClassName('father_ul')[0].children;
          if(doc.style.height=='45px'||doc.style.height==''){
            for(var i=0;i<all.length;i++){
              all[i].style.height='45px';
            }
            doc.style.height=(num+1)*45+'px';
          }else{
            doc.style.height='45px';
          }
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .father_ul li{
    overflow: hidden;
    width: 200px;
    height: 45px;
  }
  .father_ul li span{
    width: 200px;
    height: 45px;
    line-height: 45px;
    background-color: #33383E;
    display: inline-block;
    color: white;
    /*outline: 1px solid red;*/
    cursor: pointer;
  }
  .son_ul li{
    width: 200px;
    height: 45px;
    line-height: 45px;
    background-color: #262D35;
    color: white;
    /*outline: 1px solid #382aff;*/
    display: block;
    position: relative;
    margin: 0;
    cursor: pointer;
  }
  nav{
    width: 200px;
    height: 580px;
    background-color: #33383E;
    /*background-color: #ffd17f;*/
  }
ul li{
  list-style: none;
}
</style>
