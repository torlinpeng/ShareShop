
<template>

  <div class="nologin">
			<img src="../../assets/nologin.svg">
			<p>登录十秒钟，快乐到手中</p>
			<router-link to="/User"><span>去登录</span></router-link>
		</div>
 
</template>

<script>
  export default {     
    data () {
      return {
      }
    },
    methods: {
}
  }
</script>

<style scoped>
	.nologin {
		text-align: center;
		margin-top: 25%;
		font-size: 16px;
		color: #1296db;
	}
	.nologin p{
		margin-top: 20px;
	}
	.nologin span{
		height: 40px;
		width: 200px;
		text-align: center;
		display: inline-block;
		line-height: 40px;
		background: #E6171E;
		color: #fff;
		border-radius:10px;
		margin-top: 40px;
	}
</style>
