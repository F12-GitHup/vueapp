<template>
  <div class="login">
    <mt-header fixed title="登录" class="header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/register" slot="right">
        <mt-button >注册</mt-button>
      </router-link>
    </mt-header>
    <my-content>
     <div class="box">
      <div class="con">
        <ul>
          <li class="item">
            <label for="">
              <span class="aa">账号</span>
              <input type="text" class="username" ref="username"
                    placeholder="请输入账号/邮箱/手机号">
              <span class="bb"><i class="iconfont icon-xiangshang-copy-copy"></i></span>
            </label>
          </li>
          <li class="item">
            <label for="">
              <span class="aa">密码</span>
              <input type="password" class="psw" ref="psw"
                    placeholder="请输入密码(6-20位)">
              <span class="bb"></span>
            </label>
          </li>
        </ul>
      </div>

      <div class="options">
        <div class="getPsw">找回密码》</div>
        <div class="showPsw"><input type="checkbox" ref="checkbox" @click="showPsw">显示密码</div>
      </div>
      <div class="login-btn" @click="login">登录</div>
    </div>
    </my-content>
  </div>
 
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  name: 'login',
  data () {
    return {
      
    }
  },
  methods: {
    login(){
      var username = this.$refs.username.value;
      var psw = this.$refs.psw.value;
      var params = JSON.stringify({"cmd":"1","opt":"2","name":username,"password":psw,"OS":"wap"});
      this.$http.post('/member',params,{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res=>{
         console.log(JSON.parse(res.bodyText))
        console.log(JSON.parse(res.bodyText).msg)
        //获取错误提示  error  看看是什么错  -1  0
        var i = JSON.parse(res.bodyText).error;
        var msg = '';
        if(i==(-1)){
          //截取字符串  得到准确的错误信息
          msg =( JSON.parse(res.bodyText).msg).substr(2);
          //提示框 提示错误的信息
          MessageBox('提示', msg);
        //否则就是正确  跳转到首页，可能需要保存用户信息
        }else{
          //登陆成功  保存用户名到localStroage
          window.localStorage.username = username;
          location.href="/index"
        }
        
      })
    },
    //显示密码
    showPsw(){
      //判断是否被选中
      var isCheck = this.$refs.checkbox.checked;
      
      console.log(isCheck)
      if(isCheck){
        //密码输入框  s是否显示密码
        this.$refs.psw.type = "text";
      }else{
        this.$refs.psw.type = "password";
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
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
.con .item .aa{
  display:block;
  width:72px;
  float:left;
}
.con .item .bb{
  display:block;
  width:50px;
  float:right;
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
  font-size:12px;
  box-sizing:border-box;
  padding:0 10px;
}
.options .getPsw{
  float:left;
  color:orange
}
.options .showPsw{
  float:right;
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
