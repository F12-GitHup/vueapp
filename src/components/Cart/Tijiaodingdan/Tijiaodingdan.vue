<template>
  <div class="tijiaodingdan">
    <my-header>
      <a class=" iconfont icon-fanhui" href="javascript:;" onClick="javascript :history.back(-1);" slot="left"></a>
      <a href="javascript:;" slot="tit">提交订单</a>
    </my-header>


   <my-content>
     <my-order-address
       :order-data="orderData"
     ></my-order-address>
     <my-goods-info
       :order-data="orderData"
     ></my-goods-info>
     <my-order-info
       :order-data="orderData"
     ></my-order-info>


     <div class="content-jiesuan">
       <div class="orderMoneys">
         <span>结算金额：</span>
         <span class="colorRed1">¥{{orderData.total_money}}</span>
         <span>+ 运费：</span>
         <span class="colorRed1">¥0.00</span>
         <span>+ 优惠：</span>
         <span class="colorRed1">¥{{orderData.pref_money}}</span>
       </div>
     </div>


    <div class="floot">
      <div class=" submitTotle">合计：
        <span class="colorRed1">¥</span>
        <span class="totleNum">{{orderData.groups[0].last_money}}</span>

      </div>
      <div class="submitBtn" @click="submitOrder">提交订单</div>
    </div>

   </my-content>
  </div>
</template>

<script>
  import OrderAddress from "./OrderAddress"
  import GoodsInfo from "./GoodsInfo"
  import OrderInfo from "./OrderInfo"
export default {
  name: 'tijiaodingdan',
  data () {
    return {
      value:true,
      orderData:[]
    }
  },
  //局部注册组件
  components:{
    "my-order-address":OrderAddress,
    "my-goods-info":GoodsInfo,
    "my-order-info":OrderInfo

  },
  methods:{

    submitOrder(){
      window.location.href="#/tijiaodingdan"
    }
  },
  mounted(){
    var cartParams = JSON.stringify({"opt":"6","cmd":"0","os":"wap","uid":"hs20162285188","uname":"17610859110","code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FDC05F1B05C6E468EB64DDEA0B3CE2DCA4BA0FF7C2BD753F6C0C34C327B18A577A3C8B63142A93F34C9CDBD36DC92B1A8C0AE5B7D0D8B98052","imei":"dasd1223423we","time_stamp":1498654267666,"crc":"7ff16ce7c37b19cd77b48d0ac2c2ea2d"})
    this.$http.post("/ordersubmitpageaapi_new.ashx",cartParams,{
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      }
    }).then(res=>{
//      console.log(res.data.data.goods_groups)
//      console.log(res)
      this.orderData=res.data.data
      console.log(this.orderData.goods_groups)
    });
  },
  computed:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tijiaodingdan .content{
    padding-bottom: 60px;
  }
  .content-jiesuan{
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    box-sizing: border-box;
    padding: 15px;
  }
  .orderMoneys{
    font-size: 10px;
    float: right;
  }
  .colorRed1 {
    color: #d61518;
  }
  .floot {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f0f0f0;
    height: 60px;
    z-index: 50;
  }
  .submitTotle {
    padding-left: 10px;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    float: left;
    color: #797979;
  }
  .submitBtn {
    padding-left: 40px;
    padding-right: 40px;
    height: 60px;
    line-height: 60px;
    background-color: #d61518;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    float: right;
  }
  .totleNum {
    font-size: 26px;
    color: #d61518;
  }
</style>
