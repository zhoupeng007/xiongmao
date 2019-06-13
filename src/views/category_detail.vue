<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-immediate-check="false"
      infinite-scroll-distance="200"
      infinite-scroll-disabled="isChufa"
    >
      <li v-for="dist in distlist" :key="dist.commodityId" @click="handeClick(dist.id)">
        <div class="img">
          <img :src="dist.image">
        </div>
        <p class="title">{{dist.title}}</p>
        <p class="des">
          <span class="tianmao">天猫</span>
          <span class="baoyou">包邮</span>
        </p>
        <p class="comfoot">
          <span class="price">￥{{dist.price}}</span>
          <span class="saleNum">{{dist.saleNum}}人已买</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      distlist: [],
      isChufa: false,
      current: 0,
      number: 20
    }
  },
  mounted () {
    axios.get(`http://quan.lukou.com/api/category/${this.$route.params.id}/items?start=0`).then(res => {
      this.distlist = res.data.data.items.list
    })
  },
  methods: {
    handeClick (id) {
      this.$router.push(`/c/${id}`)
    },
    loadMore () {
      this.isChufa = true
      this.current = this.current + this.number
      console.log('到底了 ajax请求', this.current)
      axios.get(`http://quan.lukou.com/api/category/${this.$route.params.id}/items?start=${this.current}`).then(res => {
        console.log(res.data.data.items.list)
        this.distlist = [...this.distlist, ...res.data.data.items.list]
        this.isChufa = false
      })
      // http://quan.lukou.com/api/category/1681/items?start=0&sort=0
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
  margin-top: 2.5rem;
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
    p.des{
      height: .4rem;
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
        width: .6rem;
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
        right:0;
      }
  }
}
</style>
