<template>
  <div class="film">
    <banner></banner>
    <grids></grids>
  </div>
</template>
<script>
import banner from '@/views/tab/banner'
import grids from '@/views/tab/film/grids'
export default {
  components: {
    banner,
    grids
  }
}
</script>

<style lang="scss" scoped>
  .film{
    padding-top: 2.33rem
  }
</style>
