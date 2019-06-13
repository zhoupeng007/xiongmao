<template>
  <div class="navSwiper">
    <div class="swiper-container xppnav">
    <div class="swiper-wrapper xppnav1">
      <slot></slot>
    </div>
  </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  mounted () {
    // eslint-disable-next-line
    var swiper = new Swiper('.xppnav', {
      slidesPerView: 4,
      spaceBetween: 10
    })
  }
}
</script>

<style lang="scss" scoped>
  .navSwiper{
    height: 1.333rem;
    margin: 0 .8rem 0 2.1rem;
  }
  .swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }
  .xppnav{
    height: 100%;
  }
  .xppnav1{
    height: 100%;
  }
  .xppnav2{
    height: 100%;
    width: auto;
    font-size: .3rem;
    line-height: 1.3rem;
  }
  .swiper-slide{
    height: 100%;
    width:auto;
  }
</style>
