<template>
  <div class="home_nav">
    <div class="home">
      <router-link to="/" class="home_nav_items" tag="div" active-class="home_nav_items_acrive">今日推荐</router-link>
    </div>
    <div class="line"></div>
    <navSwiper :key="datalist.length">
      <!--  eslint-disable-line -->
      <div class="swiper-slide" v-for="data in datalist" :key="data.id" v-show="data.id !== 1">
        <router-link :to="`/tab/${data.id}`" tag="div" class="xppnav2">{{data.name}}</router-link>
      </div>
    </navSwiper>
  </div>
</template>

<script>
import axios from 'axios'
import navSwiper from '@/views/navbar/navSwiper'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('http://www.xiongmaoyouxuan.com/api/tabs?sa=').then(res => {
      console.log(res.data.data.list)
      this.datalist = res.data.data.list
    })
  },
  components: {
    navSwiper
  }
}
</script>
<style lang="scss" scoped>
  .home_nav{
    position: relative;
    padding: 0 .4rem 0 .533rem;
    box-sizing: border-box;
    box-shadow: 1px 2px 5px hsla(0,11%,79%,.5);
    height: 1.333rem;
    font-size: 0;
    overflow: hidden;
    vertical-align: middle;
    .home{
      float: left;
      vertical-align: middle;
      height: 1.333rem;
      .home_nav_items{
        display: inline-block;
        height: 100%;
        box-sizing: border-box;
        margin-right: .2rem;
        font-size: .4rem;
        color: #6b4c10;
        height: 1.333rem;
        line-height: 1.35rem;
        overflow: hidden;
        margin-right: 0;
        cursor: pointer;
      }
      .home_nav_items_acrive{
        color: #43240c !important;
        border-bottom: 4px solid #43240c;
      }
    }
    .line{
        width: 1px;
        height: .633rem;
        margin: .35rem .1rem .35rem .25rem;
        background-color: #877a73;
        float: left;
      }
  }
</style>
