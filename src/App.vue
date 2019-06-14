<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import navbar from '@/views/navbar'
export default {
  data () {
    return {

    }
  },
  mounted () {
    axios.get('/api/tab/1?start=0').then(res => {
      console.log(res.data.data.items.list)
      this.datalist = res.data.data.items.list
    })
    window.onscroll = this.handleScroll
  },
  methods: {
    handleScroll () {
      if (document.documentElement.scrollTop > 200) {
        this.$store.commit('xiding')
      } else {
        this.$store.commit('xiding1')
      }
    }
  },
  components: {
    navbar
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
img{
  display: block;
}
a{
  text-decoration: none;
}
ul{
  list-style: none;
}
</style>
