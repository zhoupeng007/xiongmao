<template>
  <div>
    <headersearch></headersearch>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-immediate-check="false"
      infinite-scroll-distance="200"
      infinite-scroll-disabled="isChufa"
    >
      <li
        v-for="(search,index) in searchlist"
        :key="index"
        @click="searchC(search.id)"
        v-show="search.id !== 4035"
      >
        <div class="img">
          <img :src="search.image">
        </div>
        <p class="title">{{search.title}}</p>
        <p class="des">
          <span class="tianmao">天猫</span>
          <span class="baoyou">包邮</span>
        </p>
        <p class="comfoot">
          <span class="price">￥{{search.price}}</span>
          <span class="saleNum">{{search.saleNum}}人已买</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import bus from '@/components/bus'
import axios from 'axios'
import headersearch from '@/views/tab/search/header_search'
export default {
  data () {
    return {
      searchlist: [],
      isChufa: false,
      current: 0,
      number: 40,
      word: ''
    }
  },
  mounted () {
    bus.$on('searchvalue', res => {
      this.word = res
    })
    axios
      .get(
        'http://www.xiongmaoyouxuan.com/api/search?word=T%E6%81%A4+%E5%A5%B3&start=0&sort=0&couponOnly=NaN&minPrice=0&maxPrice=99999'
      )
      .then(res => {
        this.searchlist = res.data.data.list
      })
  },
  beforeCreate () {
    this.$store.commit('navcisshow')
  },
  beforeDestroy () {
    this.$store.commit('navcisshow')
  },
  components: {
    headersearch
  },
  methods: {
    searchC (id) {
      this.$router.push(`/c/${id}`)
    },
    loadMore () {
      this.isChufa = true
      this.current = this.current + this.number
      console.log('到底了 ajax请求', this.current)
      axios
        .get(
          `http://www.xiongmaoyouxuan.com/api/search?word=T%E6%81%A4+%E5%A5%B3&start=${
            this.current
          }&sort=0&couponOnly=NaN&minPrice=0&maxPrice=99999`
        )
        .then(res => {
          this.searchlist = [...this.searchlist, ...res.data.data.list]
          this.isChufa = false
        })
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
ul {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #f5f5f5;
  flex-wrap: wrap;
  li {
    width: 50%;
    height: 100%;
    background-color: #fff;
    margin-bottom: 0.2rem;
    box-sizing: border-box;
    box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.5);
    &:nth-child(odd) {
      border-right: 0.08rem solid #f5f5f5;
    }
    div.img {
      width: 100%;
      height: 3rem;

      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }
    .title {
      overflow: hidden;
      font-size: 0.32rem;
      line-height: 0.48rem;
      text-overflow: ellipsis;
      color: #877a73;
      white-space: nowrap;
    }
    p.comfoot {
      height: 0.64rem;
      font-size: 0;
      overflow: hidden;
      margin-top: 0.11rem;
      text-align: left;
      vertical-align: bottom;
      .price {
        display: inline-block;
        width: 1.2rem;
        font-size: 0.27rem;
        color: #fa585a;
        letter-spacing: 0;
      }
      .saleNum {
        display: inline-block;
        font-size: 0.27rem;
        color: #877a73;
        letter-spacing: 0;
      }
    }
    p.des {
      height: 0.4rem;
      font-size: 0;
      overflow: hidden;
      margin-top: 0.11rem;
      text-align: left;
      vertical-align: bottom;
      position: relative;
    }
    .tianmao {
      position: absolute;
      display: inline-block;
      width: 0.6rem;
      font-size: 0.27rem;
      color: #fff;
      text-align: center;
      letter-spacing: 0;
      background-color: #df2b2f;
      left: 0;
    }
    .baoyou {
      position: absolute;
      display: inline-block;
      width: 1.2rem;
      font-size: 0.27rem;
      color: #d8d4d1;
      letter-spacing: 0;
      right: 0;
    }
  }
}
</style>
