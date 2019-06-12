<template>
  <div class="film">
    首页
    <banner></banner>
    <waterfall></waterfall>
  </div>
</template>
<script>
import waterfall from './Waterfall'
import banner from './banner-swiper'
export default {
  components: {
    waterfall,
    banner
  }
}
</script>

<style lang="scss" scoped>
  .film{
    padding-top: 2.33rem
  }
</style>
