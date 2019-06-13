<template>
    <div>

    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      desclist: [],
      photolist: [],
      depitlist: []
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    axios.get(`http://www.xiongmaoyouxuan.com/api/detail?id=9118358&normal=1&sa=`).then(res => {
      console.log(res.data.data)
      this.desclist = res.data.data.descContentList
      this.photolist = res.data.data.photo
      this.depitlist = res.data.data
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
