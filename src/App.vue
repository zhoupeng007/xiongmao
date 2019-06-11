<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.commodityId">
        <img :src="data.image" alt="">
        <h3>{{data.title}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('/api/tab/1?start=0').then(res => {
      console.log(res.data.data.items.list)
      this.datalist = res.data.data.items.list
    })
  }
  // https://img.alicdn.com/bao/uploaded/i3/3878483432/TB1dYSVmAKWBuNjy1zjXXcOypXa_!!0-item_pic.jpg

}
</script>

<style lang="scss">
img{
  width: 100%;
  height: 100%;
}
</style>
