<template>
  <div>
    <!--加入购物车底部按钮-->
    <div class="detail-footer">
        <ul>
            <li><div class="iconfont">&#xe6a3;</div><a href="javascript:;">客服</a></li>
            <li><div class="iconfont">&#xe609;</div><a href="javascript:;">已收藏</a></li>
            <li><div class="iconfont">&#xe600;</div><a href="#/cart">购物车</a></li>
            <li class="long"><a href="javascript:;" @click="inCartStateChange">加入购物车</a></li>
        </ul>
    </div>

      <!--加入购物车弹出页面-->
      <div  class="in-cart"  v-show="inCartState"><!--判断inCartState的状态值显示隐藏-->
        <div class="weui-popup-overlay"></div>
        <div class="weui-popup-modal">
          <div class="popup-frame">
            <div class="btn-close iconfont icon-cuo " @click="inCartStateChange"></div><!--关闭加入购物车弹出页面按钮-->
        <div class="sku-info">
          <div class="sku-img">
            <img :src="'http://img3.aolaigo.com/group1/'+ele"  v-for="(ele,index) in mateColorurl" v-show="index==colorId" ><!--显示colorId对应的图片-->
          </div>
          <div class="row-title">
            <span class="tag-act"></span>
            {{detailData.name}}
          </div>
          <div class="price">¥{{detailData.sku[0].Sale_Price}}</div>
          <div class="price price-act">¥890.00</div>
        </div>

        <div class="option-group group-color">
          <div class="title">颜色：</div>
          <!--颜色列表-->
          <ul class="option-list">
            <li class="option-item" @click="changeColor(index)" ref="changeColor"
                v-for="(ele,index) in mateColor"
            >{{ele}}</li>
          </ul>
        </div>
        <div class="option-group group-size">
          <div class="title">尺码：</div>
          <!--尺码列表-->
          <ul class="option-list">
            <li @click="changeSize(index,ele.SKUID)" class="option-item"  v-for="(ele,index) in mateSize" ref="changeSize" :key="index"
            :goodsId="ele.SKUID" v-show="ele.Color==mateColor[colorId]&&ele.Stock"

            >{{ele.Size}}</li>

          </ul>
        </div>
            <!--操作数量-->
        <div class="select-num"
             v-for="(ele,index) in mateSize" v-show="index==sizeId">
          <div class="num-title">数量：</div>
          <div class="spinner" data-init="true" data-min="1" data-max="65">
            <div class="dec " @click="changeNum(-1)">-</div>
            <div class="val" v-model="val">{{val}}</div>
            <div class="inc "@click="changeNum(1,ele.Stock)" :num="ele.Stock">+</div>
          </div>
          <div class="stock">1件起售（库存<span>{{ele.Stock}}</span>件）</div>
        </div>
            <!--加入购物车-->
        <div class="bottom-panel">
          <div class="btn-buy" @click="againInCart"></div>
        </div>
          </div>
        </div>
      </div>


    </div>
</template>

<script>
    export default{
        name:"detail-footer",
      data(){
          return {
            inCartState:false,//开关页面的状态值
            val:1,//加入购物车数量
            eelColor:"",//保存的上一个颜色选择li
            eelSize:"",//保存的上一个尺寸选择li
            mateColor:[],//过滤的颜色值数组
            mateColorurl:[],//过滤的颜色值图片地址数组
            mateSize:[],//过滤的尺寸值数组
            id:"",//尺寸值对应的商品的id
            colorId:0,//用于颜色下标的值
             sizeId:0,//用于尺寸下标的值
            inCartStateChangeNum:true//第一次的时候加载修改的数据
          }

      },
//      接收父组件出过来的数据
      props:{
        detailData:Array,
      },
//      各种方法
      methods:{
//        选择颜色的方法
        changeColor(index){
//          找到点击的颜色li标签
          var el =this.$refs["changeColor"][index];
//          如果保存的上一次eelColor为空就不清除active类名
          if(this.eelColor!=""){
            this.eelColor.className = "option-item";
          }
//          为点击的li添加active类名
          el.className = "option-item active";
          this.eelColor=el;// 保存本次点击的li
          this.colorId=index// 改变colorId的值为点击的li下表
        },
//        选择尺寸的方法
        changeSize(index,id){
          var el =this.$refs["changeSize"][index];
            if(this.eelSize!=""){
              this.eelSize.className = "option-item";
            }
          console.log(this.eelSize)
          el.className = "option-item active";
          this.eelSize=el
          console.log(this.eelSize)
          this.id=id;// 改变id为当前点击选择的商品尺寸SKUID
          this.sizeId=index;
          this.val=1// 选择尺寸后让加入购物车的商品数量恢复为1

        },
//        操作加入购物车的数量
        changeNum(type,num){
          if(type==-1&&this.val==1){
            return
          }else if(type==1){
            if(this.val<num){// 当操作的商品数量
              this.val+=1
            }
          }else{
            this.val-=1
          }
        },
//        加入购物车选择页开关的方法
        inCartStateChange(){

          this.inCartState=!this.inCartState
          if(this.inCartStateChangeNum){
            var that=this;
            this.detailData.sku.forEach(function(ele,index) {
              if(that.mateColor.indexOf(ele.Color) == -1){
                that.mateColor.push(ele.Color);
                that.mateColorurl.push(ele.Logo);
                console.log(that.mateColorurl)
              }
              if(that.mateSize.indexOf(ele.Size) == -1){
                that.mateSize.push(ele);
              }
            })
            that.inCartStateChangeNum=false
            console.log(this.mateSize)
            console.log(inCartStateChangeNum)
          }
        },
//        最后加入购物车的方法，传入选中的参数
        againInCart(){
          if(!localStorage.username){
            alert("请登录")
          }else{
          var cartParams = JSON.stringify({"opt":"5","cmd":"1","goodsId": this.id,"goods_amount":this.val,"is_login":"1","os":"wap","uid":localStorage.uid,"uname":localStorage.username,"code":"08012C58D35B65BB1446FA3CAEA4CE49DDFBC877C56D7E7A8F64A82015ED96A876130D05CD5EEFCB2D10B20BAC3E39F1B3E70E27BD94E8A430C7DF80BC549CA66DF4B7DCE676BEA4B751D1A950C78F68A98D7F0233602DC1B750642D4662A2634982DC8EED9281BFA72031C8BD203A8DFC62E56A61FDEE6B074A7501BBA17077D4A7EA982D89F5E5F7E3BC527A73E53BA1135BB86E762FC6381C124386788E03209121017C83B9DB70CA7465A1107CBA6152E81B93FC5A273F30AA4A75220A0096F5092C29F73DE4B1F5ECDA91B20F10E710D0E864D07CE5369FC289F0C35DE747E4582191E6E688B5503C6A6A58B6FDC05F1B05C6E468EB64DDEA0B3CE2DCA4BA0FF7C2BD753F6C0C34C327B18A577A3C8B63142A93F34C9CDBD36DC92B1A8C0AE5B7D0D8B98052","imei":"dasd1223423we","time_stamp":1498726661144,"crc":"5cfd162e4cf5419552d4db1195c6872a"})
          this.$http.post("/mobilecart.ashx",cartParams,{
            headers:{
              "Content-Type":"application/x-www-form-urlencoded"
            }
          }).then(res=>{
            var like=window.confirm("成功加入购物车，需要进入购物车下单吗?");
            if(like==true){
              window.location.href="#/cart"
            }else{
              return
            }
          });
        }
        }
      },
    }
</script>


<style scoped>
  .in-cart .option-group>.option-list>.active{
    background: red;
    color: #fff;
  }
   .detail-footer{width:100%;height:60px;position:fixed;bottom:0;left:0;border-top:1px solid #ccc;text-align:center;}
    .detail-footer ul{width:100%;height:100%;display:flex;}
    .detail-footer ul li{height:100%;flex:1;border-right:1px solid #ccc;background:#fff;}
    .detail-footer ul .iconfont{margin-top:15px;font-size:18px;}
    .detail-footer ul a{font-size:14px;}
    .detail-footer ul .long{flex:2;line-height:60px;background:#f10;}
    .detail-footer ul .long a{ font-size:16px;color:#fff;}
.in-cart{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 999999999;
  text-align: left;
}
   .weui-popup-overlay {
     opacity: 1;
     background-color: rgba(0,0,0,.6);
     -webkit-transition: opacity .3s;
     transition: opacity .3s;
     position: fixed;
     bottom: 0;
     left: 0;
     right: 0;
     width: 100%;
     height: 100%;
     z-index: 10;
   }
   .weui-popup-modal {
     overflow: visible;
     opacity: 1;
     transform: translate3d(0,0,0);
     height: auto;
     width: 100%;
     position: absolute;
     z-index: 100;
     bottom: 0;
     border-radius: 0;
     color: #3d4145;
     transition-duration: .3s;
     background: #EFEFF4;
     transition-property: transform,opacity,-webkit-transform;
   }
   .popup-frame {
     position: relative;
     background-color: #fff;
   }
   .btn-close {
     position: absolute;
     top: -20px;
     right: 13px;
     width: 40px;
     height: 40px;
     -webkit-border-radius: 50%;
     border-radius: 50%;
     font-size: 16px;
     line-height: 40px;
     text-align: center;
     visibility: hidden;
     background-color: #fff;
     visibility: visible;
   }
   .sku-info {
     height: 90px;
     position: relative;
     overflow: hidden;
     pointer-events: none;
     margin-bottom: 25px;
   }
   .popup-frame>.sku-info>.sku-img {
     float: left;
     margin-left: 16px;
     margin-top: 10px;
     width: 70px;
     height: 70px;
     position: relative;
   }
   .sku-info>.sku-img>img {
     display: block;
     width: 100%;
     height: 100%;
   }
   .sku-info>.row-title {
     font-size: 14px;
     color: #333;
     line-height: 21px;
     margin: 11px 16px 0 98px;
     height: 42px;
     overflow: hidden;
   }
   .popup-frame .row-title>.tag-act {
     display: none;
   }
   .row-title>.tag-act {
     font-size: 10px;
     line-height: 10px;
     color: #d61518;
     -webkit-border-radius: 2px;
     border-radius: 2px;
     position: relative;
     padding: 1px 3px;
     vertical-align: middle;
   }
   .sku-info>.price {
     color: #333;
     font-size: 14px;
     margin: 2px 0 0 98px;
   }
   .sku-info>.price-act, .with-act .sku-info>.price {
     display: none;
   }
   .popup-frame>.sku-info:after {
     position: absolute;
     bottom: 0;
     left: 16px;
     right: 16px;
     content: " ";
     height: 1px;
     background-color: #dbdbdb;
     -webkit-transform-origin: bottom;
     transform-origin: bottom;
     -webkit-transform: scaleY(0.5);
     transform: scaleY(0.5);
   }
   .popup-frame>.option-group {
     margin-top: 5px;
     overflow: hidden;
   }
   .option-group>.title {
     margin-left: 25px;
     font-size: 14px;
     line-height: 25px;
     color: #333;
     display: inline-block;
   }
   .option-group>.option-list {
     overflow: hidden;
     margin-left: 69px;
     font-size: 12px;
     display: inline-block;

   }
   .option-group>.option-list>.option-item {
     float: left;
     min-width: 95px;
     padding: 0 16px;
     -webkit-box-sizing: border-box;
     box-sizing: border-box;
     height: 25px;
     line-height: 25px;
     text-align: center;
     color: #666;
     background-color: #fff;
     margin-right: 50px;
     margin-bottom: 15px;
     position: relative;
     overflow: hidden;
   }
   .option-group>.option-list>.option-item:after {
     content: " ";
     position: absolute;
     left: 0;
     top: 0;
     width: 200%;
     height: 200%;
     border: 1px solid #666;
     -webkit-transform-origin: top left;
     transform-origin: top left;
     -webkit-transform: scale(0.5);
     transform: scale(0.5);
     -webkit-box-sizing: border-box;
     box-sizing: border-box;
   }
   .popup-frame>.select-num {
     margin: 5px 25px 14px;
     font-size: 14px;
     line-height: 25px;
     overflow: hidden;
     color: #333;
   }
   .select-num>div {
     float: left;
   }
   .select-num .spinner {
     color: #666;
     width: 88px;
     height: 25px;
     position: relative;
     margin: 0 1px 0 2px;
     font-size: 14px;
   }
   .select-num>.spinner>.dec, .select-num>.spinner>.inc {
     position: absolute;
     top: 0;
     bottom: 0;
     width: 25px;
     font-size: 10px;
     text-align: center;
     background-color: #fff;
     font-size: 18px;

   }
   .select-num>.spinner>.inc{
     right:0;
   }
   .select-num>.spinner>.val {
     text-align: center;
   }
   .select-num>.spinner:before, .select-num>.spinner>.dec:after, .select-num>.spinner>.inc:after {
     content: " ";
     position: absolute;
     left: 0;
     top: 0;
     width: 200%;
     height: 200%;
     -webkit-box-sizing: border-box;
     box-sizing: border-box;
     border: 1px solid #999;
     -webkit-transform-origin: top left;
     transform-origin: top left;
     -webkit-transform: scale(0.5);
     transform: scale(0.5);
   }


   .select-num>.stock {
     color: #666;
     font-size: 11px;
     margin-left: 10px;
   }
   .select-num>.stock>span {
     color: #da3784;
   }
   .popup-frame>.bottom-panel {
     position: relative;
     overflow: hidden;
   }
   .popup-frame>.bottom-panel:before {
     content: " ";
     position: absolute;
     left: 16px;
     right: 16px;
     top: 0;
     height: 1px;
     background-color: #dbdbdb;
     -webkit-transform-origin: top;
     transform-origin: top;
     -webkit-transform: scaleY(0.5);
     transform: scaleY(0.5);
   }
   .popup-frame>.bottom-panel>.btn-buy {
     width: 200px;
     height: 40px;
     line-height: 40px;
     margin: 15px auto 10px;
     color: #fff;
     background-color: #d61518;
     text-align: center;
     -webkit-border-radius: 2px;
     border-radius: 2px;
   }
   .popup-frame>.bottom-panel>.btn-buy:before {
     content: "加入购物车";
   }
</style>
