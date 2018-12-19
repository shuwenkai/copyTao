<template>
    <div id="app">
      <header>
        <div id="header">
          <router-link to="/">首页</router-link>
        </div>
      </header>
      <section>
        <div class="address">
          <span>欢迎登录，您本次登录地址为192.168.0.1</span><span class="closeAddress" @click="closeAddress($event)">x</span>
        </div>
        <!-- 统计用户与订单 -->
        <div class="userAndOrder">
          <router-link to="/" tag="div" class="user" style="cursor: pointer">
            <img src="../../assets/user.png" alt="">
            <div class="countUser">
              <h3>{{countUser}}<br/>用户</h3>
            </div>
          </router-link>
          <router-link to="/" tag="div" class="order"  style="cursor: pointer">
            <img src="../../assets/order.png" alt="">
            <div class="countOrder">
              <h3>{{countOrder}}<br/>成交</h3>
            </div>
          </router-link>
        </div>
        <div class="countTable">
          <table class="orderCount">
            <tr>
              <th style="width: 125px">订单统计信息</th>
              <th></th>
            </tr>
            <tr class="odd">
              <td>待处理</td>
              <td><router-link :to="{path:'/'}">{{pendingOrder}}</router-link>单</td>
            </tr>
            <tr class="even">
              <td>待发货</td>
              <td><router-link to="/">{{pendingOrder}}</router-link>单</td>
            </tr>
            <tr class="odd">
              <td>待结算</td>
              <td><router-link to="/">{{pendingOrder}}</router-link>单</td>
            </tr>
            <tr class="even">
              <td>已成交</td>
              <td><router-link to="/">{{pendingOrder}}</router-link>单</td>
            </tr>
            <tr class="odd">
              <td>交易失败</td>
              <td><router-link to="/">{{pendingOrd}}</router-link>单</td>
            </tr>
          </table>
          <table class="productCount">
            <tr>
              <th style="width: 125px">商品统计信息</th>
              <th></th>
            </tr>
            <tr class="odd">
              <td>商品总数</td>
              <td><router-link to="/">{{pendingOrder}}</router-link></td>
            </tr>
            <tr class="even">
              <td>回收站</td>
              <td><router-link to="/">{{pendingOrder}}</router-link></td>
            </tr>
            <tr class="odd">
              <td>已上架</td>
              <td><router-link to="/">{{pendingOrder}}</router-link></td>
            </tr>
            <tr class="even">
              <td>已下架</td>
              <td><router-link to="/">{{pendingOrder}}</router-link></td>
            </tr>
            <tr class="odd">
              <td>好评率</td>
              <td><router-link to="/">{{pendingOrder}}</router-link></td>
            </tr>
          </table><table class="userCount">
            <tr>
              <th style="width: 125px">会员统计信息</th>
              <th></th>
            </tr>
            <tr class="odd">
              <td>登陆次数</td>
              <td><router-link to="/">{{pendingOrder}}</router-link></td>
            </tr>
            <tr class="even">
              <td>注册会员</td>
              <td><router-link to="/">{{pendingOrder}}</router-link></td>
            </tr>
            <tr class="odd">
              <td>今日浏览</td>
              <td><router-link to="/">{{pendingOrder}}</router-link></td>
            </tr>
          </table>
        </div>
      </section>
      <footer>
        <p>© 国信安百杰157部1组版权所有 川ICP备 13023512号</p>
      </footer>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            countUser:35605,
            countOrder:28641,
            pendingOrder:12,
            pendingOrd:0,
            // myname:'123www'
          }
      },
      methods: {
        closeAddress(event) {
          // console.log(event.target.parentNode);
          event.target.parentNode.style.display = 'none';
        },
      },
      created(){
          // console.log(this.$route.query);
        this.$axios.get('/api/myData.do')//设置前往获取数据的服务器地址
          .then(resp=>{
            // console.log(resp);
            // console.log(this);
            this.pendingOrder=resp.data.length;//服务器返回的数据存放位置
            console.log(this.pendingOrder);
          });
        this.$axios.get('/api/nav.do')//设置前往获取数据的服务器地址
          .then(resp=>{
            // console.log(resp);
            // console.log(this);
            this.pendingOrd=resp.data.length;//服务器返回的数据存放位置
            console.log(this.pendingOrd);
          })
      }
    }
</script>

<style scoped>
#header{
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #d3d3d3;
  text-align: left;
}
#header a{
  margin-left: 20px;
  font-size: 1em;
  text-decoration: none;
  color: #333;
}
section{
  width: 100%;
  height: 520px;
  overflow: hidden;
}
footer p{
  font-size: 14px;
}
  .address{
    position: relative;
    top: 10px;
    left: 10%;
    width: 80%;
    height: 40px;
    line-height: 40px;
    background-color: #D7D7D7;
  }
  .closeAddress{
    display: inline-block;
    position: absolute;
    right:10px;
    top: -8px;
    cursor: pointer;
  }
  .userAndOrder {
    display: inline-block;
    width: 100%;
    position: relative;
    left: 80px;
    top: 45px;
  }
  .userAndOrder>div{
    width: 450px;
    height: 102px;
    background-color: #f2f2f2;
    float: left;
    text-align: left;
  }
  .order{
    margin-left: 120px;
  }
  .user,.order{
    position: relative;
  }
  .user>img,.order>img{
    float: left;
  }
  .countUser,.countOrder{
    text-align: center;
    padding-top:30px ;
    padding-left:10px ;
    margin: 0;
    width: 200px;
    float: left;
  }
  .countTable{
    width: 100%;
    position: relative;
  }
  .productCount{
    position: absolute;
    top: 80px;
    left: 460px;
    height: 180px;
  }
  .userCount{
    position: absolute;
    top: 80px;
    left: 820px;
    height: 120px;
  }
  .orderCount{
    position: absolute;
    top: 80px;
    left: 90px;
    height: 180px;
  }
  .orderCount,.userCount,.productCount{
    background-color:rgba(204, 204, 204, 1);
    text-align: left;
    width: 250px;
  }

.odd{
  background: #fff;
}
.even{
  background: #eee;
}
</style>
