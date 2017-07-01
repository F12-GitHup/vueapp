<template>
  <div class="for-you">
    <div class="top">
      <span class="line"></span>
      <span class="tuijian">
        <i class="iconfont icon-chevron-up"></i><span>为你推荐</span>
      </span>
    </div>

    <div class="for-list">
      <ul>
        <li v-for="(data,index) in listData" key="index"
           class="list-item" >
          <router-link :to="{path:'/detail',query: {id:data['sku_id']}}">
            <img :src="'http://img4.aolaigo.com/group1/'+data['product_image']" alt="">
            <p class="goods-name">{{data['product_name']}}</p>
            <div class="price">
              <span class="p-price">￥{{data['p_price']}}</span>
              <del class="m-price">￥{{data['m_price']}}</del>
              <i class="iconfont icon-shoucang"></i>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
 
</template>

<script>
export default {
  name: 'for-you',
  data () {
    return {
      listData:[]
    }
  },
  methods: {
    
  },
  mounted(){
    var params = JSON.stringify({"opt":7,"cmd":2,"page_index":1,"page_size":10,"os":"wap","uid":"hs20162285188","uname":"17610859110","code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FD1F959A283EEE1D61787033022FA7CCA6B3FD919E975F78EFFFAD22D2BE21F5F2DA6795AD8187C9F1D12248FF4F1D996BF89B4A8FFDABBFDF","imei":"dasd1223423we","time_stamp":1498526615023,"crc":"eb0988271e5282f966543cdf73aaf7d8"})
    this.$http.post('/member',params,{
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      }
    }).then(res=>{
      console.log(res)
      
      this.listData = res.body.data.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.top{
  position:relative;
  width:90%;
  height:40px;
  margin:0 5%;
}
.top .line{
  position:absolute;
  top:50%;
  left:0;
  display:block;
  width:100%;
  height:0;
  border-top:1px solid #ccc;
}
.top .tuijian{
  position:absolute;
  top:11px;
  left:35%;
  width:100px;
  text-align:center;
  background:#eee;
  font-size:14px;
}

.for-list ul{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  align-content:flex-start
}
.for-list .list-item{
  width:48%;
  font-size:12px;
  background:#FFF;
  margin-top:6px;
}
.for-list .list-item img{
  width:140px;
  height:150px;
}
.p-price{
  color:red;
  font-weight:900
}
.list-item{
  position:relative;
  padding-bottom:20px;
}
.list-item .iconfont{
  color:red;
  float:right
}
.price{
  position:absolute;
  bottom:0;
  left:0;
  width:100%
}
</style>
