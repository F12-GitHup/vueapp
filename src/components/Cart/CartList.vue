<template>
  <div>
    <!--头部组件-->
    <my-header>
      <a href="javascript:;" slot="tit">购物车</a>
      <a href="javascript:;" slot="right" @click='doWrite' >                                    <i class="iconfont" :class="write.state?' noCheckAll':'icon-duihao writeShow'" v-show="!write.state"></i> <p v-show="write.state">编辑</p></a>
    </my-header>
    <!--购物车商品列表-->

    <div class="bg-white">
      <ul class=" cartProjs" >
        <li v-for="(ele,index) in cartData" :key="index"
            ref="cart-list" >  <!--遍历添加数据-->
          <div class="cartProjBlock father-flex">
            <div class="cartProjSelect" >
              <!--编辑购物车开关，状态值开关控制样式类名的添加-->
              <i class="iconfont"  @click='checkO(index)'
                 :class="isCheckall.state?' noCheckAll':'icon-duihao1 colorRed1'"
                 :isCheckall='isCheckall' :id='index' ref='items'></i>
            </div>
            <div class="cartProjImg">
              <router-link :to="{path:'/detail',query: {id:ele.goods_id}}">

                <img :src="ele.goods_img">
              </router-link>
            </div>
            <div class="cartProjContent ">
              <div class="cartProjName ">
                <a class="colorGray3" href="product-detail.html?skuId=50600677012588">
             <!--v-if判断有无saleareaname，是否展示[支持{{ele.saleareaname}}自提]-->
                  <span class="ziti" v-if="ele.saleareaname">[支持{{ele.saleareaname}}自提]</span>
                  {{ele.goods_title}}
                </a>
              </div>
              <div class="cartProjType ">
                {{ele.goods_attr}}
              </div>
              <div class="cartProjPrice ">
                <div class="child-flex1">
                  <div class="sprice ">￥ {{ele.goods_default}}</div>
                </div>
                <div class="cartProjNum">
                  <span class=" " @click="changeNum(1,index,ele.store)"
                        :class="write.state?'doNum':'addNum '"
                  >+</span>
                  <div class="num" > {{ele.goods_amount}}</div>
                  <span class=" " @click="changeNum(-1,index,ele.store)"
                        :class="write.state?'doNum':'addNum '"
                  >-</span>
                  <div class="stocks">库存<span class="store">{{ele.store}}</span>件</div>
                </div>
              </div>
            </div>
          </div>
          <div class=" youhui-where">
            <div class="textCenter " style="width:130px;"></div>
            <div class="child-flex1"></div>
          </div>
        </li>
      </ul>
      <div class="mass" style="display:none;" data-maincode="787145"> </div>
    </div>

<!--结算-->
    <div class="gotoOrderBar " v-show="write.state">
      <div class="selectAll  " @click='checkall' >
        <i  class="iconfont"
           :class="isCheckall.state?' noCheckAll':'icon-duihao1 colorRed1'"
        ></i>
        全选
      </div>
      <div class="realTotal " style="line-height: 39px;">
        <div class="realTotal-r " v-if="!isCheckall.state">合计：￥{{totalPrice}}</div>
        <div class="realTotal-r " v-if="isCheckall.state" >合计：￥{{Price}}</div>
        <div class="youhuiDetail " style="display:none"></div>
      </div>
      <a class="toSubmitBtn" @click="goBuy" >去结算</a>
    </div>
    <!--收藏、删除-->
    <div class="editBar " v-show="!write.state">
      <div class="selectAll  " @click='checkall'>
        <i  class="iconfont"
            :class="isCheckall.state?' noCheckAll':'icon-duihao1 colorRed1'"
        ></i>
        全选
      </div>
      <div class=" editBtn ">
        <span class="favourite" @click="shoucang" >收藏 </span>
        <span class="deleteGoods" @click="changeNum(0)">删除</span>
      </div>
    </div>

  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  import { Toast } from 'mint-ui';
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
        isCheckall:{state:true},//全选状态值
        write:{state:true},//编辑开关状态值
        Price:0,
        totalPrice:0,
        flag:true,//单选状态值

      }
    },
//各种方法
  methods:{
//    去结算方法，遍历cartData中被选中的置"goods_selected":"1"未被选中的置"goods_selected":"0"存放到arr中，作为参数传送
    goBuy(){
      var obj={}
      var arr=[]
      var that=this
      //下面函数体中this要改变，提前存放到that中，还可以用箭头函数方式防止this指向改变
      this.cartData.forEach(function(ele,index) {
//        通过res方式找到每个绑定的i标签判断类名的个数确定是否被选中
        if(that.$refs.items[index].classList.length==3){
          obj={"cart_main_code":ele.cart_main_code,"cart_detail_code":ele.cart_detail_code,"goods_selected":"1"}
//          被选中的push到arr中
          arr.push(obj)
        }else{
          obj={"cart_main_code":ele.cart_main_code,"cart_detail_code":ele.cart_detail_code,"goods_selected":"0"}
          //          未被选中的push到arr中
          arr.push(obj)
        }
      })
//把要传送的参数变成json格式传送
      var cartParams = JSON.stringify({"opt":"5","cmd":"4","v":"1","is_login":"1","goods_code":arr,"os":"wap","uid":localStorage.uid,"uname":localStorage.username,"code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FDFEF74D70FBE38A8FC2D54883132175A032A57C54CA2A79E6DF0AF654BB9245D2D71AF3828601E17F206EF2A69DACA85F92BB1735F22B2533","imei":"dasd1223423we","time_stamp":1498617702987,"crc":"2bc9d8cefb58587f909c2eac8191c3f7"})
      this.$http.post("/mobilecart.ashx",cartParams,{
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        }
      }).then(res=>{
        console.log("提交成功")
      });

//      传送到订单信息中，还未实现
      var cartParams = JSON.stringify({"opt":"6","cmd":"0","os":"wap","uid":localStorage.uid,"uname":localStorage.username,"goods_code":arr,"code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FDD0B008D831BDA9DB2467635753A389A15F0F47CB22073DBFF1C74612306C12D55F874D2B49DEBA6D8C446AADC609E6D92734112729B12FB6","imei":"dasd1223423we","time_stamp":1498632931270,"crc":"84c1c09ceef94208b1ec120ff3456cf8"})
      this.$http.post("/ordersubmitpageaapi_new.ashx",cartParams,{
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        }
      }).then(res=>{
        console.log(res.data.data)
        console.log(res.data.data.goods_groups)
        this.orderData=res.data
      });
//跳转到订单页面
      window.location.href="#/tijiaodingdan"
    },
//    收藏方法，把被选中的goods_id存放到arr中作为参数传送
    shoucang(){
        var arr=[]
        var that=this
      //下面函数体中this要改变，提前存放到that中，还可以用箭头函数方式防止this指向改变
        this.cartData.forEach(function(ele,index) {
          if(that.$refs.items[index].classList.length==3){
            arr.push(ele.goods_id)
          }
        })
//      判断是否一个没选
      if(arr.length!=0){
        var cartParams = JSON.stringify({"opt":"5","cmd":"18","v":"1","is_login":"1","goods_id_list":arr,"os":"wap","uid":localStorage.uid,"uname":localStorage.username,"code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FD77A469454430C90E8BF2D55D897A597CE4FF1B68AD11EA3B311FD49BB74E668F2FC521413025F9ED5F450A6A64453AF5C92C4D1E72A86D23","imei":"dasd1223423we","time_stamp":1498566264528,"crc":"ca26dd93529c3c5ad413fe55c112b6b4"})
        this.$http.post("/mobilecart.ashx",cartParams,{
          headers:{
            "Content-Type":"application/x-www-form-urlencoded"
          }
        }).then(res=>{

          Toast({
            message: '收藏成功',
            iconClass: 'icon icon-success'
          });
        });
      }else{
        alert("请选择商品")
      }
    },
//    改变购物车中商品数量的方法
    changeNum(type,index,store){
      if(type){
        var num = this.cartData[index].goods_amount*1;
        if(this.cartData[index].goods_amount==1&&type==-1){
          return
        }else{
          if(num<store){
            this.cartData[index].goods_amount=num+type;
          }else if(type==-1){
            this.cartData[index].goods_amount=num+type;
          }

        }
      }else{
//        删除商品
        var obj={}
        var arr=[]
        var that=this
        //下面函数体中this要改变，提前存放到that中，还可以用箭头函数方式防止this指向改变
        this.cartData.forEach(function(ele,index) {
          if(that.$refs.items[index].classList.length==3){
//判断被选中的删除

            var el =that.$refs["cart-list"][index];
            el.className = "cart-item itempxove";
            el.addEventListener("animationend",()=>{
              //动画结束以后删除
              this.cartData.splice(0,1,{})
            })
            obj={"cart_main_code":ele.cart_main_code,"cart_detail_code":ele.cart_detail_code,"goods_selected":"1"}
          }
          arr.push(obj)
        })
        var cartParams = JSON.stringify({"opt":"5","cmd":"16","v":"1","is_login":"1","goods_code":arr,"os":"wap","uid":localStorage.uid,"uname":localStorage.username,"code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FD77A469454430C90E8BF2D55D897A597CE4FF1B68AD11EA3B311FD49BB74E668F2FC521413025F9ED5F450A6A64453AF5C92C4D1E72A86D23","imei":"dasd1223423we","time_stamp":1498566264528,"crc":"ca26dd93529c3c5ad413fe55c112b6b4"})
        this.$http.post("/mobilecart.ashx",cartParams,{
          headers:{
            "Content-Type":"application/x-www-form-urlencoded"
          }
        }).then(res=>{

        });
      }
    },
//    单选方法
    checkO(index){
      if(this.flag){
        this.$refs["items"][index].className = "iconfont icon-duihao1 colorRed1 ";

      }else{
        this.$refs["items"][index].className = " noCheckAll ";

      }
      this.flag=!this.flag
          var sum=0
      var num=0
        var that=this
        //下面函数体中this要改变，提前存放到that中，还可以用箭头函数方式防止this指向改变
        this.cartData.forEach(function(ele,index) {
//        通过res方式找到每个绑定的i标签判断类名的个数确定是否被选中
          if(that.$refs.items[index].classList.length==3){
            sum+= that.cartData[index].goods_pice * that.cartData[index].goods_amount
          }
          if(that.$refs.items[index].classList.length==3){
           num++
          }
        })
          if(num==this.cartData.length){
            console.log(num)
            console.log(this.cartData.length)
            this.isCheckall.state=false
          }else{
            this.isCheckall.state=true

          }
        this.Price=parseInt(sum)


    },
//    全选方法
    checkall(){
      this.Price=0
      var sum = 0;
      var that=this;
      //下面函数体中this要改变，提前存放到that中，还可以用箭头函数方式防止this指向改变
      this.$refs.items.forEach(function(item,index){
//        保存初始状态值
        item.isCheck=that.isCheckall.state
//        选中之后商品总价
        if(item.isCheck){
          sum += that.cartData[index].goods_pice * that.cartData[index].goods_amount;
        }
      })

     this.totalPrice=parseInt(sum)
//      点击切换状态值
      this.flag=false
      this.isCheckall.state=!this.isCheckall.state;
    },
//    编辑的方法
    doWrite(){
      //      点击切换状态值
      this.write.state=!this.write.state;
//      点击操作对号完成时，进行上传操作
      if(this.write.state){
        var obj={}
        var arr=[]
        this.cartData.forEach(function(ele,index) {
           obj={"cart_main_code":ele.cart_main_code,"cart_detail_code":ele.cart_detail_code,"buy_qty":ele.goods_amount}
           arr.push(obj)
        })
        var cartParams = JSON.stringify({"opt":"5","cmd":"13","v":"1","is_login":"1","goods_code":arr,"os":"wap","uid":localStorage.uid,"uname":localStorage.username,"code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FD0C361839089615CA4E4287DEF36349762F2D689059976B735D1ED7F9818C9AF86F01D0B4D8389820DF02ADF82172E09C71F398409C0D87BB","imei":"dasd1223423we","time_stamp":1498556673405,"crc":"4683cb6eac030ed282308aec321724f6"})
        this.$http.post("/mobilecart.ashx",cartParams,{
          headers:{
            "Content-Type":"application/x-www-form-urlencoded"
          }
        }).then(res=>{
        });
      }
    },
  },
}
</script>
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
    margin-bottom: 110px;
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
