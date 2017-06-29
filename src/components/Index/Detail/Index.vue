<template>
    <div class="detail">

        <v-footer></v-footer>
       <my-content>
           <!-- 轮播图-->
         <div class="swiper-wrap">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="data in detailData.imgUrls">
                <img :src="'http://img5.aolaigo.com/group1/'+data" alt="">
                </mt-swipe-item>
             </mt-swipe>
        </div>
        <!--商品标题-->
         <div class="goods-title">
               {{detailData.name}}
        </div>
        <!--价格-->
        <div class="price">
        <span>￥{{detailData.p_in_alj}}</span>
        <del>￥{{detailData.p_in_scj}}</del>
        </div>
        <!--商品选项-->
        <div class="select-box">
            <p>颜色：<span>白色</span></p>
            <p>尺码：XS、S、...<span class="iconfont">&#xe608;</span></p>
        </div>
        <!--优惠-->
        <div class="fav-info">
            <span>优惠</span>
            <p>单品惠：以优惠价{{detailData.p_in_alj}}元购买</p>
            <i class="iconfont">&#xe64b;</i>
        </div>
        <!--发货地-->
        <div class="location">
            发货地：深圳华盛奥莱
        </div>
        <div class="promise">
            <span>正品保障</span>
            <span>七天退换</span>
            <span>全场包邮</span>
        </div>
        <div class="brand">
            <img :src="detailData.brandLogo" alt="">
            <span>{{detailData.brand}}</span>
            <i class="iconfont">&#xe608;</i>
        </div>
        <v-tuijian :detail-data="detailData"></v-tuijian>
       </my-content>
        <my-header ref="header">
            <a href="" slot="left" class="iconfont back-icon">&#xe607;</a>
            <a href="" slot="tit">详情</a>
        </my-header>
    </div>
</template>
<script>
    import Footer from './Detail-footer'
    import Tuijian from './Tuijian'
    export default{
        name:"detail",
        data(){
           return{
            detailData:[],
            scrollTop:""
           }
        },
        components:{
           "v-footer":Footer,
           "v-tuijian":Tuijian
        },
        methods:{

        },
        mounted(){
            //获取参数id
            var id = this.$route.query.id;
            //获取详情数据
            this.$http.get("/callback=jQuery22407218586266387472_1498547211307&cmd=getsku&v=4&skuId="+id+"&_=1498547211308").then(res=>{
                console.log(res.data.Data)
                this.detailData = res.data.Data
            })
            //找到头部组件内的Dom节点
           var header = this.$refs["header"].$refs.header
            window.onscroll=function(){
                this.scrollTop = document.body.scrollTop;
                //console.log(this.scrollTop)
                header.style.opacity = this.scrollTop*1/200
            }


        },

    }
</script>

<style scoped>
    .detail .back-icon{text-align:center;}
    .swiper-wrap{width:100%;height:390px;}
    .swiper-wrap img{width:100%;height:100%;}
    .price span{color:#f10;}
    .goods-title{padding:0 20px;box-sizing:border-box;font-size:12px;line-height:25px;}
     .price{padding:0 20px;box-sizing:border-box;font-size:16px;}
     .price del{font-size:14px;color:#666;}
    .select-box{width:100%;height:42px;display:flex;padding:0 20px;box-sizing:border-box;}
    .select-box p{width:50%;font-size:12px;line-height:42px;border:1px solid #eee;color:#666}
    .fav-info{width:100%;height:26px;line-height:26px;display:flex;padding:0 20px;box-sizing:border-box;margin-top:10px;border-bottom:1px solid #ccc;}
    .fav-info span{display:block;font-size:12px;width:30px;text-align:center;background:#f10;color:#fff;border-radius:5px;}
     .fav-info p{font-size:12px;flex:1;text-align:center;color:#f10;}
     .location{width:100%;line-height:30px;font-size:12px;padding:0 20px;box-sizing:border-box;color:#666;}
     .promise{display:flex;padding:0 20px;box-sizing:border-box;font-size:12px;}
     .promise span{flex:1;text-align:center;}
     .brand{width:100%;height:66px;padding:0 20px;box-sizing:border-box;line-height:66px;display:flex;}
     .brand img{width:96px;}
     .brand i{width:30px;}
     .brand span{flex:1;}
     .detail .content{padding-top:0;}

</style>
