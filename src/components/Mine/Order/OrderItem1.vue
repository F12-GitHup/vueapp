<template>
  <div class="order-item">
         <slot name="con">
          <div v-for="(data,index) in oData.childs">
            <!--订单头-->          <!--订单里的childs只有一个的话  就不显示头部-->
            <div class="item-header" v-if="oData.child_num=='1'?false:true">
              <div class="order-num">拆分子单：<span class="num">{{data.suborder_id}}</span>
              </div>
              <span class="order-h-right">{{data.order_status}}</span>
            </div>
            <!--订单body-->                <!--再二次循环childs里面的goods-->
            <div class="item-body" v-for="(elem,i) in data.goods">
              <div>
                <router-link :to="{path:'/detail',query:{id:elem.goods_id}}">
                  <img :src="'http://img4.aolaigo.com/group1/'+elem.goods_img" alt="" class="goods-img">
                  <div class="item-body-r">
                    <div class="goods-name">
                      {{elem.goods_title}}
                    </div>
                    <div class="styles">
                      <span class="style1">{{elem.goods_attr}}</span>
                      <span class="style2"></span>
                      <div class="goods-num">x{{elem.goods_amount}}</div>
                    </div>
                  </div>

                </router-link>
              </div>
            </div>
          </div>

        </slot>
  </div>
 
</template>

<script>
export default {
  name: 'order-item',
  data () {
    return {
      
    }
  },
  methods: {
    
  },
  props:{
    oData:Object
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-header{
  height:50px;
  width:100%;
  box-sizing:border-box;
  line-height:50px;
  padding:0 20px;
}
.order-num{
  float:left;
}
.order-h-right{
  float:right;
  color:red
}
.item-body{
  padding:15px 0 15px 15px;
  border-top:1px solid #eee;
  border-bottom:1px solid #eee;
  overflow:hidden
}
.goods-img{
  width:90px;
  height:90px;
  float:left;
  border:1px solid #eee;
}
.item-body-r{
  width:100%;
  height:100%;
  text-align:left
}
.goods-name{
  padding:0 15px;
  height:30px;
  overflow:hidden;
  line-height:14px;
}
.styles{
  margin-top:15px;
  line-height:15px;
  color:#aaa
}
.style1{
  float:left;
  margin-left:15px;
}
.style2{
  float:left;
  margin-left:30px;
}
.goods-num{
  float:right;
  margin-right:15px;
}
</style>
