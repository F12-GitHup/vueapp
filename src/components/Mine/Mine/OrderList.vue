<template>
  <div class="order-list">
    <ul>
        
        <router-link to="/order">
          <li class="order-item toPay">
            <i class="iconfont icon-survey"></i><span>待付款</span>
          </li>
        </router-link>
        <router-link to="/order">
          <li class="order-item toSend">
            <i class="iconfont icon-share"></i><span>待发货</span>
          </li>
        </router-link>
        <router-link to="/order">
          <li class="order-item toGet">
            <i class="iconfont icon-auto"></i><span>待收货</span>
          </li>
        </router-link>
        <router-link to="/order">
          <li class="order-item toChange">
            <i class="iconfont icon-shuaxin"></i><span>退换货</span>
          </li>
        </router-link>
        <router-link to="/order">
          <li class="order-item toAll">
            <i class="iconfont icon-xin1"></i><span>全部订单</span>
          </li>
        </router-link>
        
    </ul>
  </div>
 
</template>

<script>
export default {
  name: 'order-list',
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order-list{
  margin:10px 0;
  font-size:12px;
  text-align:center;
  background:#fff;
  height:58px;
}
.order-list ul .order-item{
  float:left;
  width:20%;
  box-sizing:border-box;
}
.order-list ul .order-item i{
  display:block;
  margin:5px 0 ;
  font-size:24px;
}
.toAll{
  border-left:1px dashed #ccc;
}
</style>
