<template>
	<div>
		<x-header>修改密码
			<router-link slot="right" to="/User">登录</router-link>
		</x-header>
		<div class="loading" v-show="loads">
			<img src="../../assets/loading.gif">
		</div>
		<div class="login">
			<ul>
				<li>
					<img :src="require('./images/user.svg')" />
					<x-input title="注册账号" class="sruser" v-model="form.username" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
				</li>
				<li>
					<img :src="require('./images/pass.svg')" />
					<x-input title="重设密码" class="sruser" v-model="form.password" name="password" placeholder="请输入密码" keyboard="password" is-type="password"></x-input>
				</li>
				<li>
					<img :src="require('./images/pass.svg')" />
					<x-input title="确认密码" class="sruser" v-model="form.password2" name="password" :equal-with="form.password" placeholder="请输入密码" keyboard="password" is-type="password"></x-input>
				</li>
			</ul>
		</div>

		<div class="loginDiv">
			<button class="loginbtn" @click="userlogin">确定</button>
		</div>
	</div>
</template>

<script>
	import { XHeader, XInput } from 'vux'
	import Store from 'store/stores'
	//	var arrs=Store.fetch()
	export default {
		components: {
			XHeader,
			XInput
		},
		data() {
			return {
				//form: Store.fetch()
				form: {
					password: "",
					mobile: ""
				},
				loads:false

			}
		},
		methods: {
			userlogin() {
				var param = {}
				param.mobile = this.form.username
				param.password = this.form.password
				var _this = this
				if(param.mobile == "" || param.password == "") {
					alert("请输入完整")
				} else {
					_this.loads=true
					this.$http.post("http://www.zhongrenjituan.cn/index.php?s=/user/user/login", this.$qs.stringify({ account: param.mobile, password: param.password }))
						.then(function(response) {
							console.log(response.data.status)
							var status = response.data.status
							if(status == 0) {
								alert(response.data.info)
								return false
							} else {
								sessionStorage.arrays = param.mobile
								_this.$router.push('/Mycenter')
								//							console.log(sessionStorage.arrays)
							}
						})
				}
			}
		},
	}
</script>

<style scoped>
	.login,
	.loginDiv,
	.wechatlogin {
		/*margin-top: 40px;*/
		width: 85%;
		margin: 40px auto;
	}
	
	.loginDiv {
		text-align: center;
	}
	
	.login img {
		margin-top: 16px;
		position: absolute;
	}
	
	.login ul {
		width: 100%;
		list-style: none;
	}
	
	.login ul li {
		width: 100%;
		margin: 0;
		height: 50px;
		width: 100%;
		color: #8a8a8a;
		border: 1px solid #999;
		line-height: 60px;
		border: none;
		border-bottom: 1px solid #aaa;
	}
	
	.login ul li span {
		text-indent: 40px;
		font-size: 16px;
		display: inline-block;
	}
	
	.login input {
		border: none;
		height: 30px;
		width: 60%;
		margin-left: 10%;
		background: transparent;
	}
	
	.loginDiv button {
		width: 200px;
		height: 40px;
		border-radius: 15px;
		border: none;
		color: #fff;
		font-size: 16px;
		letter-spacing: 2px;
		background-color: #E6171E;
	}
	
	.loading {
		text-align: center;
		width: 100%;
		top: 40%;
		position: absolute;
	}
	
	.vux-x-input {
		padding: 0px 42px;
	}
</style>