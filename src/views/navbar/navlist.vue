<template>
  <div>
    <div class="navlisthead">
      <span>全部分类</span>
      <span class="listclose" @click="navshow()">X</span>
    </div>
    <ul class="listbody" v-if="datalist" @click="xppluyou()">
      <router-link :to="`/tab/${data.id}`" tag="li" class="listbody_li" v-for="data in datalist" :key="data.id">
        <div>
          <img :src="data.imageUrl" alt="">
          <span>{{data.name}}</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import bus from '@/components/bus'
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('http://www.xiongmaoyouxuan.com/api/tabs?sa=').then(res => {
      this.datalist = res.data.data.list
    })
  },
  methods: {
    navshow () {
      this.$store.commit('navisshow')
    },
    xppluyou () {
      console.log(this.$route.params.id)
      bus.$emit('xppluyou', this.$route.params.id)
      this.navshow()
    }
  }
}
</script>

<style lang="scss" scoped>
  .navlisthead{
    background-color: #fdde4a;
    font-size: .373rem;
    text-align: center;
    height: 1.05rem;
    padding-top: .325rem;
    box-sizing: border-box;
    position: relative;
    z-index: 100;
  }
  .listclose{
    position: absolute;
    right: 5%;
  }
  .listbody{
    background-color: #fff;
    overflow: hidden;
    padding-bottom: .25rem;
    .listbody_li{
      width: 25%;
      float: left;
      text-align: center;
      font-size: .32rem;
      margin-bottom: .427rem;
      img{
        display: inline-block;
        width: 1.28rem;
        height: 1.28rem;
        text-align: center;
        font-size: .32rem;
      }
      span{
        display: block;
        text-align: center;
        font-size: .32rem;
      }
    }
  }
</style>
