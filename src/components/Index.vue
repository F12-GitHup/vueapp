<template>
  <div class="index">
   <!--头部组件-->
    <mt-header fixed title="首页">
       <router-link to="/list" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
       <mt-button icon="more" slot="right" @click="fnAction"></mt-button>
    </mt-header>
      <!--swiper-->
    <div class="swiper-wrap">
      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>
    <!--<mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
      position="center"
      >
    </mt-popup>-->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
    <!--屏幕下方弹出-->
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
    <!--底部-->
    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
import Header from './public/Header'
export default {
  name: 'index',
  data () {
    return {
      selected:"外卖",
      actions:[
        {name:"分享到QQ",method:()=>{alert("QQ")}},
        {name:"分享到微信",method:()=>{alert("微信")}},
        {name:"分享到微博",method:()=>{alert("微博")}},
      ],
      popupVisible:true,
      sheetVisible:false
    }
  },
  methods:{
    fnAction(){
      this.sheetVisible=true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swiper-wrap{width:100%;height:180px;margin-top:41px;background:green;}
</style>
