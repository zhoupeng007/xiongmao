<template>
  <div class="navSwiper">
    <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
  </div>
</template>

<script>
export default {

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
</style>
