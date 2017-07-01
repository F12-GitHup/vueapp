<template>
  <div class="cart">
    <my-header>
      <a href="javascript:;" slot="tit">购物车</a>
    </my-header>

    <my-footer :selected="selected"></my-footer>

   <my-content>

     <my-no-cart v-if="loginFlag&&!noCartNum" ></my-no-cart>

     <my-no-login-cart v-if="!loginFlag"></my-no-login-cart>

       <my-cart-list :cart-data="cartData"
                     v-if="loginFlag&&noCartNum"
       ></my-cart-list>
   </my-content>
  </div>
</template>

<script>

import CartList from "./CartList"
import NoLoginCart from "./NoLoginCart"
import NoCart from "./NoCart"

export default {
  name: 'cart',
  data () {
    return {
      cartData:[],
      loginFlag:false,
      noCartNum:false,
      selected:"购物车",
    }
  },
  //局部注册组件
  components:{
    "my-cart-list":CartList,
    "my-no-login-cart":NoLoginCart,
    "my-no-cart":NoCart
  },
  methods:{

  },
  mounted(){
    if(window.localStorage.username){
      if(this.cartData==""){
        this.noCartNum=true
        console.log(this.cartData.length)
        console.log(this.noCartNum)
      }else{
        this.noCartNum=false
        console.log(this.noCartNum)
      }
      this.loginFlag=true

      console.log(window.localStorage.username)
      console.log(this.cartData.length)
      console.log(this.noCartNum)
    }
    var cartParams = JSON.stringify({"opt":"5","cmd":"3","is_login":"1","is_change_checked":"1","v":"1","os":"wap","uid":localStorage.uid,"uname":localStorage.username,"code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FD0C361839089615CA4E4287DEF36349762F2D689059976B735D1ED7F9818C9AF86F01D0B4D8389820DF02ADF82172E09C71F398409C0D87BB","imei":"dasd1223423we","time_stamp":1498531414224,"crc":"b8b7448101db749ae76508ab9d851d34"})
    this.$http.post("/mobilecart.ashx",cartParams,{
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      }
    }).then(res=>{
      this.cartData=res.data.data.list[0].goods[0].goods_list
      console.log(this.cartData)
    });
  },
  computed:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cart{
    height:100%;
    width:100%;
    background-color: #f0f0f0;
  }
.sub-header{height:40px;background:#ccc;line-height:40px;}
.sub-header p{float:left;margin-left:20px;}
.sub-header p span{color:#f10;}
</style>
