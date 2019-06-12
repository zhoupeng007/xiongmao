<template>
    <div>
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
    </div>
</template>
<script>
import axios from 'axios'
export default {
  mounted () {
    axios.get('api/tab/1?start=0').then(res => {
      console.log(res)
      this.$data = res
    })
  }
}
</script>
