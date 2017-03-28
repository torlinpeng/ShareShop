<template>
  <div>
    <!--搜索框开始-->
    <search v-model="value" autoFixed position="absolute" cancelText="搜索" placeholder="数码"></search>
    <!--搜索框结束-->
    <!--轮播图开始-->
    <swiper :list="imgs" :interval=1000 :auto=true dots-class="custom-bottom" height="160px" :loop=true
            dots-position="center" @on-index-change="onIndexChange">
    </swiper>
    <!--轮播图结束-->
    <!--快速导航开始-->
    <div class="quick-nav">
      <div class="item" v-for="itemx in urls">
        <router-link :to=itemx.link>
          <img :src=itemx.img height="30" width="30"/>
          <span style="position: absolute;bottom: 0px;left: 8px">{{itemx.text}}</span>
        </router-link>
      </div>
    </div>
    <!--快速导航结束-->
    <!--新闻轮播开始-->
    <div class="news">
      <img :src="require('./images/jd-news.png')" class="jd-news" alt="">
      <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false" :loop=true :auto=true>
        <swiper-item><div style="line-height: 30px"><span style="margin: 0 3px;color: red">大促</span>美妆满199减100，为春游妆备！<span class="more">更多</span></div></swiper-item>
        <swiper-item><div style="line-height: 30px"><span style="margin: 0 3px;color: red">大促</span>客官翻牌吗？这厢花姐有礼撒！<span class="more">更多</span></div></swiper-item>
      </swiper>
    </div>
    <!--新闻轮播结束-->
    <!--秒杀开始-->
    <seckill></seckill>
    <!--秒杀结束-->
  </div>
</template>
<script>
  import Seckill from './Seckill.vue'
  import {Search, Swiper,SwiperItem} from 'vux'
  const imgList = [
    {img:require('./images/swpera.jpg'),url:'/User'},
    {img:require('./images/swperb.jpg'),url:'/ShopCar'},{img:require('./images/swperc.jpg'),url:'/Items'},
    {img:require('./images/swperd.jpg'),url:'/Finding'},{img:require('./images/swpere.jpg'),url:'/User'},
    {img:require('./images/swperf.jpg'),url:'/Finding'}]
  const urlList = imgList.map((item, index) => ({
    img: item.img,
    url:item.url
  }))
  export default {
    data(){
      return {
        link: {xx: "/Finding"},
        imgs: urlList,
        value: "",
        urls: [
          {img: require('./images/market.png'), text: "京东超市", link: "/Items"},
          {img: require('./images/global.png'), text: "全球购", link: "/Finding"},
          {img: require('./images/cloth.png'), text: "服装城", link: "/ShopCar"},
          {img: require('./images/fresh.png'), text: "京东生鲜", link: "/User"},
          {img: require('./images/home.png'), text: "京东到家", link: "/Items"},
          {img: require('./images/recharge.png'), text: "充值中心", link: "/Finding"},
          {img: require('./images/money.png'), text: "惠赚钱", link: "/User"},
          {img: require('./images/tiket.png'), text: "领券", link: "/Items"},
          {img: require('./images/logistics.png'), text: "物流查询", link: "/Finding"},
          {img: require('./images/fllow.png'), text: "领京豆", link: "/ShopCar"}
        ]
      }
    },
    components: {
      Search,
      Swiper,
      SwiperItem,
      Seckill
    },
    methods: {
      onIndexChange(){
      }
    }
  }

</script>

<style >
  .quick-nav{
    margin-bottom: 10px;
  }
  .quick-nav .item {
    width: 100%;
    height: 60px;
    text-align: center;
    padding-top: 10px;
    font-size: 14px;
    width: calc(100% / 5);
    display: inline-block;
    position: relative;
  }

  .quick-nav .item span {
    bottom: 0px;
    display: block;
    width: 100%;
    margin-left: -8%;
  }
a{
  color: black;
}
.news{
  display: inline-block;
  width: 95%;
  height: 30px;
  margin: 0 6px;
  padding: 0 10px;
  background-color: white;
  border-radius: 10px;
  font-size: 14px;
}
.news img{
  margin-top: 7px;
}

  .jd-news{
    width: 73px;
    height: 16px;
    position: relative;
    float: left;

  }
  .text-scroll{
    color: black;
  }
  .more{
    float: right;
    margin-right: 15px;
  }
</style>
