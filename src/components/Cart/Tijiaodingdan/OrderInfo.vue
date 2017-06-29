<template>
  <div class="orderInfo">

    <mt-cell title="优惠券：没有可以选择的优惠券" is-link>
      <span style="color: green"></span>
    </mt-cell>
    <mt-cell title="发票信息：" value="4554545"> <input class="fapiao" type="text" value="" v-if="value" />   <mt-switch v-model="value"></mt-switch></mt-cell>
    <mt-cell title="订单留言：" class="dingdanliuyan-tit">
      <input class="dingdanliuyan-inp" type="text" value="如针对订单特殊要求，请在此说明" /></mt-cell>
    <mt-cell title="邀请人：没有可选择的邀请人" is-link>
      <span style="color: green"></span>
    </mt-cell>
  </div>
</template>

<script>
export default {
  props:{
    orderData:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data () {
    return {
      value:false
    }
  }
}
</script>

<style scoped>
  .orderInfo{
  text-align: left;
  }
  .dingdanliuyan-tit{
    flex: 0;
  }
  .dingdanliuyan-inp{
    font-size: 14px;
    color: #666;
    outline: none;
    width:250px;
    height:16px;

    border:none;
  }
  .fapiao{
padding-right: 16%;
  }
</style>
