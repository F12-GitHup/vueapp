<template>  
    <div class="index-header">
        <div class="left">
            <span class="iconfont">&#xe611;</span>
            <span class="icon-description">扫一扫</span>
        </div>
        <div class="mid">
            <router-link to="/search">
                <div class="search-wrap">
                    <span class="search-icon iconfont">&#xe629;</span>
                    <span>搜索 商品 分类 品牌</span>
                </div>
            </router-link>
        </div>
        <div class="right">
            <span class="iconfont">&#xe61f;</span>
           <span class="icon-description">消息</span>
        </div>
    </div>
</template>

<script>
    export default({
        name:"index-header",
    })
</script>

<style scoped>
    .index-header{width:100%;height:45px;position:fixed;top:0;left:0;background:#fff;display:flex;text-align:center;z-index:5;}
    .left,.right{width:48px;display:flex;flex-direction:column;padding-top:5px;box-sizing:border-box;} 
    .icon-description{font-size:12px}
    .mid{flex:1;}
    .search-wrap{background:#eee;position:absolute;top:9px;bottom:9px;left:48px;right:48px;line-height:27px;font-size:12px;color:#999;}
</style>