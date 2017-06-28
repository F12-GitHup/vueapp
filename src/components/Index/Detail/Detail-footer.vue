<template>
    <div class="detail-footer">
        <ul>
            <li><div class="iconfont">&#xe6a3;</div><a href="#">客服</a></li>
            <li><div class="iconfont">&#xe609;</div><a href="#">已收藏</a></li>
            <li><div class="iconfont">&#xe600;</div><a href="#">购物车</a></li>
            <li class="long"><a href="#">加入购物车</a></li>    
        </ul>
    </div>
</template>

<script>
    export default{
        name:"detail-footer"
    }
</script>


<style scoped>
   .detail-footer{width:100%;height:60px;position:fixed;bottom:0;left:0;border-top:1px solid #ccc;text-align:center;} 
    .detail-footer ul{width:100%;height:100%;display:flex;}
    .detail-footer ul li{height:100%;flex:1;border-right:1px solid #ccc;background:#fff;}
    .detail-footer ul .iconfont{margin-top:15px;font-size:18px;}    
    .detail-footer ul a{font-size:14px;}
    .detail-footer ul .long{flex:2;line-height:60px;background:#f10;}
    .detail-footer ul .long a{ font-size:16px;color:#fff;}
   
</style>