<template>

<div class="collects">
	<x-header>收藏</x-header>
	<div class="all_products">
		全部商品（{{len}}）
	</div>
<ul>
<li v-for="list in datalist">
	<div class="pro_img">
		<img :src=list.src>
	</div>

<div class="pro_info">
<span class="name_zt">{{list.name}}</span><br>
<span class="gg_zt">{{list.text}}</span>
<p><span class="new_charge">￥{{list.charge}}</span>&nbsp;
  <span class="old_charge">￥{{list.oldcharge}}</span></p>
</div>
<img class="delete" :src="require('./images/delete.svg')" />
</li>
</ul>

</div>
</template>

<script>
	import {XHeader, Actionsheet} from 'vux'
	
	 var datalist = [{
              	src: require('./images/sp02.png'),
                name: '苹果6S plus',
                charge:'7888',
                oldcharge:'7988',
                text: '土豪金，32G，港货,请包装严实，妥善寄件，附带发票',
                url: ''
              },
              {
              	src: require('./images/sp02.png'),
                name: '苹果7S plus',
                charge:'7888',
                oldcharge:'7988',
                text: '土豪金，32G，港货,请包装严实，妥善寄件，附带发票',
                url: ''
              }]
    const len = datalist.length;
	
    export default {
    	components: {
  	     XHeader,
  	     Actionsheet
    },
   
        data () {
            return {
              msg:"收藏",
              datalist,
              len
            }
        },
    }
</script>

<style scoped="">
  .collects{
  	width: 100%;
  	position: relative;
  }
  .all_products{
  	width: 100%;
  	height: 3em;
  	line-height: 3em;
  	text-indent: 2%;
  	color: #ff9000;
  	background: #fff;
  }
  
  .collects ul{
  	list-style: none;
  }
  .collects ul li{
  	width: 100%;
  	position: relative;
  	margin-top: 5px;
  	margin-bottom: 20px;
  	height: 5rem;
  	font-size: 14px;
  	display: block;
  	background: #fff;
  	
  }
  .pro_img{
  	float: left;
  	width: 24%;	
  	margin-left: 2%;
  }
  .pro_info{
  	margin-top: 0.5em;
  	width: calc(100%/1.66);
  	float: left;
	display: block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis
  }
  .pro_info .name_zi{
  	font-size: 16px;
  	color: #232326;	
  }
    .pro_info .gg_zt{
  	font-size: 13px;
  	color: #808080;	
  }
  .pro_info p{
  	margin: 10px 0;
  }
  .pro_info p .new_charge{
  	color: #ff4400;
  	font-size: 16px;
  }
    .pro_info p .old_charge{
  	color: #808080;
  	font-size: 12px;
  	text-decoration: line-through;
  }
  .collects ul li .delete{
  	position: absolute;
  	top:2.25em;
  	right: 1em;
  	
  }
</style>
