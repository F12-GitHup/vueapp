<template>
  <div>
    <ul class="cart-list">
        <li class="item" v-for="(ele,index) in cartData" :ref="'item'+index" v-if="ele.number">
                    <img :src="ele.goodsListImg" alt="">
                    <div class="info">
                    <p class="pro"> {{ele.goodsName}}</p>
                    <p>{{ele.className}}</p>
                    <p class="price">￥{{ele.price}}</p>
                    <div class="numBox">
                        <span class="decrese" @click="changeNum(-1,ele.goodsID,index)">-</span>
                        <input type="text" class="num" v-model="ele.number"></input>
                        <span class="plus" @click="changeNum(1,ele.goodsID,index)">+</span>
                    </div>
                    </div>
                    <span class="del iconfont" @click="changeNum(0,ele.goodsID,index)">&#xe645;</span>
                </li>   
    </ul>
  </div>
</template>

<script>

export default {
  name: 'cart-list',
  props:{
    cartData:{
      type:Array,
      default(){
          return []
      }
    }
  },
  methods:{
    changeNum(type,goodsID,index){
      //需要调用父组件的方法，传参
      this.$emit("change-num",type,index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     .cart-list .item{width:100%;padding:10px;box-sizing:border-box;display:flex;height:120px;position:relative;border-bottom:1px solid #ccc;}
        .cart-list .item img{width:100px;height:100px;}
        .cart-list .info{flex:1;text-align:left;padding-left:20px;box-sizing:border-box;}
        .info .price{color:#f10}
        .info p{font-size:14px;line-height:20px;}
        .pro{overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}
        .info .numBox{width:150px;border:1px solid #ccc;width:80px;display:flex;border-radius:5px;}
        .decrese,.plus{width:25px;text-align:center;background:#ccc;}
        .num{width:30px;border:none;text-align:center;}
        .cart-list .del{width:30px;height:20px;text-align:center;}

        .cart-item { padding: 10px 0; height:120px; box-sizing:border-box; display: flex}
        .cart-item  img { width: 100px; height: 100px;}
        .cart-item .item-info { flex: 1};
        .cart-item .del { width: 50px;text-align: center; }
        .flex {display: flex;}
        .cart-item .num-wrap { height: 30px;text-align: center;  border: 1px solid #ccc}
        .cart-item .num-btn { width: 30px; }
        .cart-item .num-text { border: 1px solid #ccc; margin: -1px 0;width: 30px; line-height: 30px; height: 30px; text-align: center }
</style>
