<template>
  <div class="cart">
    <my-header>
      <a href="" slot="tit">购物车</a>
      <a href="" slot="right">编辑</a>
    </my-header>

    <my-footer></my-footer>

   <my-content>


     <my-no-login-cart></my-no-login-cart>


        <!--<div class="sub-header">-->
          <!--<p>总数量：<span>{{total.totalNum}}</span></p>-->
          <!--<p>需要支付：<span>{{total.totalPrice}}</span>元</p>-->
        <!--</div>-->
       <!--<my-cart-list :cart-data="cartData" @change-num = "changeNum" ref="cart-list" ></my-cart-list>-->
   </my-content>
  </div>
</template>

<script>

import CartList from "./CartList"
import NoLoginCart from "./NoLoginCart"

export default {
  name: 'cart',
  data () {
    return {
      cartData:[]
    }
  },
  //局部注册组件
  components:{
    "my-cart-list":CartList,
    "my-no-login-cart":NoLoginCart
  },
  methods:{
    changeNum(type,index){
      var num = this.cartData[index].number*1;
      var id = this.cartData[index].goodsID;
      if(type){
        //向服务器发送请求
        this.$http.get(`http://datainfo.duapp.com/shopdata/updatecar.php?userID=lishuai&goodsID=${id}&number=${num}`).then(res=>{
          //请求成功再改页面的内容
          this.cartData[index].number=num+type;
        })
      }else{
         this.$http.get(`http://datainfo.duapp.com/shopdata/updatecar.php?userID=lxr&goodsID=${id}&number=1`).then(res=>{
           //删除，li 加class  itemRemove
           //this.$refs
            var el =this.$refs["cart-list"].$refs["item"+index][0];
            el.className = "cart-item itemRemove";
            el.addEventListener("animationend",()=>{
              //动画结束以后删除
              this.cartData.splice(index,1,{})
            })
         })

      }

    }
  },
  mounted(){
     this.$http.jsonp("http://datainfo.duapp.com/shopdata/getCar.php?userID=lxr").then(res=>{
            console.log(res.data)
            this.cartData=res.data;
    })
  },
  computed:{
        total:function(){
            var totalPrice = 0;
            var totalNum =0;
            this.cartData.forEach(function(ele) {
                //判断
               if(ele.number){
                  totalNum +=ele.number*1;
                  totalPrice+=ele.number*ele.price*1;
                  totalPrice=parseInt(totalPrice*100)/100;


               }

            });
            return{
                totalNum,
                totalPrice
            }
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cart{
    height:100%;
    width:100%;
  }
.sub-header{height:40px;background:#ccc;line-height:40px;}
.sub-header p{float:left;margin-left:20px;}
.sub-header p span{color:#f10;}
</style>
