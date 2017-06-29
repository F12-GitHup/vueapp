<template>
    <div class="tuijian">
        <div class="title">
             <span>为您推荐</span><a href="#">查看更多<i class="iconfont">&#xe608;</i></a>
        </div>
        </transition-group>
        <ul>
            <li v-for="(ele,index) in detailData.desc">
                <img :src="'http://img1.aolaigo.com/group1/'+ele.value" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:"tuijian",
        props:{
            detailData:{
                type:Object,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
   .tuijian .title{width:100%;height:38px;line-height:38px;font-size:12px;display:flex;padding:0 20px;box-sizing:border-box;}
    .tuijian i{font-size:12px;}
    .tuijian  span{flex:1;}
    .tuijian ul{width:100%;overflow:hidden;}
    .tuijian ul li{width:50%;float:left;padding:10px;box-sizing:border-box;}
    .tuijian ul li img{width:100%;height:71px;}
</style>