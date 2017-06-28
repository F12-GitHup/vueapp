<template>
  <div class="manage">
    <mt-header fixed title="账户管理" class="header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <my-content>
      <div class="top">
        <span>我的头像</span>
        <div class="img-box">
        <img :src="'http://img4.aolaigo.com/group1/'+src" alt="">
        </div>
      </div>
      <div class="list">
        <ul>
          <li class="item">
            <span>昵称</span>
            <div>{{username}}</div>
            <i class="iconfont icon-icon10"></i>
          </li>
          <li class="item">
            <span>收货地址管理</span>
            <div></div>
            <i class="iconfont icon-icon10"></i>
          </li>
          <li class="item">
            <span>绑定手机</span>
            <div>{{username}}</div>
          </li>
          <li class="item">
            <span>绑定邮箱</span>
            <div></div>
            <i class="iconfont icon-icon10"></i>
          </li>
          <li class="item">
            <span>身份证验证</span>
            <div></div>
            <i class="iconfont icon-icon10"></i>
          </li>
          <li class="item">
            <span>修改登录密码</span>
            <div></div>
            <i class="iconfont icon-icon10"></i>
          </li>
        </ul>
      </div>
    </my-content>
  </div>
 
</template>

<script>
export default {
  name: 'manage',
  data () {
    return {
      src:'',
      username:''
    }
  },
  methods: {
    
  },
   mounted(){
    var params = JSON.stringify({"opt":3,"cmd":1,"os":"wap","uid":"hs20162285188","uname":"17610859110","code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FD1F959A283EEE1D61787033022FA7CCA6B3FD919E975F78EFFFAD22D2BE21F5F2DA6795AD8187C9F1D12248FF4F1D996BF89B4A8FFDABBFDF","imei":"dasd1223423we","time_stamp":1498526615023,"crc":"eb0988271e5282f966543cdf73aaf7d8"})
    this.$http.post("/member",params,{
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      }
    }).then(res=>{
      console.log(res)
      this.username = res.body.data.tel_no,
      this.src = res.body.data.icon_img
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing:border-box;
}
.manage{
  background:#eee;
  height:100%
}
.header{
  height:50px;
  background:#fff;
  color:black
}
.top{
  height:90px;
  width:100%;
  padding:0 36px;
  line-height:90px;
  font-size:14px;
  border-top:1px solid #eee;
  border-bottom:1px solid #eee;
  background:#fff
}
.top>span{
  float:left
}
.top .img-box{
  margin-top:10px;
  float:right;
  overflow:hidden;
  width:70px;
  height:70px;
  border-radius:50%;
  border:2px solid #eee;
}
.top .img-box img{
  width:70px;
  height:70px;
}
.list {
  background:#fff;
  width:100%;
  margin-top:10px;
}
.list ul {
  padding-left:36px;
}
.list .item{
  position:relative;
  height:50px;
  width:100%;
  border-bottom:1px solid #eee;
  line-height:50px;
  font-size:14px
}
.list .item span{
  position:absolute;
  top:0;
  left:0px;
  float:left;
  text-align:left
}
.list .item i{
  float:right;
  display:block;
  width:20px;
  height:50px;
  margin-right:20px;
}
.list .item div{
  position:absolute;
  top:0;
  right:45px;
}
</style>
