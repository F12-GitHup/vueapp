<template>
  <div class="order">
    <my-header>
      <a href="#/" slot="left" class="iconfont icon-fanhui"></a> 
      <a slot="tit">我的订单</a>
    </my-header>

    <my-content>
      <mt-navbar v-model="selected" class="top-nav">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">待付款</mt-tab-item>
        <mt-tab-item id="3">待发货</mt-tab-item>
        <mt-tab-item id="4">待收货</mt-tab-item>
        <mt-tab-item id="5">已完成</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="box">
            <div class="item" v-for="(data,index) in orderData">
            
              <!--订单头-->
              <my-order-header :o-data="data"></my-order-header>
              <!--订单body-->
              
                                        <!---->
                  <div class="in-body">
                    <my-order-item1 :o-data="data"></my-order-item1>
                  </div>
              
              <!--订单底部-->
              <div class="item-foot">
                <span class="this-total-num">
                   共<span class="aa">{{data.sum_num}}</span>件商品
                </span>
                <span class="this-total-price">
                    实付：<span class="pp">￥{{data.sum_paymoney}}</span>
                </span>
              </div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
         <img src="http://m.aolaigo.com/app/image/order_list_empty.png" alt="" class="img-none">
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <img src="http://m.aolaigo.com/app/image/order_list_empty.png" alt="" class="img-none">
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <img src="http://m.aolaigo.com/app/image/order_list_empty.png" alt="" class="img-none">
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <img src="http://m.aolaigo.com/app/image/order_list_empty.png" alt="" class="img-none">
        </mt-tab-container-item>
      </mt-tab-container>
    </my-content>
    
  </div>
 
</template>

<script>
import OrderItem from './OrderItem'
import OrderItem1 from './OrderItem1'
import OrderHeader from './OrderHeader'
import OrderHeader1 from './OrderHeader1'
export default {
  name: 'order',
  data () {
    return {
      selected:'1',
      orderData:[],
    }
  },
  methods: {
    
  },
  mounted(){
    var params = JSON.stringify({"opt":6,"cmd":"2","pageindex":1,"pagesize":999,"os":"wap","uid":"hs20162285188","uname":"17610859110","code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FD8DD5F92864DC4EF8D55733E67CFBC69A66FA517F3BD79051389FDB4B052A59331924EC29390DC4CF3EE81CACF4E207B3910390CE0BC55555","imei":"dasd1223423we","time_stamp":1498814469999,"crc":"e7cb622e3d5e9ba7b0f8bb942d021d8e"})

 
    this.$http.post('/order',params,{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res=>{
        console.log(res.data.data)
        this.orderData = res.data.data
        // this.orderChild = res.data.data.childs
        // this.orderChildChild = res.data.data.childs&&res.data.data.childs.goods

        console.log(this.orderData)
        // console.log(this.orderChild)
        // console.log(this.orderChildChild)
      })
  },
  components:{
    "my-order-item":OrderItem,
    "my-order-item1":OrderItem1,
    "my-order-header":OrderHeader,
    "my-order-header1":OrderHeader1
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order{
  background:#eee;
}
.header{
  height:50px;
  background:#fff;
  color:black;
  }
.top-nav{
  border-bottom:1px solid #eee;
  border-top:1px solid #eee
}
.item{
  background:#fff;
  margin:10px 0;
  font-size:12px;
}
.item-foot{
  height:50px;
  line-height:50px;
}
.this-total-num{
  margin-left:130px;;
  width:100px;
  text-align:center;
}
.this-total-price{
  float:right;
  margin-right:15px;
}
.this-total-price .pp{
  color:red;
  font-weight:900
}
.in-body{
  box-sizing:border-box;
  padding-left:15px;
}

.img-none{
  width:100%;
  height:100%;
}
</style>
