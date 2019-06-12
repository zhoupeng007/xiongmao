<template>
  <div class="all">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="ban in bannerlist" :key="ban.id">
            <img :src="ban.imageUrl">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
  data () {
    return {
      bannerlist: []
    }
  },
  mounted () {
    axios.get('http://www.xiongmaoyouxuan.com/api/tab/1?start=0').then(res => {
      console.log(res.data.data.banners)
      this.bannerlist = res.data.data.banners
    })
  },
  updated () {
    // eslint-disable-next-line
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar'
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    })
  }

}
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.all {
  width: 100%;
  height: 2.76rem;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
img{
    width: 100%;
}
</style>
