<template>
  <div class="register">
    <mt-header fixed title="注册" class="header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/login" slot="right">
        <mt-button >登录</mt-button>
      </router-link>
    </mt-header>
    <my-content>
      <!--第一步-->
     <div class="box" v-if="sjh">
      <div class="con">
        <ul>
          <li class="item">
            <label for="">
              <input type="text" class="username" placeholder="请输入手机号" ref="phone">
            </label>
          </li>
          <li class="item">
            <label for="">
              <input type="text" class="inp-code" placeholder="请输入右侧验证码" ref="inp">
              <img src="" alt="" class="code"
                    @click="changeImg"
                    ref="imgSrc">
            </label>
          </li>
        </ul>
      </div>

      <div class="options">
        <input type="checkbox" ref="checkbox">已同意并阅读<span>《奥莱购会员协议》</span>
      </div>
      <div class="login-btn" @click="next">下一步</div>
    </div>
      <!--第二步-->
      <div class="box" v-if="sjyzm">
        <div class="con">
          <ul>
            <li class="item">


                <input type="text" class="sjcode" placeholder="请输入验证码" ref="sjcode">

            </li>
          </ul>
        </div>
        <div class="login-btn" @click="next2">下一步</div>
      </div>
      <!--第三步-->
      <div class="box" v-if="passw">
        <div class="con">
          <ul>
            <li class="item">
              <label for="">
                <input type="password" class="psw" placeholder="请输入密码" ref="psw">
              </label>
            </li>
            <li class="item">
              <label for="">
                <input type="password" class="ppsw" placeholder="请输入确认密码" ref="ppsw">
              </label>
            </li>
          </ul>
        </div>
        <div class="login-btn" @click="next3">完成</div>
      </div>
    </my-content>
  </div>

</template>
<script>
import axios from 'axios';
import { MessageBox } from 'mint-ui';
export default {
  name: 'register',
  data () {
    return {
      //记录唯一的name和时间戳t
      num:0,
      t:0,
      sjh:true,
      sjyzm:false,
      passw:false,
      phone:"",
      sjcode:""
    }
  },
  methods: {
    changeImg(){
        console.log(this.$refs.imgSrc.src)
        this.num = Math.random()*200000000;
        this.t =  Math.random()*200000000000;
        //模拟原网站验证码的唯一name和时间戳t   必要保证一致  才能获取对应验证码正确不正确
        this.$refs.imgSrc.src = 'http://member.aolaigo.com/handlers/validcode.ashx?name='+this.num+"&_t="+this.t;

    },
    next(){
      var phone = this.$refs.phone.value;
      var code = this.$refs.inp.value;
      this.phone=phone;
      //传入的form data
      var params = JSON.stringify({"opt":1,"cmd":1,"os":"wap","uid":"","name":phone,"validcode":code,"imei":this.num,"isSend":1})
      axios.post("/member",params,{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res=>{
        //先判断是否同意协议
        //判断是否被选中
        var isCheck = this.$refs.checkbox.checked;

        console.log(isCheck)
        if(isCheck){
          //被选中  才提示其他内容

          //收到返回数据  判断是否输入正确
          console.log(res.request.response)
          var i = JSON.parse(res.request.response).error;
          var msg = '';
          if(i==(-1)){
            //得到准确的错误信息
            msg = JSON.parse(res.request.response).msg;
            //提示框 提示错误的信息
            MessageBox('提示', msg);
          //否则就是正确  ，可能需要保存用户信息
          }else{
            MessageBox('提示', '验证码已发送');
            this.sjh=false;
            this.sjyzm=true;
          }
        }else{
          MessageBox('提示', "请先同意用户协议！！");
        }

      })
    },
    next2(){
      this.sjyzm=false;
      this.passw=true;
      var sjcode = this.$refs.sjcode.value;
      this.sjcode=sjcode;
    },
    next3(){

      var psw = this.$refs.psw.value;
      var params = JSON.stringify({"opt":1,"cmd":2,"identifying_code":this.sjcode,"name":this.phone,"password":psw,"os":"wap","uid":"","channel":"4"})
      axios.post("/member",params,{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res=>{
        console.log(res)
        var i = JSON.parse(res.request.response).error;
        var msg = '';
        if(i==(-1)){
          //得到准确的错误信息
          msg = JSON.parse(res.request.response).msg;
          //提示框 提示错误的信息
          MessageBox('提示', msg);
          //否则就是正确  ，可能需要保存用户信息
        }else{
          window.location.href="/login"
        }
      })
      }
  },
  mounted(){
    this.changeImg()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
  background:#eee;
  height:100%
}
.header{
  height:50px;
  background:#fff;
  color:black
}
.con{
  box-sizing:border-box;
  margin:15px 0;
  padding:0 15px;
  background:#fff;
}
.con label{
  overflow:hidden
}
.con .item{
  height:52px;
  border-bottom:1px solid #eee;
  line-height:52px;
}
.con .item .code{
  width:70px;
  height:30px;
  float:right;
  margin:10px 0 0 0
}
.con .item input{
  float:left;
  width:160px;
  height:52px;
  border:none;
  outline:none;
}
.options {
  height:20px;
  width:100%;
  line-height:20px;
  font-size:14px;
  box-sizing:border-box;
  padding:0 10px;
  text-align:left
}
.options span{
  color:orange
}

.login-btn{
  height:40px;
  width:86%;
  margin:10px 7%;
  background:red;
  text-align:center;
  line-height:40px;
  color:#fff;
  font-weight:900;
  border-radius:5px;
}
</style>
