<template>
  <div class="index">
    <v-header></v-header>
    <v-sub-header :class-data="classData"></v-sub-header>
    <my-footer   :selected="selected"></my-footer>
    <my-content>
       <div class="swiper-wrap">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="data in picData">
            <img :src="'http://img1.aolaigo.com/group1/'+data.src" alt="">
          </mt-swipe-item>
        </mt-swipe>
       </div>
       <div class="pic-list">
        <ul>
          <li v-for="data in channelData">
            <img :src="'http://img3.aolaigo.com/group1/'+data.src" alt="">
            <div>{{data.title}}</div>
          </li>
        </ul>
       </div>
       <v-wish :pinzhi-data = "pinzhiData"></v-wish>
       <v-haowu :haowu-data = "haowuData"></v-haowu>
    </my-content>
  </div>
</template>

<script>
import Header from "./Index-header"
import SubHeader from "../public/Sub-header"
import Wish from "./Wish"
import Haowu from "./Haowujinguxan"
export default {
  data(){
    return{
      classData:[],
      picData:[],
      channelData:[],
      wishData:[],
      pinzhiData:[],
      haowuData:[],
      selected:"首页",

    }
  },
 name:"index",
 components:{
   "v-header":Header,
   "v-sub-header":SubHeader,
   "v-wish":Wish,
   "v-haowu":Haowu
 },
 methods:{
  changeClass(){

  }
 },
 mounted(){
   //商品分类信息
   var classParams = JSON.stringify({"os":"wap","opt":1,"cmd":14})
   this.$http.post("/ashx",classParams,{
     headers:{
       "Content-Type":"application/x-www-form-urlencoded"
     }
   }).then(res=>{
     this.classData = res.data.data[0].cons;
   });

   var Params = JSON.stringify({"os":"wap","opt":1,"cmd":1,"id":"3952"})
   this.$http.post("/ashx",Params,{
      headers:{
       "Content-Type":"application/x-www-form-urlencoded"
     }
   }).then(res=>{
     this.picData = res.data.data[0].cons//获取轮播图图片
     this.channelData = res.data.data[2].cons//获取首页频道数据
     this.wishData = res.data.data[3] //星语心愿数据
     this.pinzhiData = res.data.data[5].cons //品质抢购数据
      this.haowuData = res.data.data[11].coms//好物精选数据
      console.log(this.haowuData)
   })
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .class-list{width:100%;display:flex;line-height:42px;overflow-x:scroll;white-space:nowrap;}
  .class-list li{padding:0 10px;}
  .swiper-wrap{width:100%;height:216px;background:blue;}
  .swiper-wrap img{width:100%;height:100%;}
  .pic-list{width:100%;height:80px;padding-top:10px;text-align:center;}
  .pic-list ul{width:100%;display:flex;}
  .pic-list ul li{flex:1;font-size:14px;color:#666;}
  .pic-list ul  img{width:36px;height:36px;}
</style>
