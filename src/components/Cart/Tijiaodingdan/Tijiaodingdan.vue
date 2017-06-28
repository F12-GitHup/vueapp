<template>
  <div class="cart">
    <my-header>
      <a class=" iconfont icon-fanhui" href="javascript:;" onClick="javascript :history.back(-1);" slot="left"></a>
      <a href="javascript:;" slot="tit">提交订单</a>
    </my-header>


   <my-content>

  {{ this.orderData}}

   </my-content>
  </div>
</template>

<script>

export default {
  name: 'tijiaodingdan',
  data () {
    return {
      orderData:[]
    }
  },
  //局部注册组件
  components:{


  },
  methods:{

  },
  mounted(){
    var cartParams = JSON.stringify({"opt":"6","cmd":"0","os":"wap","uid":"hs20162285188","uname":"17610859110","code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FD77A469454430C90E8BF2D55D897A597CE4FF1B68AD11EA3B311FD49BB74E668F2FC521413025F9ED5F450A6A64453AF5C92C4D1E72A86D23","imei":"dasd1223423we","time_stamp":1498565209199,"crc":"188693a3a4262b99499e6f12c7aaa9f8"})
    this.$http.post("/ordersubmitpageaapi_new.ashx",cartParams,{
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      }
    }).then(res=>{
      console.log(res)
      console.log(res.data.data.address_detail)
      this.orderData=res.data
    });
  },
  computed:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
