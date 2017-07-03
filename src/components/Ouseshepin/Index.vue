<template>
  <div  class="ouseshepin">
    <my-header>
       <span slot="tit">欧瑟奢品</span>
    </my-header>
    <my-footer :selected="selected"></my-footer>
    <my-content>
          <mt-navbar v-model="sel">
            <mt-tab-item id="0" >{{classData[0].title}}</mt-tab-item>
            <mt-tab-item id="1" >{{classData[1].title}}</mt-tab-item>
            <mt-tab-item id="2" >{{classData[2].title}}</mt-tab-item>
            <mt-tab-item id="3" >{{classData[3].title}}</mt-tab-item>
            <mt-tab-item id="4" >{{classData[4].title}}</mt-tab-item>
          </mt-navbar>
          <!-- tab-container -->
          <mt-tab-container v-model="sel">
            <mt-tab-container-item id="0">
                <v-content1 :pic-data = "picData"></v-content1>
            </mt-tab-container-item>
            <mt-tab-container-item id="1">
               <v-content2></v-content2>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <v-content3></v-content3>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
               男包
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
               女包
            </mt-tab-container-item>
          </mt-tab-container>
    </my-content>
  </div>
</template>
<script>
//引入组件
import Content1 from "./content1"
import Content2 from "./content2"
import Content3 from "./content3"
export default {
  name: 'ouseshepin',
  data () {
    return {
      selected:"欧瑟奢品",
       classData:[],
       picData:[],
       listData:[],
       sel:"0"
    }
  },
  components:{
    "v-content1":Content1,
    "v-content2":Content2,
    "v-content3":Content3
  },
  methods:{


  },
  mounted(){
          //this. getList(0);//默认数据
          //获取分类数据
           var classParams = JSON.stringify({"os":"wap","opt":1,"cmd":17})
            this.$http.post("/ashx",classParams,{
              headers:{
                "Content-Type":"application/x-www-form-urlencoded"
              }
            }).then(res=>{
             // console.log(res.data.data[0].cons)
              this.classData = res.data.data[0].cons;
            });
            //获取内容数据
            var Params = JSON.stringify({"os":"wap","opt":1,"cmd":1,"id":"4003"})
            this.$http.post("/ashx",Params,{
              headers:{
                "Content-Type":"application/x-www-form-urlencoded"
              }
            }).then(res=>{
              console.log(res.data)
              this.picData=res.data.data[0].cons;
            });



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
