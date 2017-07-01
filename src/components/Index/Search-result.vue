<template>
    <div class="search-result">
        <my-header>
            <a href="#/search" slot="left" class="icon-fanhui iconfont"></a>
            <a href="javascript:;"slot="tit">搜索列表</a>
        </my-header>
        <my-content>
            <ul>
            <li v-for="(ele,index) in listData">
                     <img :src="'http://img2.aolaigo.com/group1/'+ele.wmimg.url" alt="">
            </li>
        </ul>
        </my-content>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                listData:[]
            }
        },
        mounted(){
            var id = this.$route.query.id;
            var url ='http://searchapi.aolaigo.com/appsearch/cmd/GetAppSearchResult?pcid='+id+'&title=%25E9%25A3%258E%25E8%25A1%25A3&cmd=GetAppSearchResult';
            
            this.$http.get(url).then(res=>{
                console.log(JSON.parse(res.data).Data.MainOutputVM.OutputSkuInfoVMs)
               this.listData = JSON.parse(res.data).Data.MainOutputVM.OutputSkuInfoVMs;
            })
        }
    }
</script>

<style scoped>
    .search-result ul{width:100%;overflow:hidden;}
    .search-result ul li{width:50%;float:left;}
    .search-result ul li img{width:100%;}
</style>