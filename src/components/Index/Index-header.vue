<template>  
    <div class="index-header">
        <div class="left">left</div>
        <div class="mid">
            <div class="search-wrap">
                <span class="search-icon"></span>
                <span>搜索 商品 分类 品牌</span>
            </div>
        </div>
        <div class="right">right</div>
    </div>
</template>

<script>
    export default({
        name:"index-header"
    })
</script>

<style scoped>
    .index-header{width:100%;height:45px;line-height:45px;position:fixed;top:0;left:0;background:fff;display:flex;}
    .left,.right{width:48px;} 
    .mid{flex:1;}
    .search-wrap{background:#eee;position:absolute;top:9px;bottom:9px;left:48px;right:48px;line-height:27px;font-size:12px;color:#999;}
</style>