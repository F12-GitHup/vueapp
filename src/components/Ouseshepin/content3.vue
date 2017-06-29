<template>
    <div class="content3">
        <div class="banner">
            <img :src="'http://img2.aolaigo.com/group1/'+listData[0].cons[0].src" alt="">
        </div>
        <ul class="list1">
            <li v-for="(ele,index) in listData[1].cons" :key="index">
               <img :src="'http://img2.aolaigo.com/group1/'+ele.src" alt="">
            </li>
        </ul>
        <div class="jingxuan">
            <p class="title">男士精选</p>
            <ul>
                <li v-for="(ele,index) in listData[2].cons" :key="index">
                    <router-link :to="{path:'/detail',query:{id:ele.skuid}}">
                        <img :src="'http://img2.aolaigo.com/group1/'+ele.src" alt="">
                        <p class="dis">{{ele.title}}</p>
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
              listData:[]
            }
        },
        name:"content2",
         mounted(){
            //获取内容数据
            var Params = JSON.stringify({"os":"wap","opt":1,"cmd":1,"id":"4072"})
            this.$http.post("/ashx",Params,{
              headers:{
                "Content-Type":"application/x-www-form-urlencoded"
              }
            }).then(res=>{
                console.log(res.data.data)
              this.listData = res.data.data;
              

            });
        }
    }
</script>


<style scoped>
    .banner{width:100%;}
    .banner img{width:100%;}
    .list1{width:100%;overflow:hidden;padding:0 5px;box-sizing:border-box;}
    .list1 li{width:49%;float:left;border:1px solid #ccc;}
    .list1 li img{width:100%;}
    .jingxuan ul{width:100%;overflow:hidden;}
    .jingxuan .title{padding-left:5px;line-height:40px;border-bottom:1px solid #ccc;}
    .jingxuan ul li{width:49%;float:left;border-bottom:1px solid #ccc;border-right:1px solid #ccc;}
    .jingxuan ul li img{width:100%;}
    .dis{font-size:12px;}
</style>