<template>
  <div class="order-header">
         <!--订单头-->
          <div class="item-header" v-for="(data,index) in oData.childs">
            <div class="order-num">订单编号：<span class="num">{{data.suborder_id}}</span>
            </div>
            <span class="order-h-right">已关闭</span>
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
}
.order-num{
  float:left;
}
.order-h-right{
  float:right;
  color:red
}
</style>
