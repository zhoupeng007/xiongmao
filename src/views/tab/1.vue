<template>
  <div class="film">
    <banner></banner>
    <grids></grids>
    <lun></lun>
  </div>
</template>
<script>
import banner from '@/views/tab/banner'
import grids from '@/views/tab/film/grids'
import lun from '@/views/tab/film/lun'
export default {
  components: {
    banner,
    grids,
    lun
  }
}
</script>

<style lang="scss" scoped>
  .film{
    padding-top: 2.33rem
  }
</style>
