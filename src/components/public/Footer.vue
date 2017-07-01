<template>
  <div class="footer">

    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item id="首页" href="#/">
       <i class="iconfont icon-zhuye1"></i><span>首页</span>
      </mt-tab-item>
      <mt-tab-item id="欧瑟奢品" href="#/ouseshepin">
      <i class="iconfont icon-unie632"></i><span>欧瑟奢品</span>
      </mt-tab-item>
      <mt-tab-item id="人气优品" href="#/renqiyoupin">
      <i class="iconfont icon-huo1"></i><span>人气优品</span>
      </mt-tab-item>
      <mt-tab-item id="购物车" href="#/cart" class="cartNumBox">
       <i class="iconfont icon-gouwuche"><em >{{cartNum.all_sku_count||0}}</em></i><span>购物车 </span>
      </mt-tab-item>
      <mt-tab-item id="我的" href="#/mine">
       <i class="iconfont icon-geren-copy"></i><span>我的</span>
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: 'my-footer',
  data () {
    return {
      cartNum:0
    }
  },
  methods:{
    fnAction(){
      this.sheetVisible=true;
    }
  },
  props:{
    footerData:{
      type:Array,
    },
    selected:String
  },
  mounted(){
    if(!localStorage.username){
      return
    }else{
    var cartParams = JSON.stringify({"opt":"5","cmd":"3","os":"wap","uid":localStorage.uid,"uname":localStorage.username,"code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FD0C361839089615CA4E4287DEF36349762F2D689059976B735D1ED7F9818C9AF86F01D0B4D8389820DF02ADF82172E09C71F398409C0D87BB","imei":"dasd1223423we","time_stamp":1498531414224,"crc":"b8b7448101db749ae76508ab9d851d34"})
    this.$http.post("/mobilecart.ashx",cartParams,{
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      }
    }).then(res=>{
      console.log(res)
      console.log(res.data.data)
      this.cartNum=res.data.data
    });
    }
  },
  computed:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{margin:0;padding:0}
li{list-style:none;}
.mint-tabbar > .mint-tab-item.is-selected  {
  background-color: #fff;
  color: #d61518;
}
.mint-tabbar > .mint-tab-item.is-selected i{
  padding-top:9px;
}
span{
  display: block;
  padding-top:4px;
  padding-bottom:10px;

}
i{
  font-size: 24px;
  padding-top:10px;
  display: block;
  position: relative;

}
.mint-tabbar{
  background-color: #fff;
  box-sizing: border-box;
}

em{
  height:12px;
  width:20px;
  border-radius: 3px;
  color: #fff;
  background: red;
  position: absolute;
  top:8px;
  right:15px;

  font-size: 12px;
  font-style: normal;
}
</style>
