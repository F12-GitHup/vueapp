<template>
  <div class="orderAddress">
    <div class="content-block ">
      <div class="order-address">
      <div class=" textContent ">
        <span class="jia">+</span>
        <span class="verticalM">请填写收货信息</span>
      </div>
      <p class="zitiInfo ">有商品支持自提服务</p>
    </div><div class="ziti-address "></div></div>
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
    }
  },
}
</script>

<style scoped>
.content-block {
    width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 15px;
  color: #666;
  }
.order-address{
  border: solid 1px #d61518;
  border-radius: 5px;
  font-size: 14px;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
}
.textContent{
  position: static;
  top: 5px;
  right: 5px;
  color: #d61518;
  padding: 20px;
  text-align: center;
}
  .jia{
    vertical-align: middle;
    font-size: 30px;
    color: #d61518;
  }
.verticalM {
  vertical-align: middle;
  font-size: 16px;
  color: #d61518;
}
  .zitiInfo{
    color: #d61518;
    text-align: center;
  }
.ziti-address {
  display: none;
  border: solid 1px #d61518;
  border-radius: 5px;
  font-size: 14px;
  position: relative;
  box-sizing: border-box;

  padding: 10px;
}

</style>
