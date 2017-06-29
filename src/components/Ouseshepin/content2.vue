<template>
    <div class="content2">
        <div class="banner">
            <img :src="'http://img2.aolaigo.com/group1/'+listData[0].cons[0].src" alt="">
        </div>
        <ul class="s-pic">
            <li v-for = "(ele,index) in listData[1].cons">
               <img :src="'http://img2.aolaigo.com/group1/'+ele.src" alt="">
            </li>
        </ul>
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
            var Params = JSON.stringify({"os":"wap","opt":1,"cmd":1,"id":"4062"})
            this.$http.post("/ashx",Params,{
              headers:{
                "Content-Type":"application/x-www-form-urlencoded"
              }
            }).then(res=>{
              this.listData = res.data.data;
              

            });
        }
    }
</script>


<style scoped>
    .banner{width:100%;}
    .banner img{width:100%;}
    .s-pic{width:100%;overflow:hidden;}
    .s-pic li{width:50%;float:left;}
    .s-pic li img{width:100%;}
</style>