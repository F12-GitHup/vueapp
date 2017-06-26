<template>
  <div class="mine">
    <my-header>
      <a class=" iconfont icon-fanhui" href="javascript:;" onClick="javascript :history.back(-1);" slot="left"></a>
      <a href="javascript:;"  slot="tit">我的奥莱购</a>
    </my-header>

    <my-footer></my-footer>
    <my-content>
        <div class="top">
          <div class="left-img">
            <img src="http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=92e00c9b8f5494ee8722081f15ce87c3/29381f30e924b899c83ff41c6d061d950a7bf697.jpg" alt="">
          </div>
          <div class="middle">
            <div class="user-name">
                4151511
            </div>
            <div class="to-address">
                收货地址&nbsp;>
            </div>
          </div>
          <div class="right-box">
            <div class="user-control">
              账户管理&nbsp;>
            </div>
          </div>
     </div>
    </my-content>

  </div>

</template>

<script>
export default {
  name: 'mine',
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
*{
  padding:0;margin:0;box-sizing:border-box
}
.header{
  height:50px;
  background:#fff;
  color:black;font-size:18px;
}
.top{
  height:120px;
  background:red;
  display:flex;
  color:#fff;
}
.left-img{
  height:66px;
  width:66px;
  border-radius:50%;
  float:left;
  margin:27px 0 0 20px;
  background:#fff;
  overflow:hidden
}
.left-img img{
  width:100%;height:100%;display:block;border-width:0;
}
.middle{
  flex:1;
  text-align:left;
  padding:30px 20px 30px;
  font-size:14px;
}
.to-address{
  margin-top:25px;
}
.right-box{
  height:100%;
}
.user-control{
  font-size:14px;
  margin-top:50px;
  padding:0 20px 0 5px;
  border-radius:9px 0 0 9px;
  border:1px solid #fff
}

</style>
