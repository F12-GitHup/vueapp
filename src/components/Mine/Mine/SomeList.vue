<template>
  <div class="some-list">
    <ul>
        <li class="item collect">
          <i ></i><span>收藏</span>
        </li>
        <li class="item foot">
          <i></i><span>足记</span>
        </li>
        <li class="item youhui">
          <i></i><span>优惠券</span>
        </li>
        <li class="item kefu">
          <i ></i><span>客服与反馈</span>
        </li>
        <li class="item top100">
          <i></i><span>排行榜</span>
        </li>
    </ul>
  </div>
 
</template>

<script>
export default {
  name: 'some-list',
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.some-list{
  margin:10px 0;
  font-size:12px;
  text-align:center;
  background:#fff;
  height:75px;
}
.some-list ul .item{
  float:left;
  width:20%;
  height:75px;
  box-sizing:border-box;
  border-left:1px solid #eee
}
.some-list ul .item i{
  display:block;
  width:30px;
  height:30px;
  margin:15px auto 5px;
  
}
.collect i{
  background:url("http://m.aolaigo.com/app/image/core-sheet.png") no-repeat;
  background-size: 360px;
  background-position: 0 0;
}
.foot i{
  background:url("http://m.aolaigo.com/app/image/core-sheet.png") no-repeat;
  background-size: 360px;
  background-position: -30px 0;
}
.youhui i{
  background:url("http://m.aolaigo.com/app/image/core-sheet.png") no-repeat;
  background-size: 360px;
  background-position: -60px 0;
}
.kefu i{
  background:url("http://m.aolaigo.com/app/image/core-sheet.png") no-repeat;
  background-size: 360px;
  background-position: -90px 0;
}
.top100 i{
  background:url("http://m.aolaigo.com/app/image/core-sheet.png") no-repeat;
  background-size: 360px;
  background-position: -120px 0;
}

</style>
