<template>
  <div >
    <scroller lock-y :scrollbar-x=false>
      <div class="sec-kill">
        <div class="kill-item" v-for="item in msg">
          <img :src=item.img>
          <span class="money">{{item.current}}</span>
          <s class="old">{{item.old}}</s>
        </div>
      </div>
    </scroller>
  </div>

</template>

<script>
  import {Scroller} from 'vux'
  export default {
    name: "",
    components: {
      Scroller,
    },
    data () {
      return {
        msg: [{img: require('./images/kill01.jpg'), old: "129", current: "59"},
          {img: require('./images/kill01.jpg'), old: "129", current: "59"},
          {img: require('./images/kill03.jpg'), old: "129", current: "59"},
          {img: require('./images/kill01.jpg'), old: "129", current: "59"},
          {img: require('./images/kill01.jpg'), old: "129", current: "59"},
          {img: require('./images/kill01.jpg'), old: "129", current: "59"},
          {img: require('./images/kill01.jpg'), old: "129", current: "59"},
          {img: require('./images/kill03.jpg'), old: "129", current: "59"},
          {img: require('./images/kill01.jpg'), old: "129", current: "59"},
          {img: require('./images/kill01.jpg'), old: "129", current: "59"},
          {img: require('./images/kill01.jpg'), old: "129", current: "59"},
          {img: require('./images/kill03.jpg'), old: "129", current: "59"},
          {img: require('./images/kill01.jpg'), old: "129", current: "59"},
          {img: require('./images/kill01.jpg'), old: "129", current: "59"},
          {img: require('./images/kill01.jpg'), old: "129", current: "59"},
          {img: require('./images/kill01.jpg'), old: "129", current: "59"},
          {img: require('./images/kill03.jpg'), old: "129", current: "59"},
          {img: require('./images/kill01.jpg'), old: "129", current: "59"},
          {img: require('./images/kill01.jpg'), old: "129", current: "59"},
        ]
      }
    },
  }

</script>

<style scoped>
  .sec-kill {
    width: 1920px;
    text-align: center;
    background-color: white;
    margin: 5px 0;
    padding: 10px 5px;
    overflow: auto;
  }

  .kill-item {
    border-right: 1px solid rgb(243, 243, 243);
    float: left;
    width: 100px;
    height: auto;
    display: inline-block;
  }

  img {
    width: 80px;
  }

  .money, .old {
    display: block;
    font-size: 14px;
  }

  .old {
    color: grey
  }
</style>
