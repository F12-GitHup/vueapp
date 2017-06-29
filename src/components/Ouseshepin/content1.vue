<template>
    <div class="content1">
        <div class="swiper-wrap">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(ele,index) in picData">
                    <img :src="'http://img2.aolaigo.com/group1/'+ele.src" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!--618返场特惠-->
        <div class="back">
            <p>{{data1[0]['module_title']}}</p>
            <ul>
                <li>
                   <router-link :to="{path:'/detail',query:{id:data1[0].skuid}}">
                         <img :src="'http://img2.aolaigo.com/group1/'+data1[0].src" alt="">
                    <div>
                        <span>￥{{data1[0].mprice}}</span>
                        <del>￥{{data1[0].mprice}}</del>
                    </div>
                   </router-link>
                </li>
                <li>
                 <router-link :to="{path:'/detail',query:{id:data1[1].skuid}}">
                    <img :src="'http://img2.aolaigo.com/group1/'+data1[1].src" alt="">
                    <div>
                        <span>￥{{data1[1].mprice}}</span>
                        <del>￥{{data1[1].mprice}}</del>
                    </div>
                </router-link>
                </li>
            </ul>    
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                data1:[]
            }
        },
        props:{
            picData:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        mounted(){
            //获取内容数据
            var Params = JSON.stringify({"os":"wap","opt":1,"cmd":1,"id":"4003"})
            this.$http.post("/ashx",Params,{
              headers:{
                "Content-Type":"application/x-www-form-urlencoded"
              }
            }).then(res=>{
              
              this.data1 = res.data.data[1].cons;

            });
        }
    }
</script>


<style scoped>
    .swiper-wrap{width:100%;height:200px;}
    .swiper-wrap img{width:100%;height:100%;}
    .back p{line-height:40px;font-size:14px;padding-left:20px;}
    .back ul{width:100%;display:flex;}
    .back ul li{width:50%;padding:10px;box-sizing:border-box;}
    .back ul li img{width:100%;}
    .back ul li div{background:orange;text-align:center;font-size:14px;display:flex;flex-direction:column;padding:10px 0;}
</style>