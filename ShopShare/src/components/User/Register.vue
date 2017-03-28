<template>
	<div>

		<x-header>注册
			<router-link slot="right" to="/User">登录</router-link>
		</x-header>

		<div style="width: 95%;margin: 0 auto;">
			<br>
			<div>
				<step v-model="step2" background-color='#fbf9fe' gutter="20px">
					<step-item title="输入信息"></step-item>
					<step-item title="设置密码"></step-item>
					<step-item title="去登录"></step-item>
				</step>
			</div>
		</div>
		<div class="registers">
			<ul class="setcode" v-show="show1">
				<li>
					<x-input title="手机号码" name="mobile" v-model="PhoneNumber" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
				</li>
				<li>
					<x-input title="输入验证码" v-model="YzCode" class="weui-vcode">
						<x-button slot="right" type="primary" mini @click.native="getCode">获取验证码</x-button>
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

			<div v-show="show3">
				<msg title="快去登录吧！" :buttons="buttons" :icon="icon"></msg>
			</div>

		</div>
		<div class="loginDiv" v-show="show4">
			<XButton class="loginbtn" @click.native="nextStep">下一步</XButton>
		</div>
	</div>
</template>

<script>
	import { XHeader, Step, StepItem, XHr, XButton, XInput, Group, Msg, Divider } from 'vux'
	//	var show1=true;
	export default {
		components: {
			XHeader,
			Step,
			XButton,
			StepItem,
			XHr,
			XInput,
			Group,
			Msg,
			Divider,
			XButton
		},
		data() {
			return {
				step2: 0,
				PhoneNumber: '',
				password: '',
				password2: '',
				YzCode: '',
				show1: true,
				show2: false,
				show3: false,
				show4: true,
				//    nextStep:nextStep(),
				description: 'msg description',
				icon: '',
				buttons: [{
					type: 'primary',
					text: '现在去登录',
					link: '/User'
				}]
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
				var url = "http://www.zhongrenjituan.cn/index.php?s=/user/user/send_mobile_verify"
//				this.$http.post("http://www.zhongrenjituan.cn/index.php?s=/user/user/send_mobile_verify", {mobile:mobile,title:title}).then(function(response) {
//					console.log(res.data)
//				});
				var param = { mobile: mobile, title: title };
				$.ajax({
					url: url,
					type: 'POST', 
					data: param,
					dataType: 'json',
					success: function(data) {
						console.log(data);
					},
					error: function(xhr, textStatus) {
						console.log('我是错误返回：', xhr);
					},
				})
			},
			nextStep() {
				if(this.PhoneNumber == "" || this.YzCode == "" && this.YzCode == rand) {
					return false;
				} else {
					this.step2++
						var step = this.step2 + 1
					var _this = this
					if(step > 3) {
						return false;
					}
					if(step == 2) {
						console.log(_this.rand)
						this.$http.post("http://localhost:8080/register", {
							PhoneNumber: _this.PhoneNumber,
							rand: _this.YzCode
						}).then(function(res) {
							//      	 this.$router.push('/home')
							console.log("您注册的用户名是:" + res.data.PhoneNumber)
							console.log("验证码是:" + res.data.rand)
						})

						this.show1 = false;
						this.show2 = true;
					}
					if(step == 3) {
						this.show1 = false;
						this.show2 = false;
						this.show3 = true;
						this.show4 = false;
					}
					console.log(step);
				}
			},
			changeIcon() {
				if(!this.icon || this.icon === 'success') {
					this.icon = 'warn'
					return
				}
				if(this.icon === 'warn') {
					this.icon = 'info'
					return
				}
				if(this.icon === 'info') {
					this.icon = 'waiting'
					return
				}
				if(this.icon === 'waiting') {
					this.icon = 'success'
				}
			}
		}
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
</style>