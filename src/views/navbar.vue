<template>
  <div class="nav" v-show="$store.state.navcshow">
    <transition name="fade">
      <nav-search v-show="$store.state.xiding"></nav-search>
    </transition>
    <nav-swipe v-show="$store.state.navshow"></nav-swipe>
    <navlist v-show="!$store.state.navshow"></navlist>
  </div>
</template>

<script>
import navlist from '@/views/navbar/navlist'
import navSearch from '@/views/navbar/nav-search'
import navSwipe from '@/views/navbar/nav-swipe'
export default {
  data () {
    return {
      navsisshow: true
    }
  },
  components: {
    navSearch,
    navSwipe,
    navlist
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
