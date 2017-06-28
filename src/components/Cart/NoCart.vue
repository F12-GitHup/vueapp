<template>
  <div class="noCart">

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
  name: 'my-no-cart',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .noCart{
    background-color: #f0f0f0;
    height:100%;
    width:100%;
  }
  .mt20{
    padding-top: 10px;
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
