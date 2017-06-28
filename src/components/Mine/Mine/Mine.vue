<template>
  <div class="mine">
    <mt-header fixed title="我的奥莱购" class="header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <my-footer></my-footer>

    <my-content>
        <div class="top">
          <div class="left-img">
            <img :src="'http://img4.aolaigo.com/group1/'+src" alt="" ref="head">
          </div>
          <div class="middle">
            <div class="user-name" @click="toLogin">
                {{username}}
            </div>
            <div class="to-address">
                收货地址&nbsp;>
            </div>
          </div>
          <div class="right-box">
            <router-link to="/manage" >
              <div class="user-control">
                账户管理&nbsp;>
              </div>
            </router-link>  
            
          </div>
     </div>

     <order-list> </order-list>
     <some-list></some-list>
     <for-you ref="forYou" v-if="isTrue"></for-you>
    </my-content>
    
  </div>
 
</template>

<script>
//引入order-list 
import OrderList from './OrderList'
import SomeList from './SomeList'
import ForYou from './ForYou'

export default {
  name: 'mine',
  data(){
    return {
      src:'',
      username:'登录去吧，骚年',
      isTrue:true
    }
  },
  methods: {
    toLogin(){
      //通过localStorage.username判断用户是否登录，登录的话 不执行跳转事件。未登录就执行
      var uname = window.localStorage.username
      if(uname) return;
      location.href="#/login"
    }
  },
  mounted(){
    //判断是否已经登录   根据localStorage.username
    var uname = window.localStorage.username

    console.log(uname)
    if(!uname){
        this.username = "登录去吧，骚年";
        //未登录头像图片隐藏
        this.$refs.head.style = "display:none";
        //未登录为您推荐不显示
        this.isTrue = false
    }else{
      var params = JSON.stringify({"opt":3,"cmd":1,"os":"wap","uid":"hs20162285188","uname":uname,"code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FD1F959A283EEE1D61787033022FA7CCA6B3FD919E975F78EFFFAD22D2BE21F5F2DA6795AD8187C9F1D12248FF4F1D996BF89B4A8FFDABBFDF","imei":"dasd1223423we","time_stamp":1498526615023,"crc":"eb0988271e5282f966543cdf73aaf7d8"})
        this.$http.post("/member",params,{
          headers:{
            "Content-Type":"application/x-www-form-urlencoded"
          }
        }).then(res=>{
          console.log(res)
          this.username = res.body.data.tel_no,
          this.src = res.body.data.icon_img
        })
    }
    
  },
  components:{
    "order-list":OrderList,
    "some-list":SomeList,
    "for-you":ForYou
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding:0;margin:0;box-sizing:border-box
}
.mine{
  background:#eee;
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
  border:1px solid #fff;
  color:#fff
}

</style>
