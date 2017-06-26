<template>
  <div class="footer">
      <ul>
        <li v-for="(ele,index) in footerData"><a :href="ele.path">
          <span class="iconfont">{{ele.icon}}</span>
          <span>{{ele.text}}</span>
        </a></li>
      
  
      </ul>
  </div>
</template>

<script>
export default {
  name: 'my-footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:{
    footerData:{
      type:Array,
      default(){
        return[
          {text:"首页",icon:"\ue64f",path:"#/"},
          {text:"列表",icon:"\ue655",path:"#/list"},
          {text:"购物车",icon:"\ue63f",path:"#/cart"},
          {text:"我的",icon:"\ue659",path:"#/user-center"}
          
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{margin:0;padding:0}
li{list-style:none;}
.footer {
   position:fixed; left:0; bottom:0; width:100%; height:50px;border-top:1px solid #666;background:skyblue;z-index:10;
}
.footer ul{display:flex;width:100%;}
.footer ul li{flex:1;height:50px;}
.footer ul li a{display:block;width:100%;height:100%;color:#fff;display:flex;flex-direction:column;justify-content:space-around;align-item:center;}

</style>
