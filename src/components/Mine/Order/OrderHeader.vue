<template>
  <div class="order-header">
         <!--订单头-->
          <div class="item-header" >
            <div class="order-num">订单编号：<span class="num">{{oData.order_id}}</span>
            </div>
            <span class="order-h-right" v-if="oData.real_child_num==1?false:true">已拆分订单</span>
            <span class="order-h-right" v-if="oData.real_child_num==1?true:false">已关闭</span>
          </div>
          
  </div>
 
</template>

<script>
export default {
  name: 'order-header',
  data () {
    return {
      
    }
  },
  methods: {
    
  },
  props:{
    oData:Object
  },
  mounted(){
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  background:#fff;
  margin:10px 0;
  font-size:12px;
}
.item-header{
  height:50px;
  width:100%;
  box-sizing:border-box;
  line-height:50px;
  padding:0 20px;
  border-bottom:1px solid #eee;
}
.order-num{
  float:left;
}
.order-h-right{
  float:right;
  color:#aaa
}
.item-body{
  
}
</style>
