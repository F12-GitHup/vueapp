<template>
  <div  class="class-list">
              <ul>
                <li v-for="(ele,index) in classData" :key="index" @click="getList(ele.classID)">
                  {{ele.className}}
                </li>
              </ul>
  </div>
</template>

<script>
export default {
  name: 'class-list',
  props:{
      classData:{
          type:Array,
          default(){
              return[]
          }
      }
  },
  methods:{
      getList(classID){
        //调用父组件的方法，传参
         this.$emit("get-list",classID)
      }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.class-list{width:100%;position:fixed;top:45px;left:0;}
  .class-list ul{background:#ccc;height:44px;line-height:44px;overflow-x:scroll;white-space:nowrap;}
  .class-list ul li{display:inline-block;padding:0 10px;}
</style>
