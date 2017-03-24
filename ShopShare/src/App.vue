<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-show="show"></TabBar>
  </div>
</template>

<script>
  import TabBar from "./components/TabBar/TabBar.vue"
  export default {
    components: {
      TabBar
    },
    data(){
      return {
        show:true
      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      $route: 'isShow'
    },
    methods:{
      isShow(to,from){
        if (to.path==="/User"){
          this.show=true
        }else {
          this.show=true
        }
      }
    }
  }
</script>

<style scoped>
  #app{
  }
</style>
