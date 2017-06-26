<template>
  <div class="index">
    <v-header></v-header>
    <v-sub-header>
        <ul class="class-list">
            <li>1</li>
        </ul>
    </v-sub-header>
    <my-footer></my-footer>
    <my-content>
       <div class="swiper-wrap">
        <mt-swipe :auto="4000">
          <mt-swipe-item>1</mt-swipe-item>
        </mt-swipe>
       </div>
       <div class="pic-list">
        <ul>
          <li>
            <img src="http://img3.aolaigo.com/group1/M00/26/7A/CggUF1lKDvuAXn_oAAAbER7qrVU439=120x4096.png" alt="">
            <div>新人专享</div>
          </li>
          <li>
            <img src="http://img1.aolaigo.com/group1/M00/26/7C/CggUFllKDwqABHrvAAAaP68N2zA682=120x4096.png" alt="">
            <div>签到</div>
          </li>
          <li>
            <img src="http://img2.aolaigo.com/group1/M00/26/7C/CggUFllKDxqACFgTAAAd7nIBvrI158=120x4096.png" alt="">
            <div>拼图</div>
          </li>
          <li>
            <img src="http://img2.aolaigo.com/group1/M00/26/7A/CggUF1lKDyGAYG1NAAAbpewYY9Y083=120x4096.png" alt="">
            <div>门店优选</div>
          </li>
          <li>
            <img src="http://img3.aolaigo.com/group1/M00/26/7C/CggUFllKDyiANx2EAAAYyaLfBpQ149=120x4096.png" alt="">
            <div>分类</div>
          </li>

        </ul>
       </div>
    </my-content>
  </div>
</template>

<script>
import Header from "./Index-header"
import SubHeader from "../public/Sub-header"
export default {
  data(){
    return{
      classData:[]
    }
  },
 name:"index",
 components:{
   "v-header":Header,
   "v-sub-header":SubHeader
 },
 mounted(){
   //console.log(this.$http)
   //商品分类信息
   var classParams = JSON.stringify({"os":"wap","opt":1,"cmd":14})
   this.$http.post("/ashx",classParams,{
     headers:{
       "Content-Type":"application/x-www-form-urlencoded"
     }
   }).then(res=>{
     console.log(res.data)
     this.classData = res.data;
   });
   //获取轮播图图片
   var picParams = JSON.stringify({"os":"wap","opt":1,"cmd":1,"id":"3952"})
   this.$http.post("/ashx",picParams,{
      headers:{
       "Content-Type":"application/x-www-form-urlencoded"
     }
   }).then(res=>{
     console.log(res.data);
   })

 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .class-list{width:100%;display:flex;line-height:42px;overflow-x:scroll;white-space:nowrap;}
  .class-list li{padding:0 10px;}
  .swiper-wrap{width:100%;height:216px;background:blue;}
  .pic-list{width:100%;height:104px;padding-top:30px;}
  .pic-list ul{width:100%;display:flex;}
  .pic-list ul li{flex:1;font-size:14px;color:#666;}
  .pic-list ul  img{width:36px;height:36px;}

</style>
