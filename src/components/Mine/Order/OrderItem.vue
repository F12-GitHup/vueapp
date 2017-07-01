<template>
  <div class="order-item">
         <slot name="con">
          <!--订单body-->
          <div class="item-body" v-for="(data,index) in oData.childs" >
            <img src="" alt="" class="goods-img">
            <div class="item-body-r">
              <div class="goods-name">
                {{data.goods[0].goods_title}}
              </div>
              <div class="styles">
                <span class="style1">46</span>
                <span class="style2">黑色</span>
                <div class="goods-num">x1</div>
              </div>
            </div>
          </div>
          </slot>
  </div>
 
</template>

<script>
import OrderItem from './OrderItem'
import OrderHeader from './OrderHeader'
export default {
  name: 'order-item',
  data () {
    return {
      
    }
  },
  methods: {
    
  },
  props:{
    oData:Object
  },
   components:{
    "my-order-item":OrderItem,
    "my-order-header":OrderHeader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-body{
  padding:15px 0 15px 15px;
  border-top:1px solid #eee;
  border-bottom:1px solid #eee;
  overflow:hidden
}
.goods-img{
  width:90px;
  height:90px;
  float:left;
}
.item-body-r{
  width:100%;
  height:100%;
  text-align:left
}
.goods-name{
  padding:0 15px;
  height:30px;
  overflow:hidden;
  line-height:14px;
}
.styles{
  margin-top:15px;
  line-height:15px;
  color:#aaa
}
.style1{
  float:left;
  margin-left:15px;
}
.style2{
  float:left;
  margin-left:30px;
}
.goods-num{
  float:right;
  margin-right:15px;
}
</style>
