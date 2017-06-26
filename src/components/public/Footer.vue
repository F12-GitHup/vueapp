<template>
  <div class="footer">

    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item id="首页" href="#/">
       <i class="iconfont icon-zhuye1"></i><span>首页</span>
      </mt-tab-item>
      <mt-tab-item id="欧瑟奢品" href="#/list">
      <i class="iconfont icon-unie632"></i><span>欧瑟奢品</span>
      </mt-tab-item>
      <mt-tab-item id="人气优品" href="#/list">
      <i class="iconfont icon-huo1"></i><span>人气优品</span>
      </mt-tab-item>
      <mt-tab-item id="购物车" href="#/cart">
       <i class="iconfont icon-gouwuche"></i><span>购物车</span>
      </mt-tab-item>
      <mt-tab-item id="我的" href="#/mine">
       <i class="iconfont icon-geren-copy"></i><span>我的</span>
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: 'my-footer',
  data () {
    return {
      selected:"首页"
    }
  },
  methods:{
    fnAction(){
      this.sheetVisible=true;
    }
  },
  props:{
    footerData:{
      type:Array,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{margin:0;padding:0}
li{list-style:none;}
.mint-tabbar > .mint-tab-item.is-selected  {
  background-color: #fff;
  color: #d61518;
}
.mint-tabbar > .mint-tab-item.is-selected i{
  padding-top:9px;
}
span{
  display: block;
  padding-top:4px;
  padding-bottom:10px;
}
i{
  font-size: 24px;
  padding-top:10px;
  display: block;

}
.mint-tabbar{
  background-color: #fff;
  box-sizing: border-box;
}
</style>
