<template>
  <div class="all">
    <div class="comm">大家都在逛</div>
    <ul>
      <li v-for="item in datalist" :key="item.commodityId">
        <div class="img">
          <img :src="item.image">
        </div>
        <p class="title">{{item.title}}</p>
        <p class="comfoot">
          <span class="price">￥{{item.price}}</span>
          <span class="saleNum">{{item.saleNum}}</span>
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
      datalist: []
    }
  },
  mounted () {
    axios.get('http://www.xiongmaoyouxuan.com/api/tab/2?start=0').then(res => {
      console.log(res.data.data.items.list)
      this.datalist = res.data.data.items.list
    })
  }
}
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.comm {
  width: 100%;
  text-align: center;
  height: 1.33rem;
  line-height: 1.33rem;
  vertical-align: middle;
  font-size: 0.32rem;
  color: hsla(21, 8%, 49%, 0.7);
  background-color: #f5f5f5;
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
    margin-bottom: .2rem;
    box-sizing: border-box;
    box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.5);
    &:nth-child(odd) {
      border-right:0.08rem solid #f5f5f5;
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
  }
}
</style>
