<template>
<div>
   <x-header>登录
   	<router-link slot="right" to="/Register">注册</router-link>
   </x-header>
   <div class="login">
   	<ul>
   		<li>
   			<img :src="require('./images/user.svg')"/>
   		     <x-input title="账号" class="sruser" v-model="username" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
   		</li>
   		<li>
   			<img :src="require('./images/pass.svg')"/>
   		     <x-input title="密码" class="sruser" v-model="password" name="password" placeholder="请输入密码" keyboard="password" is-type="password"></x-input>
   		</li>
   	</ul>
   </div>
   <div class="loginDiv">
   	<button class="loginbtn" @click="userlogin">登录</button>
   </div>
   <div class="wechatlogin">
   	<div class="fgpass">
   		<img :src="require('./images/forgetpass.svg')"/>
   	<span>忘记密码</span>

   	</div>
   	<div class="weixin">
   		<img :src="require('./images/wechat.svg')"/>
   	<span>微信登录</span>
   	</div>

   </div>
</div>
</template>

<script>
	import { XHeader,XInput} from 'vux'
    export default {
       components: {
         XHeader,
         XInput
    },
        data () {
            return {
             password:"",
             username:""
        }
   },
        methods:{
        userlogin(){
            var mobile = this.username
            var password = this.password
            var _this=this
            if(mobile =="" || password ==""){
            	alert("请输入完整")
            }else{
            this.$http.post("http://www.zhongrenjituan.cn/index.php?s=/user/user/login", this.$qs.stringify({account: mobile,  password: password}))
						.then(function(response) {
						console.log(response.data.status)
                        _this.$router.push('/Home');
				})
            }
        }
    },
    }
</script>

<style scoped>
.login,.loginDiv,.wechatlogin{
	/*margin-top: 40px;*/
	width: 85%;
	margin:40px auto;
}
.login img{
	margin-top: 16px;
	position: absolute;
}
.login ul{
	width: 100%;
	list-style: none;
}
.login ul li{
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
.login ul li span{
    text-indent: 40px;
    font-size: 16px;
    display: inline-block;
}
.login input{
	border: none;
	height: 30px;
	width: 60%;
	margin-left: 10%;
	background: transparent;

}
.loginDiv button{
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
.wechatlogin{
	height: 50px;
	line-height: 26px;
	padding-left: 0px;
	font-size: 16px ;

}
.fgpass{
	float: left;
	color: #8a8a8a;
}
.weixin{
	float: right;
	color: #8a8a8a;
	/*text-decoration: underline;*/
}
.wechatlogin img{
	display: inline-block;
	position: absolute;
}
.wechatlogin span{
	text-indent: 32px;
    font-size: 16px;
    display: inline-block;
    text-shadow:#aaa 3px 3px 3px;
}

.vux-x-input{
	padding: 0px 42px;
}
</style>
