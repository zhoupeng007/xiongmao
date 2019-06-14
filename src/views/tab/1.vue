<template>
  <div class="film">
    <banner></banner>
    <grids></grids>
    <xiala></xiala>
  </div>
</template>
<script>
import banner from '@/views/tab/banner'
import xiala from '@/views/tab/film/xiala'
import grids from '@/views/tab/film/grids'
export default {
  data () {
    return {

    }
  },
  components: {
    banner,
    grids,
    xiala
  }
}
</script>

<style lang="scss" scoped>
  .film{
    padding-top: 2.33rem
  }
</style>
