<template>
  <div>
    <x-header>众人共享商城</x-header>
    <div class="category">
      <div class="slide-nav">
        <router-link to="" v-for="(item,key) in msg" :key="index">
          <p class="slide-item" @click="clicks(key)" :class="{colors:key==index}">{{item}}</p>
        </router-link>
      </div>
      <div class="content">
        <div class="container">
          <div class="item-log">
            <router-link to="/Finding" v-show="show">
            <img :src="require('./images/0.jpg')" >
            </router-link>
          </div>
          <div class="item-content" v-for="item in content">
            <h4>{{item.brand}}</h4>
            <ul>
              <li v-for="item2 in item.imgs">
                <img :src=item2.url>
                <span>{{item2.text}}</span>
              </li>
            </ul>
          </div>
        </div>
        <br>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
	import { XHeader} from 'vux'
  var recommend = [
    {
      brand: "专场推荐",
      imgs: [{url: require("./images/4.jpg"), text: "3.7超级品类日"}, {
        url: require("./images/2.png"),
        text: "水果"
      }, {url: require("./images/1.jpg"), text: "跨品类2件5折"}]
    },
    {
      brand: "热门分类",
      imgs: [{url: require("./images/11.png"), text: "手机"}, {
        url: require("./images/6.jpg"),
        text: "笔记本"
      }, {url: require("./images/10.jpg"), text: "空调"},
        {url: require("./images/7.jpg"), text: "收纳用品"}, {
          url: require("./images/5.jpg"),
          text: "炒锅"
        }, {url: require("./images/9.jpg"), text: "啤酒"}, {url: require("./images/11.jpg"), text: "火车票"}]
    },
    {brand: "常用分类", imgs: [{url: require("./images/12.jpg"), text: "少女文胸"}]},

  ]


  var computer = [
    {
      brand: "装机大师",
      imgs: [{url: require("./images/11.png"), text: "乐视"}, {
        url: require("./images/6.jpg"),
        text: "华为"
      }, {url: require("./images/10.jpg"), text: "中兴"},
        {url: require("./images/7.jpg"), text: "魅族"}, {
          url: require("./images/5.jpg"),
          text: "小米"
        }, {url: require("./images/9.jpg"), text: "联想"}]
    },
    {brand: "谷歌", imgs: [{url: require("./images/12.jpg"), text: "三星"}]},
  ]

  var phone = [
       {
      brand: "装机大师",
      imgs: [{url: require("./images/11.png"), text: "乐视"}, {
        url: require("./images/6.jpg"),
        text: "华为"
      }, {url: require("./images/10.jpg"), text: "中兴"},
        {url: require("./images/7.jpg"), text: "魅族"},
        {url: require("./images/7.jpg"), text: "魅族"},
        {url: require("./images/5.jpg"), text: "小米"},
        {url: require("./images/9.jpg"), text: "联想"},
        {url: require("./images/7.jpg"), text: "华为"}
      ]
    },
    {brand: "谷歌", imgs: [{url: require("./images/12.jpg"), text: "三星"}]},
  ]
  export default {
  	 components: {
         XHeader
    },

    data () {
      return {
        msg: ["家用电器", "电脑办公", "手机数码", "母婴童装", "图书", "家居家纺", "厨房用品",
          "家具建材", "食品生鲜", "酒水饮料", "户外运动", "鞋靴箱包", "奢品礼品", "钟表珠宝",
          "玩具乐器", "内衣配饰", "汽车制品", "音响制品", "医药保健", "计生情趣", "全球购",
          "京东金融", "生活旅行", "宠物农资"
        ],
        index: 0,
        show: true,
        content: recommend,
      }
    },
    methods: {
      clicks(key){
        this.index = key;
        if (key!=0||key!=1){
          this.content=""
          this.show=false
        }
        switch (key) {
          case 0:
            this.content = recommend
            this.show=true
            break;
          case 1:
            this.content = computer
            this.show=true
            break;
	        case 2:
	        this.content = phone
	        this.show=true
	        break;
        }
      },
    }
  }
</script>

<style scoped>
	.tabbar{
		text-align: center;
		line-height: 45px;
		width: 100%;
		background-color:#FFBE34;
		/*border-bottom: 1px solid #808080;*/
	}
  .category {
    width: 100%;
    display: flex;
    position: absolute;
    top: 45px;
    bottom: 0;
  }
  .slide-nav {
    flex: 0 0 100px;
    margin-top: 8px;
    overflow: auto;
  }

  .slide-item {
    width: 100%;
    height: 46px;
    line-height: 46px;
    margin: 2px 0;
    background-color: white;
    color: #232326;
    font-size: 14px;
    text-align: center;
  }

  .content {
    padding: 8px;
    overflow: auto;
  }

  .colors {
    color: red;
  }

  .item-content {
    width: 100%;
    margin-top: 19px;
  }

  .item-content h4 {
    font-size: 12px;
    color: #232326;
    margin-bottom: 12px;
    margin-left: 10px;
  }

  .container img {
    width: 100%;
    height: 105px;
    margin-top: 5px;
  }

  .item-content ul {
    font-size: 0;
    background: white;
  }

  .item-content ul li {
    width: calc(100% / 3);
    height: 86px;
    text-align: center;
    display: inline-block;
    list-style: none;
  }

  .item-content ul img {
    width: 55px;
    height: 55px;
  }

  .item-content ul span {
    width: 100%;
    font-size: 10px;
    display: block;
    text-align: center;
    margin-top: 5px;
  }
</style>
