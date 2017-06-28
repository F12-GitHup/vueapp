<template>
  <div>
    <my-header>
      <a href="javascript:;" slot="tit">购物车</a>
      <a href="javascript:;" slot="right" @click='doWrite' >                                    <i class="iconfont" :class="write.state?' noCheckAll':'icon-duihao writeShow'" v-show="!write.state"></i> <p v-show="write.state">编辑</p></a>
    </my-header>
    <div class="bg-white">
      <ul class=" cartProjs" >
        <li v-for="(ele,index) in cartData" :key="index"
            ref="cart-list"
        >
          <div class="cartProjBlock father-flex">
            <div class="cartProjSelect" >
              <i class="iconfont"  @click='checkO(index)'
                 :class="isCheckall.state?' noCheckAll':'icon-duihao1 colorRed1'"
                 :isCheckall='isCheckall' :id='index' ref='items'

              ></i>
            </div>
            <div class="cartProjImg">
              <a href="product-detail.html?skuId=50600677012588">
                <img :src="ele.goods_img">
              </a>
            </div>
            <div class="cartProjContent ">
              <div class="cartProjName ">
                <!--<span class="bname">法涵意弛</span>秋季款时尚修身百皱裙-->
                <a class="colorGray3" href="product-detail.html?skuId=50600677012588">
                  <span class="ziti">[支持深圳自提]</span>
                  {{ele.goods_title}}
                </a>
              </div>
              <div class="cartProjType ">
                <!--<span>颜色：蓝白条纹</span><span>尺码：28/L</span>-->
                {{ele.goods_attr}}
              </div>
              <div class="cartProjPrice ">
                <div class="child-flex1">
                  <div class="sprice ">￥ {{ele.goods_default}}</div>
                </div>
                <div class="cartProjNum">
                  <span class=" " @click="changeNum(1,index)"
                        :class="write.state?'doNum':'addNum '"
                  >+</span>
                  <div class="num" > {{ele.goods_amount}}</div>
                  <span class=" " @click="changeNum(-1,index)"
                        :class="write.state?'doNum':'addNum '"
                  >-</span>
                  <div class="stocks">库存<span class="store">{{ele.store}}</span>件</div>
                </div>
              </div>
            </div>
          </div>
          <div class=" youhui-where">
            <div class="textCenter " style="width:130px;">
            </div>
            <div class="child-flex1">

            </div>
          </div>
        </li>
      </ul>
      <div class="mass" style="display:none;" data-maincode="787145">

      </div>

    </div>


    <div class="gotoOrderBar " v-show="write.state">
      <div class="selectAll  " @click='checkall' >
        <i  class="iconfont"
           :class="isCheckall.state?' noCheckAll':'icon-duihao1 colorRed1'"
        ></i>
        全选
      </div>
      <div class="realTotal " style="line-height: 39px;">
        <div class="realTotal-r ">合计：￥{{totalPrice}}</div>
        <div class="realTotal-y "></div>
        <div class="youhuiDetail " style="display:none"></div>
      </div>
      <a class="toSubmitBtn" href="#/tijiaodingdan">去结算</a>
    </div>
    <div class="editBar " v-show="!write.state">
      <div class="selectAll  " @click='checkall'>
        <i  class="iconfont"
            :class="isCheckall.state?' noCheckAll':'icon-duihao1 colorRed1'"
        ></i>
        全选
      </div>
      <div class=" editBtn ">
        <span class="favourite" @click="shoucang">收藏</span>
        <span class="deleteGoods" @click="changeNum(0)">删除</span>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'my-cart-list',
  props:{
    cartData:{
      type:Array,
      default(){
          return []
      }
    }
  },
    data(){
      return{
        isCheckall:{state:true},
        write:{state:true},
        totalPrice:0,
        flag:true
      }
    },
  methods:{
    shoucang(){
        var arr=[]
        var that=this
        this.cartData.forEach(function(ele,index) {
          console.log(that.$refs.items[index].classList.length)
          if(that.$refs.items[index].classList.length==3){
            console.log(ele.goods_id)
            arr.push(ele.goods_id)
          }
        })
        var cartParams = JSON.stringify({"opt":"5","cmd":"18","v":"1","is_login":"1","goods_id_list":arr,"os":"wap","uid":"hs20162285188","uname":"17610859110","code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FD77A469454430C90E8BF2D55D897A597CE4FF1B68AD11EA3B311FD49BB74E668F2FC521413025F9ED5F450A6A64453AF5C92C4D1E72A86D23","imei":"dasd1223423we","time_stamp":1498566264528,"crc":"ca26dd93529c3c5ad413fe55c112b6b4"})
        this.$http.post("/mobilecart.ashx",cartParams,{
          headers:{
            "Content-Type":"application/x-www-form-urlencoded"
          }
        }).then(res=>{
        console.log("收藏成功")
        });
    },
    changeNum(type,index){
      if(type){
        var num = this.cartData[index].goods_amount*1;
        var id = this.cartData[index].goods_id;
        if(this.cartData[index].goods_amount==1&&type==-1){
          return
        }else{
          this.cartData[index].goods_amount=num+type;
        }
      }else{
        var obj={}
        var arr=[]
        var that=this
        this.cartData.forEach(function(ele,index) {
          if(that.$refs.items[index].classList.length==3){

            obj={"cart_main_code":ele.cart_main_code,"cart_detail_code":ele.cart_detail_code,"goods_selected":"1"}
          }

          arr.push(obj)
        })
        var cartParams = JSON.stringify({"opt":"5","cmd":"16","v":"1","is_login":"1","goods_code":arr,"os":"wap","uid":"hs20162285188","uname":"17610859110","code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FD77A469454430C90E8BF2D55D897A597CE4FF1B68AD11EA3B311FD49BB74E668F2FC521413025F9ED5F450A6A64453AF5C92C4D1E72A86D23","imei":"dasd1223423we","time_stamp":1498566264528,"crc":"ca26dd93529c3c5ad413fe55c112b6b4"})
        this.$http.post("/mobilecart.ashx",cartParams,{
          headers:{
            "Content-Type":"application/x-www-form-urlencoded"
          }
        }).then(res=>{
          console.log(res.data)
          console.log(this.$refs["cart-list"])

          var el =this.$refs["cart-list"][0];
          el.className = "cart-item itemRemove";
          el.addEventListener("animationend",()=>{
            //动画结束以后删除
            this.cartData.splice(0,1,{})
          })
        });
      }
    },
    checkO(index){
      console.log( this.$refs["items"][index])
      console.log( 1)
      if(this.flag){
        this.$refs["items"][index].className = "iconfont icon-duihao1 colorRed1 ";
        this.flag=!this.flag
      }else{
        this.$refs["items"][index].className = " noCheckAll ";
//        this.$refs["items"][index].removeClass("iconfont icon-duihao1 colorRed1")
        this.flag=!this.flag
      }

    },
    checkall(){
      var sum = 0;
      console.log(this.$refs.items)
      var that=this;
      this.$refs.items.forEach(function(item,index){
        item.isCheck=that.isCheckall.state
        if(item.isCheck){
          sum += that.cartData[index].goods_pice * that.cartData[index].goods_amount;
        }else{
        }
      })
     this.totalPrice=parseInt(sum)
      console.log(sum)
      this.isCheckall.state=!this.isCheckall.state;
    },
    check(){
    },

    doWrite(){
      console.log(1)
      this.write.state=!this.write.state;

      if(this.write.state){
        var obj={}
        var arr=[]
        this.cartData.forEach(function(ele,index) {
           obj={"cart_main_code":ele.cart_main_code,"cart_detail_code":ele.cart_detail_code,"buy_qty":ele.goods_amount}
           arr.push(obj)
        })
        var cartParams = JSON.stringify({"opt":"5","cmd":"13","v":"1","is_login":"1","goods_code":arr,"os":"wap","uid":"hs20162285188","uname":"17610859110","code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FD0C361839089615CA4E4287DEF36349762F2D689059976B735D1ED7F9818C9AF86F01D0B4D8389820DF02ADF82172E09C71F398409C0D87BB","imei":"dasd1223423we","time_stamp":1498556673405,"crc":"4683cb6eac030ed282308aec321724f6"})
        this.$http.post("/mobilecart.ashx",cartParams,{
          headers:{
            "Content-Type":"application/x-www-form-urlencoded"
          }
        }).then(res=>{

        });

      }
    },



  },
  mounted(){


  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .doNum{
    display: none;
  }
  .headerRight .writeShow{
    display: block;
  }
  .check-active{
    display: block;
  }
  .noCheckAll{
    width:14px;
    height:14px;
    border-radius: 50%;
    border:1px solid #666;
    display: inline-block;
    margin-right: 5px;
  }

  .bg-white{
    background-color: #fff;
    padding-top: 10px;
    width:100%;
  }
  .cartProjs {
    padding: 0 15px;
  }
  .cartProjs li {
    padding: 10px 0;
    border-bottom: solid 1px #e8e8e8;
    overflow: hidden;
  }
  .father-flex {
    display: -moz-box;
    display: -webkit-box;
  }
  .cartProjSelect, .editProjSelect, .nogoodsStatus {
    height: 90px;
    line-height: 90px;
    padding-right: 5px;
  }
  .colorRed1 {
    color: #d61518;
  }
  .cartProjImg, .cartProjImg>a>img {
    width: 90px;
    height: 90px;
  }
  .cartProjContent {
    box-sizing: border-box;
    margin-left: 10px;
    -webkit-box-flex: 1;
  }
  .cartProjName {
    font-size: 14px;
    font-weight: 600;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    color: #333;
  }
  .ziti {
    font-size: 13px;
    font-weight: 500;
  }
  .cartProjType {
    font-size: 12px;
    margin-top: 5px;
    color: #797979;
    text-align: left;
  }
  .cartProjPrice {
    position: relative;
    bottom: 0;
    display: -webkit-box;
    text-align: left;
  }
  .child-flex1 {
    -moz-box-flex: 1;
    -webkit-box-flex: 1;
    box-flex: 1;
  }
  .sprice {
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    color: #d61518;
  }
  .cartProjNum {
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
  }
  .cartProjPrice span.addNum {
    border-left: 0;
    /*display: none;*/
    border: solid 1px #e8e8e8;
    font-size: 14px;
    padding: 0 5px;
    margin: 0;
    vertical-align: middle;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    float: right;
  }
  .num {
    border: solid 1px #e8e8e8;
    float: right;
    font-size: 14px;
    min-width: 40px;
  }
  .cartProjPrice span.subNum {
    border-right: 0;
    /*display: none;*/
    border: solid 1px #e8e8e8;
    font-size: 14px;
    padding: 0 5px;
    margin: 0;
    vertical-align: middle;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    float: right;
  }
  .stocks {
    font-size: 12px;
    color: #8c8c8c;
    clear: both;
  }
  .cartProjPrice span {
    margin-right: 5px;
    vertical-align: middle;
  }
  .youhui-where {
    font-size: 12px;
    color: #d61518;
    display: -webkit-box;
    margin-top: 5px;
  }
  .textCenter {
    text-align: center;
    width: 130px;
  }

  .gotoOrderBar {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 60px;
    background: linear-gradient(#fff,#f4f4f4);
    border-top: solid 1px #e8e8e8;
  }
   .selectAll {
    height: 50px;
    padding: 0 15px;
    line-height: 50px;
     float: left;
     color: #333;
  }
  .colorRed1 {
    color: #d61518;
    margin-right: 5px;
  }
  .realTotal {
    height: 50px;
    line-height: 20px;
    position: relative;
    line-height: 39px;
    float: left;
  }
  .realTotal-r {
    font-size: 14px;
    font-weight: 600;
    margin-top: 5px;
    color: #d61518;
  }
  .realTotal-y {
    font-size: 12px;
    border: solid 1px #e8e8e8;
    float: left;
    background-color: #fff;
    padding-right: 5px;
    color: #666;
  }
  .toSubmitBtn {
    height: 50px;
    background-color: #d61518;
    color: #fff;
    line-height: 50px;
    font-size: 16px;
    font-weight: 600;
    float: right;
    padding-right: 20px;
    padding-left: 20px;
  }
  .editBar {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 60px;
    background: linear-gradient(#fff,#f4f4f4);
    display: block;
    border-top: solid 1px #e8e8e8;
  }
  .editBtn {
    line-height: 25px;
    float: right;
    color: #666;
  }
  .editBtn span {
    display: inline-block;
    height: 25px;
    padding: 5px 15px;
    border: solid 1px #e8e8e8;
    border-radius: 5px;
    float: left;
    margin: 7px 10px 0 0;
    font-size: 14px;
  }
  .editBtn span {
    display: inline-block;
    height: 25px;
    padding: 5px 15px;
    border: solid 1px #e8e8e8;
    border-radius: 5px;
    float: left;
    margin: 7px 10px 0 0;
    font-size: 14px;
  }
</style>
