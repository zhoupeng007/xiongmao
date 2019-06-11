<template>
  <div>
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

</style>
