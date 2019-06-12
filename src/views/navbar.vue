<template>
  <div class="nav">
    <nav-search></nav-search>
    <nav-swipe></nav-swipe>
  </div>
</template>

<script>
import navSearch from '@/views/navbar/nav-search'
import navSwipe from '@/views/navbar/nav-swipe'
export default {
  components: {
    navSearch,
    navSwipe
  }
}
</script>

<style lang="scss" scoped>
.nav{
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  background-color: #fdde4a;
}
</style>
