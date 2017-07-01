<template>
  <div class="noLoginCart">
    <div class="topMsg">
      <div class=" topMsgC ">登陆后您才可以进行更多操作，并同步电脑与手机购物车的商品哦～</div>
      <div class=" topMsgB"><a class="goLoginbtn" href="#/login">去登录</a></div>
    </div>

    <div class="mt20">
      <img src="../../../img/cartNone_02.png" width="100%">
    </div>
    <div class="toHome">
      <a class="goHomebtn" href="#/">去首页逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-no-login-cart',

  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .noLoginCart{
    background-color: #f0f0f0;
    height:100%;
    width:100%;
  }
  .topMsg {
    background-color: #fafafa;
    overflow: hidden;
    padding-top: 10px;
  }
  .topMsgC {
    width: 70%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 12px;
    float: left;
    color: #666;
    text-align: left;
  }
  .topMsgB {
    width: 30%;
    text-align: center;
    float: right;
  }
  .topMsgB a.goLoginbtn {
    display: inline-block;
    margin-top: 10px;
    border: solid 1px #666;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 14px;
    color: #666;
  }

  .toHome {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
  .toHome a.goHomebtn {
    width: 60%;
    text-align: center;
    padding: 10px 40px;
    border: solid 1px #d61518;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 600;
    background-color: #d61518;
    color: #fff;
  }
</style>
