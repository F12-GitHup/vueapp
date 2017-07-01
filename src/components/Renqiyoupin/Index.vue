<template>
  <div  class="renqiyoupin">
    <my-header>
        <a href="#/renqiyoupin" slot="left" class="iconfont">&#xe607;</a>
       <span slot="tit">人气优品</span>
    </my-header>
    <my-footer :selected="selected"> </my-footer>
    <my-content>
      <ul class="list">
        <li v-for="(ele,index) in listData" :key="index">
              <router-link :to = "{path:'/detail',query:{id:ele.skuid}}">
                  <img :src="'http://img3.aolaigo.com/group1/'+ele.src" alt="">
                  <div class="right">
                    <p class="title">{{ele.title}}</p>
                    <p class="discription">{{ele.subtitle1}}</p>
                    <div class="bottom">
                      <p><span>{{ele.subtitle2}}</span>人喜欢<i class="iconfont">&#xe6b2;</i></p>
                      <span>￥{{ele.sprice}}</span>
                    </div>
                  </div>
              </router-link>
        </li>
      </ul>
    </my-content>
  </div>
</template>
<script>
//引入组件
import ClassList from "./ClassList";
export default {
  name: 'ouseshepin',
  data () {
    return {
      selected:"人气优品",
       listData:[]
    }
  },
  components:{
    "class-list":ClassList,
  },
  methods:{


  },
  mounted(){
        //获取数据
        var Params = JSON.stringify({"os":"wap","opt":1,"cmd":1,"id":"4015"});
       this.$http.post("/ashx",Params,{
              headers:{
                "Content-Type":"application/x-www-form-urlencoded"
              }
            }).then(res=>{
              console.log(res.data.data[0].cons)
              this.listData = res.data.data[0].cons
            });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{width:100%;}
.list li a{width:100%;display:flex;padding:15px;box-sizing:border-box;height:130px;border-bottom:1px solid #eee;}
.list li img{width:100px;height:100px;}
.right{flex:1;font-size:12px;padding:0 15px;box-sizing:border-box;}
.discription{overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;}
.title{color:#333;}
.bottom{display:flex;margin-top:20px;color:red;justify-content:space-between;}

</style>
