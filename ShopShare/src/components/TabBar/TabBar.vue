<template>
  <div class="bottom-tab">
    <div class="item">
      <router-link to="/Home">
        <span class="icon icon-home"></span>
        <div class="home">首页</div>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/Items">
        <span class="icon icon-category"></span>
        <div class="items">分类</div>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/Finding">
        <span class="icon icon-find"></span>
        <div class="finding">收藏</div>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/ShopCar">
        <span class="icon icon-cart"></span>
        <div class="shopcar">购物车</div>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/User">
        <span class="icon icon-my"></span>
        <div class="user">我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data () {
      return {}
    },
  }
</script>

<style scoped>
  @import "../../common/style/style.css";

  .bottom-tab {
    width: 100%;
    height: 60px;
    display: flex;
    position: fixed;
    left: 0px;
    bottom: 0px;
    background-color: rgb(243, 243, 243);
    z-index: 100;
  }

  .item {
    flex: 1;
    text-align: center;
    line-height: 50px;
  }

  .home, .finding, .items, .user, .shopcar {
    line-height: 0;
    font-size: 14px;
    color: grey;
  }

  .icon {
    line-height: 0;
    font-size: 20px;
    color: rgb(96, 98, 109);
  }

  .router-link-active span, .router-link-active div {
    color: rgb(242, 48, 48);
  }
</style>
