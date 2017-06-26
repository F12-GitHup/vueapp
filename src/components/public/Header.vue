<template>
  <div class="header">
   <ul>
      <li><slot name="left"></slot></li>
      <li><slot name="tit"></slot></li>
      <li><slot name="right"></slot></li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{margin:0;padding:0;}
li{list-style:none;}
.header {
   position:fixed; left:0; top:0; width:100%; height:44px; line-height:44px;border-bottom:1px solid #666;background:skyblue;z-index:10;
}
.header ul{display:flex;}
.header ul li{flex:1;}
.header ul li a{color:#fff;font-size:16px;}
</style>
