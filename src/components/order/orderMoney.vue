<template>
<div id="app">
  <header>
    <div id="header">
      <router-link to="/index">  首页</router-link>><router-link to="#">订单管理</router-link>
    </div>
  </header>
  <section>
    <div class="orderBtn">
      <div>
        <p>截至{{nowDate}}成交总额</p>
        <h1>￥{{allMoney}}</h1>
      </div>
      <div>
        <p>本月成交额</p>
        <h1>￥{{mouthMoney}}</h1>
      </div>
      <el-button type="primary" class="myBtn" @click="openPic">图表观看</el-button>
    </div>
    <div class="orderBtn">
      <el-button type="primary" plain class="myBtn orderBtnChild1" @click="allOrder">全部订单</el-button>
      <el-button type="primary" plain class="myBtn orderBtnChild2" @click="nowMouth">本月订单</el-button>
    </div>
    <el-table :data="tableData">
      <el-table-column prop="o_id" label="序号" width="180">
      </el-table-column>
      <el-table-column prop="o_num"
        label="订单编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="o_date2"
        label="成交日期">
      </el-table-column>
      <el-table-column
        prop="tao_price"
        label="交易金额">
      </el-table-column>
      <el-table-column
        prop="o_state"
        label="状态">
      </el-table-column>
    </el-table>

    <!-- 弹出显示图表 -->
    <el-dialog
      title="图表显示"
      :visible.sync="centerDialogVisible"
      width="600px"
      center>
      <!-- 统计图表 -->
      <div class="charts">
        <div id="myChart" :style="{width:'500px',height:'300px'}">
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="centerDialogVisible = false" style="width: 100px;height: 30px">确 定</el-button>
  </span>
    </el-dialog>

  </section>
</div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: "order-money",
      data() {
        let date=new Date();
        return {
          centerDialogVisible: false,
          mouthMoney:258000,
          allMoney:20000,
          nowDate:date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate(),
          tableData: []
          }
        },
      methods:{
        openPic(){
          this.centerDialogVisible=true;
          /*ECharts图表*/
          setTimeout(function () {
            // let mychar=document.getElementById('myChart');
            // console.log(mychar);
            var myChart = echarts.init(document.getElementById('myChart'));
            myChart.setOption({
              title: {
                text: '动态数据',
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#283b56'
                  }
                }
              },
              xAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
              },
              yAxis: {
                type: 'value'
              },
              series: [
                {
                  data: [14, 35, 40, 23, 55, 16, 100,40,30,50,60,70,],
                  type: 'bar'
                },
                {
                  type:'line',
                  data:[14, 35, 40, 23, 55, 16, 100,40,30,50,60,70,]
                }]
            })
          },200);
        },
        nowMouth(){
          var t_date=new Date();
          let date=t_date.getFullYear()+'-'+(t_date.getMonth()+1)+'-'+t_date.getDate();
          this.$axios.post('/api/nowMouth.do',{date:date})
            .then(resp=>{
              this.tableData=resp.data;
              for(var i=0;i<this.tableData.length;i++){
                this.tableData[i].o_date2=(new Date(this.tableData[i].o_date2)).toLocaleDateString();
                // console.log(resp.data);
              }
            })
        },
        allOrder(){
          this.$axios.post('/api/allOrder.do')
            .then(resp=>{
              this.tableData=resp.data;
              for(var i=0;i<this.tableData.length;i++){
                this.tableData[i].o_date2=(new Date(this.tableData[i].o_date2)).toLocaleDateString();
              }
              // console.log(this.tableData);
            });
        }
      },
      components:{
        echarts:echarts
      },
      created(){
          this.allOrder();
          this.$axios.post('/api/allMoney.do')//总成交额
            .then(resp=>{
              this.allMoney=resp.data[0].money;
            });
          this.$axios.post('/api/mouthMoney.do',{date:this.nowDate})//本月成交额
            .then(resp=>{
              this.mouthMoney=resp.data[0].money;
            })
      }
    }
</script>
<style>
  .el-table th {
    text-align: center;
  }
</style>
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
  .myBtn{
    width: 100px;
    height: 40px;
    margin-left: 20px;
    margin-top: 5px;
    float: left;
  }
  .orderBtn{
    margin-top: 10px;
    width: 80%;
    height: 50px;
    margin-left: 20px;
    position: relative;
  }
  .orderBtn div{
    float: left;
    margin-top: 4px;
    margin-left: 10px;
  }
  .orderBtnChild1{
    position: absolute;
    left: 0;
  }
  .orderBtnChild2{
    position: absolute;
    left: 120px;
  }
</style>
