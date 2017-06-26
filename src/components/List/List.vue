<template>
  <div  class="list">
    <my-header>
       <a class=" iconfont icon-fanhui" href="javascript:;" onClick="javascript :history.back(-1);" slot="left"></a>
       <a href="javascript:;"  slot="tit">列表</a>
        <a href="javascript:;"  slot="right">购物车</a>
    </my-header>
    <my-footer></my-footer>
    <my-content>
          <class-list :class-data = "classData" @get-list = "getList"></class-list>
          <Product-list :list-data="listData"></Product-list>
    </my-content>
  </div>
</template>



<script>
//引入组件
import ClassList from "./ClassList";
import ProductList from "./ProductList";

export default {
  name: 'list',
  data () {
    return {
       classData:[],
       listData:[]
    }
  },
  components:{
    "class-list":ClassList,
    "Product-list":ProductList//局部注册组件
  },
  methods:{
       getList:function(classID){
                this.$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?classID="+classID).then(res=>{
              console.log(res.data)
               this.listData=res.data;
          })
       }

  },
  mounted(){

          this. getList(0);//默认数据
         this.$http.get("http://datainfo.duapp.com/shopdata/getclass.php").then(res=>{
            console.log(res);
             this.classData = res.data;
         });


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
