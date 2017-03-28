<template>
	<div>
		<x-header>购物车</x-header>
		<div class="box">
			<swipeout class="one" v-for="(list,index) in prolist" :key="index">
				<swipeout-item :threshold=".5" underlay-color="#ccc">
					<div slot="right-menu">
						<swipeout-button @click.native="onButtonClick('fav')" background-color="#336DD6">收藏</swipeout-button>
						<swipeout-button @click.native="onButtonClick('delete')" background-color="#D23934">删除</swipeout-button>
					</div>
					<div slot="content" class="demo-content vux-1px-tb">
						<checker-item :value="1">
							<div class="proLists">
								<div class="proleft">
									<input type="checkbox" class="checkcs" :value="list.id" @click="currClick(index,$event)" v-model="list.checked">
									<router-link :to=list.link>
										<img :src=list.src>
									</router-link>
									<span>{{list.name}}
        	                        <p class="guige">{{list.text}}</p>
        	                        <p class="charges">￥{{list.charge}}</p>
        	                        </span>
								</div>
								<div class="count">
									<span id="num-jian" @click="reduce(index)">-</span><input type="text" id="input-num" name="数量" v-model="list.numberValue" /><span id="num-jia" @click="add(index)">+</span>
								</div>
							</div>
						</checker-item>
					</div>
				</swipeout-item>
			</swipeout>
		</div>
		<div class="total">
			<!--<my-check class="checkall"></my-check>-->
			<input class="checkcss" type="checkbox" v-model="checkAll"> 全选（{{checkedCount}}）
			<div class="hjcharge">
				<span>合计：</span>
				<span class="moneys">￥{{amount}}</span>
			</div>

		</div>
	</div>
</template>

<script>
	import { XHeader, Group, Cell, XNumber, Checker, CheckerItem, Divider, Panel, Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
	const prolist = [{
		src: require('./images/sp02.png'),
		name: '苹果7S plus',
		id: 1,
		charge: '7888',
		text: '土豪金，32G，港货,请包装严实，妥善寄件，附带发票',
		link: "/Detail",
		numberValue: 1,
		checked: false
	}, {
		src: require('./images/sp02.png'),
		name: '苹果6S plus',
		id: 2,
		charge: '5888',
		text: '玫瑰红，32G，国产,请包装严实，妥善寄件',
		link: "/Home",
		numberValue: 2,
		checked: false
	}]
	const checks = [];
	const goodsList = [];
	export default {
		components: {
			XHeader,
			Group,
			Cell,
			XNumber,
			Checker,
			CheckerItem,
			Divider,
			Panel,
			Swipeout,
			SwipeoutItem,
			SwipeoutButton,
		},
		data() {
			return {
				numberValue: 0,
				error: '',
				prolist: prolist,
				//				amount: '',
				footer: {
					title: '查看更多',
					url: 'http://vux.li'
				},
				checks: []
			}
		},
		computed: {
			amount: function() {
				var amount = 0;
				var selected = this.prolist.filter(function(list) { return list.checked });
				for(let i = 0; i < selected.length; i++) {
					amount += (+selected[i].charge) * (+selected[i].numberValue);
				}
				return amount;
			},
			checkAll: {
				get: function() {
					return this.checkedCount == this.prolist.length;
				},
				set: function(value) {
					this.prolist = this.prolist.map(function(list) { list.checked = value; return list; });
				}
			},
			checkedCount: {
				get: function() {
					return this.prolist.filter(function(list) { return list.checked }).length;
				}
			}
		},
		methods: {
			add(index) {
				this.prolist[index].numberValue++;
			},
			reduce(index) {
				var buy_nums = this.prolist[index].numberValue
				if(buy_nums <= 0) {
					buy_nums = 0;
				} else {
					this.prolist[index].numberValue--;
				}
			},
			currClick(index, event) {
				console.log(event)
			},
		}
	}
</script>

<style scoped>
	.one {
		margin-bottom: 20px;
	}
	
	.vux-checker-item {
		width: 100%;
	}
	
	.weui-cell {
		border: none;
		/* float: right; */
		width: 29%;
		right: 0;
		bottom: 0;
		position: absolute;
	}
	
	.weui-cells:before {
		border-top: none;
	}
	
	.weui-cell:before {
		content: "";
		border-top: none;
	}
	
	.demo1-item {
		padding: 5px 20px;
		background: #fff;
	}
	
	.demo1-item-selected {
		border: 1px solid green;
	}
	
	.demo-content {
		border-right: 3px solid #336dd6;
	}
	
	.total .detail {
		margin-top: 16px;
	}
	
	.proLists img {
		float: left;
	}
	
	.proleft>span {
		display: inline-block;
		width: 78%;
		margin: 16px;
	}
	
	.proLists .charges {
		font-size: 16px;
		margin-top: 5px;
		color: #ff4400;
	}
	
	.proLists .guige {
		font-size: 13px;
		color: #808080;
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis
	}
	
	.proleft {
		float: left;
		width: 235px;
		white-space: nowrap;
	}
	
	.detail {
		float: left;
		margin: 40px 15px;
	}
	
	.total {
		height: 4em;
		width: 100%;
		line-height: 3.4em;
		background: #fff;
		bottom: 3em;
		position: fixed;
	}
	
	.hjcharge {
		margin-right: 3%;
		font-size: 16px;
		float: right;
		font-family: "微软雅黑";
	}
	
	.hjcharge .moneys {
		color: #ff4400;
		float: right;
	}
	
	.checkcs {
		float: left;
		margin: 48px 15px 0;
	}
	.checkcss{
		margin-left: 15px;
	}
	.count {
		position: absolute;
		right: 15px;
		top: 65%;
	}
	
	.count span {
		width: 27px;
		height: 27px;
		display: inline-block;
		border: 1px solid #C8C7CD;
		text-align: center;
		line-height: 27px;
		float: left;
	}
	
	.count input {
		width: 27px;
		height: 27px;
		border: 1px solid #C8C7CD;
		float: left;
		text-align: center;
	}
</style>