<template>
	<div>
		<x-header>注册
			<router-link slot="right" to="/User">登录</router-link>
		</x-header>
		<div class="registers">
			<ul class="setcode" v-show="show1">
				<li>
					<x-input title="手机号码" name="mobile" v-model="PhoneNumber" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
				</li>
				<li>
					<x-input title="输入验证码" v-model="YzCode" class="weui-vcode">
						<x-button slot="right" type="primary" :disabled="disable" mini @click.native="getCode()">获取验证码 ({{num}})</x-button>
					</x-input>
				</li>
			</ul>
			<ul class="setcode" v-show="show2">
				<li>
					<x-input title="设置密码" type="text" placeholder="" v-model="password" :min="6" :max="16" @on-change="change"></x-input>
				</li>
				<li>
					<x-input title="确认密码" v-model="password2" type="text" placeholder="" :equal-with="password"></x-input>
				</li>
			</ul>

			<div class="sucfont loginDiv" v-show="show3">
				<div class="succ" v-show="succ">
					<span>恭喜你，注册成功!</span>
					<router-link slot="right" to="/User">
						<XButton class="loginbtn">去登录</XButton>
					</router-link>
				</div>
				<div class="succ" v-show="fass">
					<span>很遗憾，注册失败!<p>原因：{{reson}}</p></span>
					<router-link slot="right" to="/User">
						<XButton class="loginbtn">重新注册</XButton>
					</router-link>
				</div>
			</div>
		</div>
		<div class="loginDiv" v-show="show4">
			<XButton class="loginbtn" @click.native="nextStep">下一步</XButton>
		</div>
	</div>
</template>

<script>
	import { XHeader, Step, StepItem, XHr, XButton, XInput, Group, Divider } from 'vux'
	var ifycode = ''
	var num = 30
	var reson = ""
	export default {
		components: {
			XHeader,
			Step,
			XButton,
			StepItem,
			XHr,
			XInput,
			Group,
			Divider,
			XButton
		},
		data() {
			return {
				PhoneNumber: '',
				password: '',
				password2: '',
				YzCode: '',
				show1: true,
				show2: false,
				show3: false,
				show4: true,
				succ: false,
				fass: false,
				reson: reson,
				num: num, //默认倒数30秒
			}
		},
		methods: {
			change(val) {
				//    console.log(val)
			},
			getCode() {
				var _this = this;
				var mobile = _this.PhoneNumber
				var title = "用户说明"
				if(mobile == "") {
					return false;
				} else {
					_this.$http.post("http://www.zhongrenjituan.cn/index.php?s=/user/user/send_mobile_verify", _this.$qs.stringify({ mobile: mobile, title: title })).then(function(response) {
						ifycode = response.data.mobis;
						_this.times()
					})
				}
			},
			times() {
				var _this = this;
				if(_this.num <= 1) {
					_this.num = 30
					_this.disable = false
					return false
				} else {
					_this.num--
						_this.disable = true
				}
				setTimeout(function() {
					_this.times()
				}, 1000)

				return _this.num
			},

			nextStep() {
				var mobile = this.PhoneNumber
				var password = this.password
				var repassword = this.password2

				if(this.PhoneNumber == "" || this.YzCode == "" || this.YzCode != ifycode) {
					alert("请输入")
					return false
				} else {
					this.show1 = false
					this.show2 = true
				}
				if(password == "" || repassword == "" || password != repassword) {
					return false
				} else {
					var self = this
					console.log(this)
					this.$http.post("http://www.zhongrenjituan.cn/index.php?s=/user/user/register", this.$qs.stringify({ mobile: mobile, reg_type: 'mobile', password: password, repassword: repassword }))
						.then(function(response) {
							var status = response.data.status
							if(status == 1) {
								self.succ = true
								self.fass = false
							} else {
								self.succ = false
								self.fass = true
								self.reson = response.data.info
							}
						})
					this.show1 = false
					this.show2 = false
					this.show3 = true
					this.show4 = false
				}
			}

		},
	}
</script>

<style scoped>
	/*.btn_wrap {
  padding: 0 1rem;
  margin-top: 2rem;
}*/
	
	.weui-cell {
		padding: 16px 0px;
		position: relative;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
	}
	
	.tabbar {
		text-align: center;
		line-height: 50px;
		width: 100%;
		color: #fff;
		font-size: 16px;
		background-color: #FFBE34;
		letter-spacing: 2px;
		/*border-bottom: 1px solid #808080;*/
	}
	
	.zhuce {
		position: absolute;
		right: 20px;
	}
	
	.tabbar img {
		left: 0;
		position: absolute;
		margin: 10px;
	}
	
	.registers,
	.loginDiv,
	.wechatlogin {
		/*margin-top: 40px;*/
		width: 85%;
		margin: 40px auto;
	}
	
	.registers ul {
		width: 100%;
		list-style: none;
	}
	
	.registers ul li {
		width: 100%;
		margin: 0;
		height: 50px;
		width: 100%;
		color: #8a8a8a;
		border: 1px solid #999;
		border: none;
		border-bottom: 1px solid #aaa;
	}
	
	.registers ul li span {
		text-indent: 40px;
		font-size: 16px;
		display: inline-block;
	}
	
	.registers input {
		border: none;
		height: 30px;
		width: 60%;
		margin-left: 10%;
		background: transparent;
	}
	
	.loginDiv button {
		width: 60%;
		height: 40px;
		margin-left: 18%;
		border-radius: 15px;
		border: none;
		color: #fff;
		font-size: 16px;
		letter-spacing: 2px;
		background-color: #54b228;
	}
	
	.wechatlogin {
		height: 50px;
		line-height: 26px;
		padding-left: 0px;
		font-size: 16px;
	}
	
	.fgpass {
		float: left;
		color: #8a8a8a;
	}
	
	.weixin {
		float: right;
		color: #8a8a8a;
		/*text-decoration: underline;*/
	}
	
	.wechatlogin img {
		display: inline-block;
		position: absolute;
	}
	
	.wechatlogin span {
		text-indent: 32px;
		font-size: 16px;
		display: inline-block;
		text-shadow: #aaa 3px 3px 3px;
	}
	
	.sucfont {
		text-align: center;
		color: #008000;
		font-size: 24px;
	}
	
	.sucfont span {
		display: inline-block;
		margin: 50px 0 100px 0;
	}
	
	.sucfont span p {
		margin-top: 5px;
		display: inline-block;
		color: #ba331a;
		font-size: 16px
	}
</style>