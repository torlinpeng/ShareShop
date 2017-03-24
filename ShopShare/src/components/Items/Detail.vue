
<template>
  <div class="detail">
  	<x-header>宝贝详情</x-header>
    <swiper :list="imgs" :interval=1000 :auto=true dots-class="custom-bottom" height="160px" :loop=true
            dots-position="center" @on-index-change="onIndexChange">
    </swiper>
    <div class="psInfo">
    	 <div class="texts">{{texts}}</div>
    	 <div class="PsPrice">
            <div class="floatl">普通会员价：</div>
            <div class="PsPricer"><span class="PsNPrice">￥198.00</span>            
                <del>￥228.00</del>
                <span class="Zhe">8.7折</span>
            </div>
        </div>
    </div>
    <div class="psInfo" style="border-top: none;">
    	  <div class="psSent">
    	  	<span>快递：免邮</span>
    	  	<span>月销：500</span>
    	  	<span>广东深圳</span>
    	  </div>
    </div>
    
    <div class="psSelect">
    <div class="selColor">
    	 <x-switch title="已选择：蓝色" v-model="show3"></x-switch>
     	<!--<span>已选择：蓝色</span>
     	<img :src="require('./images/next.svg')" >-->
    </div>
    <popup v-model="show3">
      <div class="popup2">
         <div class="pop_pic">
         	<img :src="require('./images/1.jpg')">
         			<span class="psInfo-zt">Heilan Home/海澜之家2016夏季新品男装透气亚麻休闲短袖衬衫</span>
         	<p>￥198.8</p>        
         </div>
         <div class="pop_size">
         	<em>尺寸选择</em>
         	<checker v-model="demo11" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
          <checker-item :value="item" v-for="(item, index) in sizeList" :key="index">{{item.size}}</checker-item>
          </checker>
          current size is: {{demo11.size}}
         </div>
         
         <div class="pop_size">
         	<em style="margin-top: 0px;">颜色</em>
         	<checker v-model="demo12" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
          <checker-item :value="item" v-for="(item, index) in colorList" :key="index">{{item.color}}</checker-item>
          </checker>
         current color is: {{demo12.color}}
         </div>
      </div>
      <div class="submitDiv">
      	<button class="submit" @click="submit(s,c)">确定</button>
      </div>
      
    </popup>
  </div>
  <div class="tab">
      <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" @on-item-click="show(index)" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          {{value}}
        </swiper-item>
      </swiper>      
  </div>
  <div class="footed">
  	<div class="doit">
  		<a class="FServiceBt" href="tel:150999999">
  		<img :src="require('./images/kf.svg')" alt="欢迎您的到来">
  		联系客服</a>
        
        <!--if(site.isShowVisitorPrice==1 || user!=null)--> 
  <a class="FAddCartBt" href="javascript:void(0);" style="touch-action: pan-y; -webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">加入购物车</a>
	<a class="FBuyBt" href="javascript:void(0);" style="touch-action: pan-y; -webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">立即购买</a>	  		
  		
  	</div>
  	
  </div>
  
  
  </div>
</template>

<script>
	import {XHeader,Swiper,SwiperItem,Tab, TabItem,XButton,XSwitch,Popup,Checker,CheckerItem} from 'vux'
  import MyCheck from '../UserDefined/MyCheck.vue'
  
	  const imgList = [
    {img:require('./images/0.jpg'),url:'/User'},
    {img:require('./images/0.jpg'),url:'/ShopCar'},{img:require('./images/3.jpg'),url:'/Items'},
    {img:require('./images/0.jpg'),url:'/Finding'},{img:require('./images/5.jpg'),url:'/User'},
    {img:require('./images/0.jpg'),url:'/Finding'}]
	  const urlList = imgList.map((item, index) => ({
    img: item.img,
    url:item.url
  }));
	const babyList=[
	{text:'Heilan Home/海澜之家2016夏季新品男装透气亚麻休闲短袖衬衫',
	   counts:'100',
	   color:'蓝色',
	   img:require('./images/0.jpg'),
	   url:'/User',
	   style:'休闲',
	   age:'青年',
	   season:'春季',
	   thickness:'薄款',
	   collar:'圆领',
	   size:'L'
	}
	]
	const tab = () => ['图文详情', '产品参数', '商品评价']
	const sizeList=[{size:"S"},{size:"M"},{size:"L"},{size:"X"},{size:"XL"},{size:"XLL"}]
	const colorList=[{color:"米红"},{color:"天蓝"},{color:"深黑"},{color:"炫紫"}]
	const demol1='';
	const demol2='';
	
//const sizeList = () => ['S', 'M', 'L','X','XL','XLL']
  export default {
    components: {
    	XHeader,
    	Swiper,
    	SwiperItem,
    	Tab, 
    	TabItem,
    	XButton,
    	XSwitch,
    	Popup,
    	Checker,
    	CheckerItem,
    	
    },
    data () {
      return {
        list2: tab(),
        imgs:urlList,
        infomation:babyList,
        texts:babyList[0].text,
        index:0,   
        value:"",
        show3: false,
      show4: false,
      sizeList:sizeList,
      demo11: [{size:'S'}],
      colorList:colorList,
      demo12: [{color:'深黑'}],
      }
    },
    methods: {
//        show(key){
//      switch (key){
//        case 0:
//          this.value=MyCheck
//              break;
//        case 1:
//          this.value='监听点击事件我的内容改变了'
//      }
//    }
  submit(s,c){
//	show3:true;
    s =demol1;
 c=demol2;
 console.log(s,c)
  }
    }
  }
</script>

<style scoped>
.psInfo{
	width: 100%;
  position: relative;
  background: #fff;
  /*border-top: 1px solid #dfdede;
  border-bottom: 1px solid #dfdede;*/
}
.texts{
	font-size: 16px;
	color: #666;
	border-bottom: 1px solid #dfdede;
	background: #fff;
	width: 95.3125%;
  margin: 0 auto;
  padding: 5px 0;
  min-height: 20px;
  line-height: 20px;
  font-size: 16px;
}
.PsPrice{
	  width: 95.3125%;
    margin: 0 auto;
    height: 30px;
    line-height: 30px;
}
.PsPrice .floatl{
	font-size: 14px;
	color: #666;
	float: left;
}
.PsPricer{
	float: left;
	height: 30px;
	line-height: 30px;
}
.PsNPrice{
	font-size: 18px;
  font-weight: bold;
  margin-right: 4px;
  color: #fc4141;
}
.PsPricer del{
	color: #999;
	text-decoration: line-through;
}
.Zhe {
    background: #fc4141 url(images/zheBg.png) left center no-repeat;
    color: #fff;
    padding: 0 5px 0 12px;
    text-align: center;
    height: 14px;
    line-height: 14px;
    margin: 3px 0 0 4px;
    font-size:13px ;
}
.psSent{
		width: 95.3125%;
    margin: 0 auto;
    height: 40px;
    line-height: 50px;
    font-size: 14px;
}
.psSent span{
	width: calc(100%/3.2);
	display: inline-block;
	color: #666;
}
.psSent span:nth-child(2){
	text-align: center;
}
.psSent span:nth-child(3){
	text-align: right;
}
.psSelect{
	width: 100%;
	position: relative;
  background: #fff;
  color: #666;
  margin-top: 15px;
  font-size: 14px;
}
.selColor{
	width: 95.3125%;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
}
.selColor span{
	display: inline-block;
	float: left;
}
.selColor img{
	float: right;
	margin-top: 10px;
}
.vux-tab{
	width: 100%;
	margin-top: 15px;
}
.footed{
	   touch-action: pan-y;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    display: block;
        width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 111;
    overflow: hidden;
    background: #fff;
}
.doit{
	width: 100%;
    height: 48px;
    display: -webkit-box;
}
.doit a{
	    display: block;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    box-flex: 1;
    text-align: center;
    height: 50px;
    font-size: 14px;
    line-height: 50px;
    text-decoration: none;
    width: calc(100%/3);
}
.doit img{
    width: 33px;
    vertical-align: middle;
    margin-bottom: 7px;
}
.FServiceBt {
	color: #666;
}
.FAddCartBt,.YgFAddCartBt{
	background: #f6ab00;
    color: #fff;
}
.FBuyBt{
	background: #ea2727;
    color: #fff;
}
.vux-x-switch.weui-cell_switch{
	line-height: 0%;
}
.popup2{
	padding: 8px;
}
.popup2 img{
  float: left;
 width: 60px;
 height: 60px;
 font-size: 13px;
 margin-right: 8px;
}
.popup2 p{
	color: #fc4141;
	font-size: 16px
}
.demo1-item-selected {
  border: 1px solid green;
}
.pop_size{
	margin-top: 15px;
}
em{
	margin: 10px 0 0 0;
	display: inline-block;
}
.vux-checker-item{
	margin: 0 10px;
	width: 30px;
	text-align: center;
}
.submitDiv{
	border-top: 1px solid #dfdede;
	width: 100%;
	height: 45px;
	padding: 10px 0;
	text-align: center;
	line-height: 45px;
	margin-top: 10px;
}
.submit{
	background: #FFBE34;
	width: 100px;
	height: 40px;
	border-radius: 4px;
	font-size: 16px;
	text-align: center;
	line-height: 40px;
	margin: 0 auto;
	border: none;
	color: #fff;
}
</style>
