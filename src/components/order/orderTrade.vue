<template>
  <div>
    <div id="header">
      <router-link to="/index">  首页</router-link>><router-link to="#">订单管理</router-link>
    </div>
    <div class="echarts">
      <div :style="{height:'600px',width:'100%'}" ref="myEchart"></div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import '../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
    export default {
        name: "order-trade",
      props: ["userJson"],
      data() {
        return {
          chart: null
        };
      },
      mounted() {
        this.chinaConfigure();
      },
      beforeDestroy() {
        if (!this.chart) {
          return;
        }
        this.chart.dispose();
        this.chart = null;
      },
      methods: {
        chinaConfigure() {
          console.log(this.userJson);
          let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
          window.onresize = myChart.resize;
          myChart.setOption({ // 进行相关配置
            backgroundColor: "#fff",//画布背景色
            tooltip: {}, // 鼠标移到图里面的浮动提示框
            dataRange: {
              show: false,
              min: 0,
              max: 1000,
              text: ['High', 'Low'],
              realtime: true,
              calculable: true,
              color: ['orangered', 'yellow', 'lightskyblue']
            },
            geo: { // 这个是重点配置区
              map: 'china', // 表示中国地图
              roam: true,
              label: {
                normal: {
                  show: true, // 是否显示对应地名
                  textStyle: {
                    color: 'rgba(0,0,0,0.4)'
                  }
                }
              },
              itemStyle: {
                normal: {
                  borderColor: 'rgba(0, 0, 0, 0.2)'
                },
                emphasis: {
                  areaColor: null,
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowBlur: 20,
                  borderWidth: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            },
            series: [{
              type: 'scatter',
              coordinateSystem: 'geo' // 对应上方配置
            },
              {
                name: '订单数量', // 浮动框的标题
                type: 'map',
                geoIndex: 0,
                data: [{
                  "name": "北京",
                  "value": 9
                }, {
                  "name": "上海",
                  "value": 142
                },{
                  "name": "天津",
                  "value": 272
                },{
                  "name": "福建",
                  "value": 102
                }, {
                  "name": "黑龙江",
                  "value": 44
                }, {
                  "name": "深圳",
                  "value": 92
                }, {
                  "name": "湖北",
                  "value": 810
                }, {
                  "name": "四川",
                  "value": 453
                }]
              }
            ]
          })
        }
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
</style>
