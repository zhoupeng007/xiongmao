<template>
  <div :key="luyou">
     <div class="split-line">
        <span class="befor">━━━━━◆</span>
        <span class="text">大家都在逛</span>
        <span class="befor">◆━━━━━</span>
    </div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-immediate-check="false"
      infinite-scroll-distance="200"
      infinite-scroll-disabled="isChufa"
    >
      <li v-for="item in datalist" :key="item.commodityId" @click="handeClick(item.id)">
        <div class="img">
          <img :src="item.image" v-if="item.id !== 13258076">
        </div>
        <p class="title">{{item.title}}</p>
        <p class="des">
          <span class="tianmao">天猫</span>
          <span class="baoyou">包邮</span>
        </p>
        <p class="comfoot">
          <span class="price">￥{{item.price}}</span>
          <span class="saleNum">{{item.saleNum}}人已买</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import bus from '@/components/bus'
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      isChufa: false,
      current: 0,
      number: 20,
      luyou: 2
    }
  },
  mounted () {
    axios.get(`http://www.xiongmaoyouxuan.com/api/tab/${this.$route.params.id}?start=0`).then(res => {
      console.log(res.data.data.items.list)
      this.datalist = res.data.data.items.list
    })
    bus.$on('xppluyou', res => {
      this.luyou = res
      this.$nextTick(() => {
        axios.get(`http://www.xiongmaoyouxuan.com/api/tab/${this.luyou}?start=0`).then(res => {
          console.log(res.data.data.items.list)
          this.datalist = res.data.data.items.list
        })
      })
    })
  },
  methods: {
    handeClick (id) {
      // 跳转路由--编程式导航--路径
      this.$router.push(`/c/${id}`)

      // 跳转路由--编程式导航--名字
      // this.$router.push({ name: 'detail', params: { id: id } })
    },
    loadMore () {
      this.isChufa = true
      this.current = this.current + this.number
      console.log('到底了 ajax请求', this.current)
      axios.get(`http://www.xiongmaoyouxuan.com/api/tab/${this.luyou}/feeds?start=${this.current}&sort=0`).then(res => {
        console.log(res.data.data.list)
        this.datalist = [...this.datalist, ...res.data.data.list]
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

 .split-line{
       height: 1.33rem;
       line-height: 1.33rem;
       text-align: center;
       font-size: 12px;
      font-size: .32rem;
        color: #877a73;

  }
  .split-line .befor{
       color: #fdde4a;
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
