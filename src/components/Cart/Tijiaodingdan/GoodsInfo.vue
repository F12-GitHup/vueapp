<template>
  <div class="goodsinfo">
    <div class=" goodsTitle">
      <span class="goodsTitle-left">商品清单</span>
      <div class=" goodsNum">
        数量:<span class="goodsNumRed">{{orderData.goods_num}}</span>
        赠品:<span class="goodsNumRed">0</span>
      </div>
    </div>
    <div class="weui_panel " >

      <div class="weui_panel_bd">

        <div class="goodsCell"  v-for="(ele,index) in orderData.goods_groups" :key="index">
          <div class="weui_media_box " >
            <div class="weui_media_hd">
              <a href="?skuId=10600677012066">
                <img class="weui_media_appmsg_thumb" :src="'http://img3.aolaigo.com/group1/'+ele[0].img">
              </a>
            </div>
            <div class="weui_media_bd">
              <h4 class="weui_media_title">
                <span class=" zy">自营</span>
                <span class="" v-if="ele[0].pro_area">[支持{{ele[0].pro_area}}自提] </span>
                {{ele[0].name}}
              </h4>
              <p class="weui_media_desc ">
                <span class=""> {{ele[0].attrs}}</span>
                <span class="">¥<span class="goodsNumRed">{{ele[0].total_money}}</span>x{{ele[0].num}}</span>
              </p>
              <p class="weui_media_desc">
                <span><span v-show="ele[0].pref_money">-¥<span class="goodsNumRed">{{ele[0].pref_money}}</span></span></span>
                <span>计：¥<span class="goodsNumRed">{{ele[0].last_money}}</span></span>
              </p>
            </div>
          </div>
          <div class="goods-ziti" >

            <div class="weui_cells " v-if="ele[0].pro_area">
              <a class="weui_cell" href="javascript:;" data-target="#skuid10600677012066">
                <div class="lineOne ">
                  <p class="we-ps" >可选择{{ele[0].pro_area}}自提</p>
                  <p class="we-zt"></p>
                </div>
                <div class="weui_cell_ft"></div>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
    <div class=" getMore"><i class="iconfont icon-xiangshang1"></i>收起</div>


  </div>
</template>

<script>
export default {
  props:{
    orderData:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.goodsinfo{
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 10px;
  color: #666;
}
.goodsTitle {
  font-size: 14px;
  padding: 5px 15px;
  border-bottom: dashed 1px #c4c4c4;
  clear: both;
  overflow: hidden;
}
  .goodsTitle-left{
    float: left;
  }
.goodsNum{
  float: right;
}
.goodsNumRed{
  color: #d61518;
}
.weui_panel {
  background-color: #fff;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  overflow: hidden;
  height: auto;
}
.goodsCell {
  position: relative;
  border-bottom: 1px solid #e5e5e5;
}
.weui_media_box {
  padding: 15px;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.weui_media_hd {
  margin-right: .8em;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.weui_media_appmsg_thumb {
  width: 100%;
  max-height: 100%;
  vertical-align: top;
}
.weui_media_bd {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
}
.weui_media_title {
  font-size: 14px;
  font-weight: 400;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  word-wrap: break-word;
  word-break: break-all;
}
.weui_media_title .zy {
  background-color: #d61518;
  color: #fff;
  font-size: 12px;
  padding: 2px;
}
.weui_media_desc {
  color: #666;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-bottom: 5px;
  margin-top: 5px;
}
.weui_cells {
  background-color: #fff;
  line-height: 1.41176471;
  overflow: hidden;
  position: relative;
  font-size: 13px;


}
.weui_cell:not(.no_access) {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  color: inherit;
}
.weui_cell {
  padding: 10px 15px;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
}
.lineOne {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.weui_cell_ft {
  text-align: right;
  color: #888;
}
  .goods-ziti{
    width:100%;
    text-align: left;
  }
.getMore {
  border-bottom: dashed 1px #c4c4c4;
  font-size: 14px;
  padding: 5px 15px;
}

 .weui_cell_ft:after {
  content: " ";
  display: inline-block;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  height: 6px;
  width: 6px;
  border-width: 2px 2px 0 0;
  border-color: #c8c8cd;
  border-style: solid;
  position: relative;
  top: -2px;
  margin-left: .3em;
}
</style>
