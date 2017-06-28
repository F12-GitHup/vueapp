<template>
    <div class="wrap">
        <div class="header">
            <p>好物精选</p>
            <span>为您精心挑选</span>
        </div>
        <section v-for="data in haowuData">
            <p>{{data.cons[0].title}}</p>
            <div class="content">
                <div class="left">
                    <img :src="'http://img3.aolaigo.com/group1/'+data.cons[0].src" alt="">
                </div>
                <div class="right">
                    <ul>
                        <li>
                        <!--传递参数-->
                        <!--:to="{path:'/detail',query: {id:data.cons[1].skuid}}"-->
                           <router-link :to="{path:'/detail',query: {id:data.cons[1].skuid}}">
                                 <img :src="'http://img3.aolaigo.com/group1/'+data.cons[1].src" alt="">
                                <span>￥{{data.cons[1].sprice}}</span>
                           </router-link>
                        </li>
                        <li>
                           <router-link :to="{path:'/detail',query: {id:data.cons[2].skuid}}">
                                 <img :src="'http://img3.aolaigo.com/group1/'+data.cons[2].src" alt="">
                                <span>￥{{data.cons[2].sprice}}</span>
                           </router-link>
                        </li>
                         <li>
                           <router-link :to="{path:'/detail',query: {id:data.cons[3].skuid}}">
                                 <img :src="'http://img3.aolaigo.com/group1/'+data.cons[3].src" alt="">
                                <span>￥{{data.cons[3].sprice}}</span>
                           </router-link>
                        </li>
                        <li>
                           <router-link :to="{path:'/detail',query: {id:data.cons[4].skuid}}">
                                 <img :src="'http://img3.aolaigo.com/group1/'+data.cons[4].src" alt="">
                                <span>￥{{data.cons[4].sprice}}</span>
                           </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>

 </template>      

<script>

export default {
  props:{
      haowuData:{
          type:Array,
          default(){
              return []
          }
      }
  },
 name:"haowujingxuan",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrap{width:100%;padding:0 20px;box-sizing:border-box;}
    .header{height:44px;text-align:center;}
    .header span{font-size:12px;color:#666;}
    .wrap section{width:100%;border-top:1px solid #ccc;}
    section p{line-height:40px;}
    section .content{width:100%;display:flex;justify-content:space-between}
    section .content .left{width:55%;}
    section .content .right{width:45%;}
    .content .left img{width:100%;}
    .right ul{width:100%;height:100%;display:flex;flex-wrap:wrap;}
    .right ul li{width:50%;}
    .right ul li span{font-size:14px;}
    .right ul li img{width:50px;height:50px;}

</style>
