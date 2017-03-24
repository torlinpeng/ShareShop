<template>
<div>
   <x-header>登录
   	<router-link slot="right" to="/Register">注册</router-link>
   </x-header>
   <div class="login">
   	<ul>
   		<li>
   			<img :src="require('./images/user.svg')"/>
   		     <x-input title="账号" class="sruser" v-model="newuser.username" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
   		</li>
   		<li>
   			<img :src="require('./images/pass.svg')"/>
   		     <x-input title="密码" class="sruser" v-model="newuser.password" name="password" placeholder="请输入密码" keyboard="password" is-type="password"></x-input>
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
            newuser :{
            username:'',
            password:''
             }
        }
   },
        methods:{
        userlogin(){
            const the = this;
            console.log(the)
            this.$store.dispatch('login',this.newuser).then(function(){

                if(the.$store.state.user.seccLogin){
                    alert('登录成功！');
                    the.$router.push('/home')
                    the.$store.state.user.seccLogin = 0
                }else{
                    alert('登录失败！')
                }
            })

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
