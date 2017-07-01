<template>
    <div class="search">
        <my-header>
            <a href="#/" slot="left" class="iconfont icon-fanhui"></a>
            <input type="text" slot="tit" placeholder="搜索您喜欢的商品" class="search-input" @input="onInput" ref="con">
            <a href="javascript:;" slot="right" class="iconfont icon-sousuo_sousuo"></a>
        </my-header>
        <my-content>
             <div class="sug">
                <ul>
                    <li v-for="(ele,index) in listData">
                      <router-link :to="{path:'/search-result',query:{id:ele.cid}}">
                         <p>在<span> {{ele.chnw}}</span>分类中搜索</p>
                        <p>约<span>{{ele.numfd}}</span>个商品</p>
                      </router-link>
                    </li>
                </ul>
            </div>
        </my-content>

    </div>
</template>

<script>
    export default{
        name:"search",
        data(){
            return{
            listData:[]
            }
        },
        methods:{
            onInput(){
                 var text = this.$refs.con.value;
                var url ="http://searchapi.aolaigo.com/appsearch/cmd/GetSuggestWords?cmd=GetSuggestWords&psize=18&page=1&keyword="+text;
               
                this.$http.get(url).then(res=>{
                    if(res.data.Data){
                        console.log(res.data.Data);
                        this.listData = res.data.Data.SuggestVMs;
                    }else{
                      this.listData=[]
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .search-input{height:30px;border:1px solid #ccc;border-radius:5px;font-size:12px;width:200px;outline:none;}
    .sug ul li span{color:red;}
    .sug ul{width:100%;padding:0 15px;box-sizing:border-box;}
    .sug ul li a{font-size:12px;display:flex;justify-content:space-between;line-height:25px;}
    .sug ul li p{text-align:left;}
</style>