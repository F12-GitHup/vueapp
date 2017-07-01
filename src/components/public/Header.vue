<template>
  <div class="header " ref="header">
   <ul>
      <li class="headerBack"><slot name="left" ></slot></li>
      <li class="tit"><slot name="tit" ></slot></li>
      <li class="headerRight"><slot  name="right" ></slot></li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'my-header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{margin:0;padding:0;}
li{list-style:none;}
.header {
   position:fixed; left:0; top:0; width:100%; height:49px;text-align: center; line-height:49px;border-bottom:1px solid #e8e8e8;background:#fff;z-index:10;
}
.header ul{display:flex;}
.header ul li{flex:1;
  height:49px; line-height: 49px;}

.header ul  .tit a{
  font-size: 20px;
  line-height: 50px;
  font-weight: 600;
}
  .headerBack a{
    float: left;
    color: #999;
    line-height: 50px;
    width: 48px;
    font-size: 20px;

  }
  .headerRight a{
    position: absolute;
    right: 20px;
    line-height: 49px;
    font-size: 14px;
  }

</style>
