<template>
       <div class="wish">
          <div class="top">
            <span>星语心愿</span>
          </div>
          <div class="banner2">
            <img src="http://img4.aolaigo.com/group1/M00/26/DD/CggUF1lRySaAcwvfAAEH9HhCFNs700=720x4096.jpg" alt="">
          </div>
          <div class="bottom">
            <div class="left">
              <p>品质抢购</p>
              <p class="countDown">距离开始还有<span></span></p>
              <a class= 'more' href="javascript:;">查看更多</a>
              <div class="loop-wrap" v-for="data in pinzhiData">
                  <img :src="'http://img4.aolaigo.com/group1/'+data.src" alt=""> 
                  <div class="price">
                     <span>￥{{data.seckill_price}}</span> 
                    <del>{{data.seckill_price}}</del> 
                  </div>
              </div>
            </div>
            <div class="right">
              <section>
                <img src="http://img5.aolaigo.com/group1/M00/26/8C/CggUFllKLjyAWObBAAAt9tm74_M586=360x4096.jpg" alt="">
              </section>
               <section>
                <img src="http://img2.aolaigo.com/group1/M00/26/4F/CggUF1lHhXmALXZrAADFPwnrLlM283=360x4096.jpg" alt="">
              </section>
            </div>
          </div>
       </div>
</template>

<script>

export default {
  props:{
      pinzhiData:{
          type:Array,
          default(){
              return []
          }
      }
  },
 name:"wish",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wish .top{height:30px;padding:0 10px;box-sizing:border-box;}
  .banner2{width:100%;height:88px;}
  .banner2 img{width:100%;height:100%;}
  .wish .bottom{display:flex;width:100%;height:240px;padding:10px;box-sizing:border-box;}
  .wish .bottom .left{width:45%;height:100%;background:#eee;border-radius:10px;padding:5px;box-sizing:border-box;}
  .wish .bottom .right{width:52%;height:100%;margin-left:3%;}
  .wish .bottom .right section{background:yellow;width:100%;height:45%;border-radius:10px;margin-bottom:20px;}
  .bottom .right section img{width:100%;height:100%;}
  .wish .bottom section span{font-size:14px;}
  .loop-wrap{width:100%;height:60px;display:flex;font-size:12px;}
  .loop-wrap img{width:60px;height:60px;}
  .countDown{font-size:12px;line-height:20px;}
  .price{padding-top:10px;box-sizing:border-box;}
  .price span{color:#f10;font-size:14px;}
  .more{font-size:12px;color:#333;}


</style>
