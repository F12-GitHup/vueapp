<template>
  <div  class="product-list" ref="product-list">
          <ul>
                <li 
                v-for="(ele,index) in listData" 
                :key="index"
                >
              <img :src="ele.goodsListImg" alt="">
              </li>
          </ul>
  </div>
</template>

<script>
//弹性滚动条
import IScroll from "iscroll";
export default {
  name: 'product-list',
    props:{
        listData:{
            type:Array,
            default(){
                return []
            }
        }
    },
    mounted(){
        //this.$refs["product-list"]  获取真实DOM
        this.myScroll = new IScroll(this.$refs["product-list"],{
        scrollbars:true
        })
    },
    updata(){
        //内容更新，重新渲染
        this.myScroll.refresh()
    }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .product-list{position:fixed;top:85px;bottom:50px;}
  .product-list ul{width:100%;overflow:hidden;}
  .product-list ul li{float:left;width:50%;text-align:center;font-size:12px;padding:10px;box-sizing:border-box;}
   .product-list li img{width:100%;height:150px;}
</style>
